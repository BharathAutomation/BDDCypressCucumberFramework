pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/BharathAutomation/BDDCypressCucumberFramework.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                bat 'npm ci'
            }
        }
        stage('Run Tests') {
            steps {
                script {
                    try {
                        bat 'npx cypress run --headless --spec cypress/e2e/features/ApplicationTest.feature'
                    } catch (Exception e) {
                        echo "Failed to run Cypress tests: ${e.message}"
                        currentBuild.result = 'FAILURE'
                        error('Cypress tests failed')
                    }
                }
            }
        }
        stage('Generate Report') {
            steps {
                bat 'npm run generate-multi-cucumber-html-report'
            }
        }
    }
    post {
        always {
            archiveArtifacts artifacts: 'cypress/reports/*.html', allowEmptyArchive: true
            junit 'cypress/reports/*.xml'
        }
    }
}
