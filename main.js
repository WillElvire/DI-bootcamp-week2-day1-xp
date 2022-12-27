var myWatchedSeries         = ["black mirror", "money heist", "the big bang theory"];
var myWatchedSeriesLength   = myWatchedSeries.length;
var myWatchedSeriesSentence = myWatchedSeries.toString();

console.log(`I watched ${myWatchedSeriesLength} series : ${myWatchedSeriesSentence}`);
myWatchedSeries[myWatchedSeries.indexOf("the big bang theory")] = "friends";
myWatchedSeries.push("attak of titans");
myWatchedSeries.unshift("tony montana");
delete myWatchedSeries[1]
myWatchedSeries[2] = myWatchedSeries[2].slice(0,3);
console.log(`${myWatchedSeries.toString()}`);
