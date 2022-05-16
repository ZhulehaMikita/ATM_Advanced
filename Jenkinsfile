
node {
  stage('SCM') {
    checkout scm
  }
  stage('Install') {
        dir("TAF_IO") {
      bat 'npm install'
    }
  }
  stage('Test') {
    dir("TAF_IO") {
      bat 'npm test'
    }
  }
  stage('SonarQube analysis') {
    def scannerHome = tool 'SonarScanner';
    withSonarQubeEnv('Sonar local') { 
      bat "${scannerHome}/bin/sonar-scanner" 
    }
  }
} post {
      always {
        junit '**/reports/junit/*.xml'
      }
   } 
