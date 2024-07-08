pipeline {
    agent any
    
    tools {
        nodejs 'v20.11.1'
    }
    
    environment {
        CYPRESS_CACHE_FOLDER = "${HOME}/.cache/Cypress"
    }
    
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        
        stage('Install dependencies') {
            steps {
                sh 'npm install'
            }
        }
        
        stage('Run Cypress tests') {
            steps {
                script {
                    def cypressCmd = "npx cypress run --spec cypress/e2e/features/ApplicationTest.feature"
                    sh cypressCmd
                }
            }
            
            post {
                always {
                    junit allowEmptyResults: true, testResults: '**/junit.xml'
                    archiveArtifacts artifacts: '**/cypress/videos/*.mp4', allowEmptyArchive: true
                    archiveArtifacts artifacts: '**/cypress/screenshots/**/*.png', allowEmptyArchive: true
                }
            }
        }
    }
}
