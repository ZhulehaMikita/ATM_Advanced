
node {
  stage('SCM') {
    checkout scm
  }
  stage('Install') {
    bat 'npm install'
  }
    stage('Test') {
    bat 'npm test'
  }
  stage('SonarQube analysis') {
    def scannerHome = tool 'SonarScanner';
    withSonarQubeEnv('Sonar local') { 
      bat "${scannerHome}/bin/sonar-scanner" 
    }
  }
}
