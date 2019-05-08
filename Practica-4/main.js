var s = document.getElementById("segundos"),
    m = document.getElementById("minutos"),
    h = document.getElementById("horas");

var segundos = 0,
    minutos = 0,
    horas = 0;

setInterval(function () {
  segundos++;
  switch (segundos) {
    case 60:
      segundos = 0;
      minutos++;
      switch (minutos) {
        case 60:
          minutos = 0;
          horas++;
          break;
        default:
          //
      }
      break;
    default:
      //
  }
  s.innerHTML = segundos;
  m.innerHTML = minutos;
  h.innerHTML = horas;
},1000);

var v1 = document.getElementById("v1"),
    v2 = document.getElementById("v2"),
    v3 = document.getElementById("v3"),
    v4 = document.getElementById("v4");

v1.onmouseout = function () {v1.muted = true};
v2.onmouseout = function () {v2.muted = true};
v3.onmouseout = function () {v3.muted = true};

v1.onmouseover = function () {v1.muted = false};
v2.onmouseover = function () {v2.muted = false};
v3.onmouseover = function () {v3.muted = false};

var change = function (n) {
  v4.src = "https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente" + n.toString() +".mp4";
}
