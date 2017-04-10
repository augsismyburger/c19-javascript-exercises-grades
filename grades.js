var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];
var aRange = [91, 92, 93, 94, 95, 96, 97, 98, 99, 100];
var bRange = [81, 82, 83, 84, 85, 86, 87, 88, 89, 90];
var cRange = [71, 72, 73, 74, 75, 76, 77, 78, 79, 80];
var dRange = [61, 62, 63, 64, 65, 67, 68, 69, 70,];
var fRange = [50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60];
//NESTED FORS BIA
function check(array1, array2, score) {
    for (var j = 0; j < array1.length; j++) {
        for (var i = 0; i < array2.length; i++) {
            if (array1[j] === array2[i]) {
                score++;
            }
        }
    }
return score;
}
console.log();
var as = check(scores, aRange, 0);
var bs = check(scores, bRange, 0);
var cs = check(scores, cRange, 0);
var ds = check(scores, dRange, 0);
var fs = check(scores, fRange, 0);
var sorted = scores.sort(function(a, b){return b-a});
var message = "There are ";
console.log(message + as + " A's, " + message + bs + " B's, " + message + cs + " C's, " + message + ds + " D's, and " + message + fs + " F's");
console.log("The highest grade was a " + sorted[0]);
console.log("The lowest grade was a " + sorted[scores.length -1]);
