function getDate(type) {
	const date = new Date();

	let year = date.getFullYear();
	let month = date.getMonth() + 1;
	let day = date.getDate();

	if (type === 'start') {
		year = year - 60;
	} else if (type === 'end') {
		year = year + 2;
	}
	month = month > 9 ? month : '0' + month;
	day = day > 9 ? day : '0' + day;

	return `${year}-${month}-${day}`;
}

function getTime(){
	var date = new Date(),
	year = date.getFullYear(),
	month = date.getMonth() + 1,
	day = date.getDate(),
	hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours(),
	minute = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes(),
	second = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
	month >= 1 && month <= 9 ? (month = "0" + month) : "";
	day >= 0 && day <= 9 ? (day = "0" + day) : "";
	var timer = year + '-' + month + '-' + day + ' ' + hour + ':' + minute ;//+ ':' + second
	return timer;
}

function getDay() {
	const date = new Date();
	let year = date.getFullYear();
	let month = date.getMonth() + 1;
	let day = date.getDate();
	month = month > 9 ? month : '0' + month;
	day = day > 9 ? day : '0' + day;
	return `${year}-${month}-${day}`;
}

function getMonth(type) {
	const date = new Date();

	let year = date.getFullYear();
	let month = date.getMonth() + 1;


	if (type === 'start') {
		year = year - 60;
	} else if (type === 'end') {
		year = year + 2;
	}
	month = month > 9 ? month : '0' + month;;


	return `${year}-${month}`;
}

function getYear(type) {
	const date = new Date();

	let year = date.getFullYear();
	let month = date.getMonth() + 1;


	if (type === 'start') {
		year = year - 60;
	} else if (type === 'end') {
		year = year + 2;
	}
	month = month > 9 ? month : '0' + month;;


	return `${year}-${month}`;
}

function getLastWeekDate() {
	const date = new Date();
	date.setDate(date.getDate() - 7);
	let year = date.getFullYear();
	let month = date.getMonth() + 1;
	let day = date.getDate();

	month = month > 9 ? month : '0' + month;
	day = day > 9 ? day : '0' + day;

	return `${year}-${month}-${day}`;
}

function getNextWeekDate() {
	const date = new Date();
	date.setDate(date.getDate() + 7);
	let year = date.getFullYear();
	let month = date.getMonth() + 1;
	let day = date.getDate();

	month = month > 9 ? month : '0' + month;
	day = day > 9 ? day : '0' + day;

	return `${year}-${month}-${day}`;
}

function getLastMonth(date) {
	date.setMonth(date.getMonth())
	let year = date.getFullYear();
	let month = date.getMonth() + 1;
	month = month > 9 ? month : '0' + month;
	return `${year}-${month}`;

}

function getLastYear(date) {
	date.setFullYear(date.getFullYear())
	let year = date.getFullYear() + 1;
	let month = date.getMonth() + 1;
	month = month > 9 ? month : '0' + month;
	return `${year}`;

}

function getNextMonth(date) {
	date.setMonth(date.getMonth() + 2)
	let year = date.getFullYear();
	let month = date.getMonth() + 1;
	month = month > 9 ? month : '0' + month;
	return `${year}-${month}`;
}

function getNextYear(date) {
	date.setMonth(date.getMonth() + 2)
	let year = date.getFullYear() + 1;
	let month = date.getMonth() + 1;
	month = month > 9 ? month : '0' + month;
	return `${year}`;
}

function stringToDate(dateStr, separator) {
	if (!separator) {
		separator = "-";
	}
	var dateArr = dateStr.split(separator);
	var year = parseInt(dateArr[0]);
	var month;
	if (dateArr[1].indexOf("0") == 0) {
		month = parseInt(dateArr[1].substring(1));
	} else {
		month = parseInt(dateArr[1]);
	}
	var day = 0;
	if (dateArr.length > 2) {
		parseInt(dateArr[2])
	}
	var date = new Date(year, month - 1, day);
	return date;
}

module.exports = {
	getDate: getDate,
	getDay: getDay,
	getMonth: getMonth,
	getYear: getYear,
	getLastWeekDate: getLastWeekDate,
	getNextWeekDate: getNextWeekDate,
	getLastMonth: getLastMonth,
	getLastYear: getLastYear,
	getNextMonth: getNextMonth,
	getNextYear: getNextYear,
	stringToDate: stringToDate,
	getTime:getTime
	
}
