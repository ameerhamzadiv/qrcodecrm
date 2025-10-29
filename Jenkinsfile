pipeline {
    agent any

    tools {
        nodejs "NodeJS"
    }

    environment {
        FTP_HOST = '154.53.50.45'
        FTP_USER = 'qrcode@qrcode.devhostest.com'
        FTP_PASS = 'g$Q#o5QJ]D9YwkE['
        FTP_PATH = '/' // adjust your cPanel subdomain path
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/ameerhamzadiv/qrcodecrm.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Build') {
            steps {
                bat 'npm run build'
            }
        }

        
        stage('Deploy to cPanel via FTP') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'cpanel-ftp', usernameVariable: 'FTP_USER', passwordVariable: 'FTP_PASS')]) {
                    powershell '''
                    Write-Host "Deploying build folder to FTP..."

                    $ftp = "ftp://$env:FTP_USER:$env:FTP_PASS@$env:FTP_HOST"
                    $localPath = "build/*"
                    $remotePath = "/"

                    Write-Host "Connecting to $ftp"
                    Write-Host "Uploading files..."
                    $webclient = New-Object System.Net.WebClient
                    Get-ChildItem -Recurse build | ForEach-Object {
                        $relativePath = $_.FullName.Substring((Get-Location).Path.Length + 1)
                        $remoteFile = "$ftp/$relativePath" -replace "\\", "/"
                        $dir = Split-Path $remoteFile
                        try { $webclient.UploadFile($remoteFile, "STOR", $_.FullName) } catch { Write-Host "Failed: $relativePath" }
                    }

                    Write-Host "FTP upload completed ✅"
                    '''
                }
            }
        }
    }

    post {
        success {
            echo '✅ Deployment completed successfully!'
        }
        failure {
            echo '❌ Deployment failed.'
        }
    }
}
