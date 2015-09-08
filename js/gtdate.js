function GTDate() {
  this.initialize.apply(this, arguments);
}

GTDate.prototype = {
  baseTime: 0,
  initialize: function() {
    this.baseTime = (new Date('Tue, 13 Jul 2010 01:00:00 +0900')).getTime();
  },
  eorzeaHour: function() {
    return parseInt(((new Date()).getTime() - this.baseTime) / 1000 / 175 % 24);
  },
  eorzeaMinutes: function() {
    return parseInt(((new Date()).getTime() - this.baseTime) / 1000 / (4200 / 1440) % 60);
  },
  eorzeaTimeString: function() {
    var hour = this.eorzeaHour().toString();
    if (hour.length < 2)
      hour = '0' + hour;
    var min = this.eorzeaMinutes().toString();
    if (min.length < 2)
      min = '0' + min;
    return hour + ":" + min;
  }
};

jQuery(function() {
  var gtdate = new GTDate();
  $.fn.extend({gtdate: gtdate});
  var timerId = setInterval(function() { $('#eorzeaTime').text($.fn.gtdate.eorzeaTimeString()); }, 300);
});

