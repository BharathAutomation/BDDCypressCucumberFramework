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
                bat 'npx cypress run'
            }
        }
        stage('Generate Report') {
            steps {
                bat 'npm run generate-multi-cucumber-html-report'
            }
        }
    }
    post {
      
    }
}
