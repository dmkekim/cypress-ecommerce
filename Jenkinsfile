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
        sh 'echo hello world'
        sh 'npm install'
        sh "npm run test"
      }
    }
  }
}
