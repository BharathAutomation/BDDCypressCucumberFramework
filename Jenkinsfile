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
                bat 'npm install'
            }
        }
        stage('Run Tests') {
            steps {
                bat 'npm run run-test'
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
            echo 'Cypress tests completed.'
        }
    }
}
