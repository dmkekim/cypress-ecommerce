pipeline {
  agent any
  // agent {
  //   // this image provides everything needed to run Cypress
  //   docker {
  //     image 'cypress/base:latest'
  //   }
  // }

  stages {
    stage('build and test') {
      steps {
        sh 'echo hello world'
        sh 'pwd'
        sh 'npm install --loglevel=verbose'
        sh "npm run test:jenkins"
      }
    }
  }
}
