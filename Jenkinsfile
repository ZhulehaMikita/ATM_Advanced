
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
        bat 'npm test'
                def testResults = junit testResults: '**/reports/junit/*.xml'
        currentBuild.result = "SUCCESS"
        rtp stableText: "<html><head><h4><u>${testResults.totalCount} tests performed:</u></h4></head><body><h5><span style='color:olivedrab'>${testResults.passCount}</span> tests passed</h5><h5><span style='color:crimson'>${testResults.failCount}</span> tests failed</h5><h5><span style='color:gray'>${testResults.skipCount}</span> tests skipped</h5></body></html>"
            parserName:       'HTML'
            unstableAsStable: true
            failedAsStable:   true
            abortedAsStable:  true

      }
  }
  stage('SonarQube analysis') {
    def scannerHome = tool 'SonarScanner';
    withSonarQubeEnv('Sonar local') { 
      bat "${scannerHome}/bin/sonar-scanner" 
    }
  } 
} 
