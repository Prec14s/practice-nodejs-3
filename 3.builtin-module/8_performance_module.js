const {PerformanceObserver} = require('perf_hooks');

function exampleFunction() {
    let sum = 0;
    for  (let i = 0; i < 1000000; i++) {
        sum +=i;    
}
console.log(sum);
    }

    const obs = new PerformanceObserver((items) => {
        console.log(items.getEntries()[0].duration);
        performance.clearMarks();
    });

    obs.observe({entryTypes: ['measure'], buffered: false});

    performance.mark('Start');
    exampleFunction();
    performance.mark('End');
    performance.measure('Example Function', 'Start', 'End');