
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
    steps {
      dir("TAF_IO") {
        bat 'npm test'
        junit '**/reports/junit/*.xml'
      }
    }
  }
  stage('SonarQube analysis') {
    def scannerHome = tool 'SonarScanner';
    withSonarQubeEnv('Sonar local') { 
      bat "${scannerHome}/bin/sonar-scanner" 
    }
  } 
} 
