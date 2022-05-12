
node {
  stage('SCM') {
    checkout scm
  }
  stage('SonarQube analysis') {
    def scannerHome = tool 'sonar-scanner-4.7.0.2747-windows';
    withSonarQubeEnv('My SonarQube Server') { 
      bat "${scannerHome}/bin/sonar-scanner"
    }
  }
}
