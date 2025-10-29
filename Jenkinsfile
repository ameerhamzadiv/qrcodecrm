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
                    bat '''
                    echo "Installing lftp..."
                    apt-get update -y
                    apt-get install -y lftp

                    echo "Deploying build folder to FTP..."
                    lftp -u $FTP_USER,$FTP_PASS $FTP_HOST <<EOF
                    mirror -R -e ./build $FTP_PATH
                    quit
EOF
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
