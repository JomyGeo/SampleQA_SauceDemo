const report = require('multiple-cucumber-html-reporter');
const fs = require('fs');

const mapOs = (os) => {
    if(os.startsWith('win')) {
        return 'windows';
        
    } else if (os.startsWith('osx')) {
        return 'osx';
    } else if (os.startsWith('linux')) {
        return 'linux';
    } else if (os.startsWith('ubuntu')) {
        return 'ubuntu';
    } else if (os.startsWith('android')) {
        return 'android';
    } else if (os.startsWith('ios')) {
        return 'ios';
    }
};

function timeConvert(n) {
    var num = n;
    var hours = (num / 60);
    var rhours = Math.floor(hours);
    var minutes = (hours - rhours) * 60;
    var rminutes = Math.round(minutes);
    return rhours + " hour(s) and " + rminutes + " minute(s).";
    }


    function msToTime(duration) {
        var milliseconds = parseInt((duration % 1000) / 100),
          seconds = Math.floor((duration / 1000) % 60),
          minutes = Math.floor((duration / (1000 * 60)) % 60),
          hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
      
        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;
      
        return hours + " hour(s) " + minutes + " Min " + seconds +" Sec ";
      }

fs.readFile('cypress/.run/results.json', function read(err, data) {
    if (err) {
        throw err;
    }
    var runInfos = JSON.parse(data);

report.generate({
	jsonDir: 'cypress/cucumber-json',
	reportPath: 'cypress/Consolidated_Report.html',
    openReportInBrowser:true,
    displayDuration:true,
    hideMetadata:false,
    displayReportTime:true,
	metadata:{
        browser: {
            name: runInfos.browserName,
            version: runInfos.browserVersion
        },
        device: 'Local machine',
        platform: {
            name: mapOs(runInfos.osName)
        }
    },
     customData: {
        title: 'Run info',
        data: [
            {label: 'Project', value: 'Cypress E2E Project'},
            {label: 'Tenant URL', value: runInfos.config.env.fusionURL},
            {label: 'Total No of Testcases Passed ', value:  runInfos.totalPassed },
            {label: 'Total No of Testcases Failed ', value: runInfos.totalFailed },
            {label: 'Total No of Testcases Skipped ', value: runInfos.totalSkipped},
            {label: 'Execution Start Time', value: new Date(runInfos.startedTestsAt).toLocaleString()},
            {label: 'Execution End Time', value: new Date(runInfos.endedTestsAt).toLocaleString()},
            {label: 'Total Duration', value: msToTime(runInfos.totalDuration)}
        ]
    } 

});
});