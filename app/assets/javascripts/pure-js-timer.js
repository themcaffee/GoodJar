/*
  -----------------------------------------------------------
  Pure JavaScript countdown timer
  Author name : Vadim Shymko
  Author URI  : http://ninjadev.pw
  version     : 1.0
  -----------------------------------------------------------
*/

function pureJSTimer(options) {
  var startDate   = new Date(),
      currentDate = startDate,
      container   = document.querySelectorAll(options.container),
      addYears    = options.addYears          || 0,
      addMonths   = options.addMonths         || 0,
      addDays     = options.addDays           || 0,
      addHours    = options.addHours          || 0,
      addMinutes  = options.addMinutes        || 0,
      addSeconds  = options.addSeconds        || 0,
      endDate     = new Date(options.endDate) || new Date(startDate.getFullYear() + addYears, startDate.getMonth() + addMonths, startDate.getDate() + addDays, startDate.getHours() + addHours, startDate.getMinutes() + addMinutes, startDate.getSeconds() + addSeconds),
      countUp     = options.countUp           || false,
      afterUpdate = options.afterUpdate       || false,
      onFinish    = options.onFinish          || false;

  for (var i = 0; i < container.length; i++) {
    var daysContainer    = document.createElement('span'),
        hoursContainer   = document.createElement('span'),
        minutesContainer = document.createElement('span'),
        secondsContainer = document.createElement('span');

    container[i].appendChild(daysContainer);
    container[i].appendChild(hoursContainer);
    container[i].appendChild(minutesContainer);
    container[i].appendChild(secondsContainer);

    container[i].className    += ' pure-js-timer-container';
    daysContainer.className    = 'pure-js-timer-unit pure-js-timer-days';
    hoursContainer.className   = 'pure-js-timer-unit pure-js-timer-hours';
    minutesContainer.className = 'pure-js-timer-unit pure-js-timer-minutes';
    secondsContainer.className = 'pure-js-timer-unit pure-js-timer-seconds';

  }

  updateTimer(currentDate);
  var timer = setInterval(function() {
    updateTimer(currentDate);
  }, 1000);

  function updateTimer(currentTime) {
    var timerDays    = (countUp === true) ? Math.floor((currentTime.getTime() - startDate.getTime()) / 86400000) : Math.floor((endDate.getTime() - currentTime.getTime()) / 86400000),
        timerHours   = (countUp === true) ? Math.floor((currentTime.getTime() - startDate.getTime()) / 3600000) % 24 : Math.floor((endDate.getTime() - currentTime.getTime()) / 3600000) % 24,
        timerMinutes = (countUp === true) ? Math.floor((currentTime.getTime() - startDate.getTime()) / 60000) % 60 : Math.floor((endDate.getTime() - currentTime.getTime()) / 60000) % 60,
        timerSeconds = (countUp === true) ? Math.floor((currentTime.getTime() - startDate.getTime()) / 1000) % 60 : Math.floor((endDate.getTime() - currentTime.getTime()) / 1000) % 60;

    for (i = 0; i < container.length; i++) {
      container[i].querySelector('.pure-js-timer-days').innerHTML    = timerDays;
      container[i].querySelector('.pure-js-timer-hours').innerHTML   = timerHours;
      container[i].querySelector('.pure-js-timer-minutes').innerHTML = timerMinutes;
      container[i].querySelector('.pure-js-timer-seconds').innerHTML = timerSeconds;
    }

    if (afterUpdate !== false) {
      afterUpdate(startDate, endDate, currentDate);
    }

    if (Math.floor(currentDate.getTime() / 1000) >= Math.floor(endDate.getTime() / 1000)) {
      currentDate = new Date(endDate.getTime());
      clearInterval(timer);
      if (onFinish !== false) {
        onFinish(startDate, endDate);
      }
    } else {
      currentDate = new Date(currentTime.getTime() + 1000);
    }
  }
}
