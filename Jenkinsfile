pipeline {
  agent {
    // this image provides everything needed to run Cypress
    docker {
      image 'cypress/base:latest'
    }
  }

  stages {
    stage('build and test') {
      steps {
        sh 'sudo chown -R 130:138 \"/.npm\"'
        sh 'echo hello world'
        sh 'npm i'
        sh "npm run test"
      }
    }
  }
}
