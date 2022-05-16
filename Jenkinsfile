
node {
  stage('SCM') {
    checkout scm
  }
  stage('Install') {
    sh 'npm install'
  }
    stage('Test') {
    sh 'npm test'
  }
  stage('SonarQube analysis') {
    def scannerHome = tool 'SonarScanner';
    withSonarQubeEnv('Sonar local') { 
      bat "${scannerHome}/bin/sonar-scanner" 
    }
  }
}
