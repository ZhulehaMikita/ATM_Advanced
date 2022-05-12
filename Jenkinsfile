
node {
  stage('SCM') {
    checkout scm
  }
  stage('SonarQube analysis') {
    def scannerHome = tool 'SonarScanner';
    withSonarQubeEnv('Sonar local') { 
      bat "${scannerHome}/bin/sonar-scanner" \
     -D sonar.projectKey=ATM_Advanced \
     -D sonar.java.binaries= **/*.java \
    }
  }
}
