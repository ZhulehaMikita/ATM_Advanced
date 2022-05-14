
node {
  stage('SCM') {
    git branch: 'main', credentialsId: 'fc084b53-4a60-44b0-b200-eb07393a4cb8', url: 'https://github.com/ZhulehaMikita/ATM_Advanced.git'
  }
  stage('SonarQube analysis') {
    def scannerHome = tool 'SonarScanner';
    withSonarQubeEnv('Sonar local') { 
      bat "${scannerHome}/bin/sonar-scanner" 
    }
  }
}
