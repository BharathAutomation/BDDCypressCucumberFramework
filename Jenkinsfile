pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/BharathAutomation/BDDCypressCucumberFramework'
            }
        }
        stage('Install Dependencies') {
            steps {
                bat 'npm ci' // Use npm ci for faster, reproducible builds
            }
        }
        stage('Run Tests') {
            steps {
                script {
                    def startTime = new Date().getTime()
                    bat 'npx cypress run --headless --parallel' // Run Cypress tests in headless mode and in parallel
                    def endTime = new Date().getTime()
                    def duration = endTime - startTime
                    echo "Test duration: ${duration} ms"
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
