pipeline {
    agent any

    tools {
        nodejs "NodeJS"
    }

    environment {
        FTP_HOST = '154.53.50.45'
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
            Write-Host "🚀 Deploying React build to cPanel FTP..."

            $ftpHost = "154.53.50.45"
            $ftpUser = "$env:FTP_USER"
            $ftpPass = "$env:FTP_PASS"
            $localPath = "build"

            # Function to create remote directories
            function Ensure-FtpDirectory {
                param([string]$remoteDir)
                $parts = $remoteDir -split '/'
                $path = ""
                foreach ($part in $parts) {
                    if ([string]::IsNullOrWhiteSpace($part)) { continue }
                    $path += "$part/"
                    try {
                        $uri = "ftp://$ftpHost/$path"
                        $req = [System.Net.FtpWebRequest]::Create($uri)
                        $req.Method = [System.Net.WebRequestMethods+Ftp]::MakeDirectory
                        $req.Credentials = New-Object System.Net.NetworkCredential($ftpUser, $ftpPass)
                        $req.UsePassive = $true
                        $req.KeepAlive = $false
                        $req.Timeout = 10000
                        $req.GetResponse().Close()
                    } catch {
                        # Ignore errors for already existing folders
                    }
                }
            }

            # Function to upload a single file
            function Upload-FtpFile {
                param([string]$localFile, [string]$remoteFile)

                $uri = "ftp://$ftpHost/$remoteFile"
                $uri = $uri -replace "\\\\", "/"

                $ftpRequest = [System.Net.FtpWebRequest]::Create($uri)
                $ftpRequest.Method = [System.Net.WebRequestMethods+Ftp]::UploadFile
                $ftpRequest.Credentials = New-Object System.Net.NetworkCredential($ftpUser, $ftpPass)
                $ftpRequest.UseBinary = $true
                $ftpRequest.UsePassive = $true
                $ftpRequest.KeepAlive = $false
                $ftpRequest.Timeout = 30000

                try {
                    $content = [System.IO.File]::ReadAllBytes($localFile)
                    $ftpRequest.ContentLength = $content.Length
                    $requestStream = $ftpRequest.GetRequestStream()
                    $requestStream.Write($content, 0, $content.Length)
                    $requestStream.Close()
                    Write-Host "✅ Uploaded: $remoteFile"
                } catch {
                    Write-Host "❌ Failed: $remoteFile -> $($_.Exception.Message)"
                }
            }

            # Loop through all files recursively
            Get-ChildItem -Recurse $localPath | ForEach-Object {
                if (-not $_.PSIsContainer) {
                    $relativePath = $_.FullName.Substring((Get-Location).Path.Length + 1)
                    $remoteFile = $relativePath -replace "^build[\\\\/]", ""
                    $remoteFile = $remoteFile -replace "\\\\", "/"

                    $remoteDir = [System.IO.Path]::GetDirectoryName($remoteFile)
                    if ($remoteDir) {
                        $remoteDir = $remoteDir -replace "\\\\", "/"
                        Ensure-FtpDirectory $remoteDir
                    }

                    Upload-FtpFile $_.FullName $remoteFile
                }
            }

            Write-Host "✅ Deployment completed successfully!"
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
