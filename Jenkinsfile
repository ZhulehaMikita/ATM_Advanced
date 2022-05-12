
node {
  stage('SCM') {
    checkout scm
  }
  stage('SonarQube analysis') {
    def scannerHome = tool 'Sonar local';
    withSonarQubeEnv('Sonar local') { 
      bat "${scannerHome}/bin/sonar-scanner"
    }
  }
}
