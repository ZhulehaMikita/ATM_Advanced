
node {
  stage('SCM') {
    checkout scm
  }
  stage('SonarQube analysis') {
    def scannerHome = tool 'SonarQube_Scanner';
    withSonarQubeEnv('SonarQube_Scanner') { 
      bat "${scannerHome}/bin/sonar-scanner"
    }
  }
}
