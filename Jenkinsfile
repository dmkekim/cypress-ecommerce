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
        sh 'sudo npm ci'
        sh "sudo npm run test"
      }
    }
  }
}
