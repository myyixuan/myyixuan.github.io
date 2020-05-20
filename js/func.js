function Time(){
  var theTimeIMetU = new Date(2020, 3, 6, 20, 41, 0, 0);
  var now = Date.now();
  var seconds = ~~((now - theTimeIMetU) / 1000);
  var timeDom = document.getElementById('clock');
  var days = ~~(seconds / (24 * 3600));
  seconds = seconds % (24 * 3600)
  var hours = ~~(seconds / 3600)
  if (hours < 10) {
    hours = '0' + hours
  }
  seconds = seconds % 3600
  var minutes = ~~(seconds / 60)
  if (minutes < 10) {
    minutes = '0' + minutes
  }
  seconds = seconds % 60

  if (timeDom) {
    timeDom.innerHTML = '<span class="time-number">' + days + '</span><span>days</span><span class="time-number time-unit">' + hours + '</span><span>hrs</span><span class="time-number  time-unit">' + minutes + '</span><span>mins</span><span class="time-number  time-unit">' + seconds + '</span><span>secs</span><br>'
  }
}

var offsetX = $("#loveHeart").width() / 2;
var offsetY = $("#loveHeart").height() / 2 - 55;

var showTrigger = document.getElementById('show');

$('#ticket-tip').fadeIn(3000, function() {
  showTrigger.onclick = function(e) {
    document.querySelector('#bgm').play()
    $('#show').fadeOut('fast')
    showTrigger = null

    $('#ticket-body').slideDown(5000, function() {
      adjustCodePosition();
      $("#code").css('display', 'block')
      $("#code").typewriter();

      setTimeout(function () {
        window.scrollTo(0, 430)
      }, 6e3);

      setTimeout(function () {
        window.scrollTo(0,840)
      }, 16e3);

      setTimeout(function(){
        $('#container').css('visibility', 'visible')
        move()
        setTimeout(function () {
          window.scrollTo(0,0)
        }, 2e3);
        setTimeout(function() {
          $('#main').css('visibility', 'visible')
          setInterval(Time, 500);
        }, 12e3)
      }, 30e3);
    })
  }
})
