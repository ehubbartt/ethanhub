//function that generates 5 random values from between parameters and returns them in an array
export function randomIntervalsGenerator(min, max) {
	var randomIntervals = [];
	for (var i = 0; i < 10; i++) {
		randomIntervals.push(Math.floor(Math.random() * (max - min + 1) + min));
	}
	return randomIntervals;
}
