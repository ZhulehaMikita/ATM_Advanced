
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
        try { 
          bat 'npm test' 
        } finally {
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
