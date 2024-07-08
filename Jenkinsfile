pipeline {
    agent any

    environment {
        REPO_URL = 'https://github.com/BharathAutomation/BDDCypressCucumberFramework'
        BRANCH = 'master'
        CYPRESS_BROWSER = 'chrome'
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: "${BRANCH}", url: "${REPO_URL}"
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npx cypress run --spec cypress/e2e/features/ApplicationTest.feature'
            }
        }

        stage('Generate Report') {
            steps {
                sh 'node cypress/cucumber-html-report.js'
            }
        }
    }
}
