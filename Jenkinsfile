
node {
  stage('SCM') {
    checkout scm
  }
  stage('SonarQube analysis') {
    def scannerHome = tool 'SonarScanner 4.0';
    withSonarQubeEnv('SonarQube_Scanner') { 
      bat "${scannerHome}/bin/sonar-scanner"
    }
  }
}
