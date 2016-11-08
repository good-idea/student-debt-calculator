// Adapted from http://www.finaid.org/loans/studentloandebtclock.phtml

var ticker = {
	trillion: document.querySelectorAll('.ticker--trillion .value')[0],
	billion: document.querySelectorAll('.ticker--billion .value')[0],
	million: document.querySelectorAll('.ticker--million .value')[0],
	thousand: document.querySelectorAll('.ticker--thousand .value')[0],
	hundred: document.querySelectorAll('.ticker--hundred .value')[0],
};

// Timestamp for 12:00 AM GMT, October 1st, 2016
var then = new Date('Oct 1 2016 00:00 GMT').getTime();

var startAmount = 1396335480000; // Amount as of 2016 Q3, source: https://www.federalreserve.gov/releases/g19/HIST/cc_hist_memo_levels.html
var rate = 2853.88; // per second, source: http://www.finaid.org/loans/studentloandebtclock.phtml

(function tick() {
	var now = new Date().getTime();
	var diff = (now - then);
	var increase = (diff / (1000)) * rate;
	var newTotal = Math.floor(startAmount + increase).toString().split('');
	var hundred = newTotal.splice(-3).join('');
	var thousand = newTotal.splice(-3).join('');
	var million = newTotal.splice(-3).join('');
	var billion = newTotal.splice(-3).join('');
	var trillion = newTotal.join('');

	ticker.hundred.innerText = hundred;
	ticker.thousand.innerText = thousand;
	ticker.million.innerText = million;
	ticker.billion.innerText = billion;
	ticker.trillion.innerText = trillion;

	requestAnimationFrame(tick);
}());
