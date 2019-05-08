function main () {
  var display = document.getElementById("display"),
      result = document.getElementById("result"),
      cero = document.getElementById("0"),
      uno = document.getElementById("1"),
      dos = document.getElementById("2"),
      tres = document.getElementById("3"),
      cuatro = document.getElementById("4"),
      cinco = document.getElementById("5"),
      seis = document.getElementById("6"),
      siete = document.getElementById("7"),
      ocho = document.getElementById("8"),
      nueve = document.getElementById("9"),
      del= document.getElementById("del"),
      ac = document.getElementById("ac"),
      mult = document.getElementById("mult"),
      divi = document.getElementById("divi"),
      ans = document.getElementById("ans"),
      igual = document.getElementById("igual"),
      sum = document.getElementById("sum"),
      rest = document.getElementById("rest"),
      neg = document.getElementById("neg"),
      coma = document.getElementById("coma");

    cero.onclick = function () {
      display.innerHTML += cero.id;
    };
    uno.onclick = function () {
      display.innerHTML += uno.id;
    };
    dos.onclick = function () {
      display.innerHTML += dos.id;
    };
    tres.onclick = function () {
      display.innerHTML += tres.id;
    };
    cuatro.onclick = function () {
      display.innerHTML += cuatro.id;
    };
    cinco.onclick = function () {
      display.innerHTML += cinco.id;
    };
    seis.onclick = function () {
      display.innerHTML += seis.id;
    };
    siete.onclick = function () {
      display.innerHTML += siete.id;
    };
    ocho.onclick = function () {
      display.innerHTML += ocho.id;
    };
    nueve.onclick = function () {
      display.innerHTML += nueve.id;
    };
    coma.onclick = function () {
      display.innerHTML += coma.innerHTML;
    };
    sum.onclick = function () {
      display.innerHTML += sum.innerHTML;
    };
    rest.onclick = function () {
      display.innerHTML += rest.innerHTML;
    };
    mult.onclick = function () {
      display.innerHTML += mult.innerHTML;
    };
    divi.onclick = function () {
      display.innerHTML += divi.innerHTML;
    };
    igual.onclick = function () {
      console.log(display.innerHTML)
      var n = "",
          nums = [];
      for (var i = 0; i < display.innerHTML.length+1; i++) {
        switch (display.innerHTML[i]) {
          case "+":
            nums.push(parseFloat(n));
            nums.push(display.innerHTML[i])
            n = "";
            break;
          case "-":
            nums.push(parseFloat(n));
            nums.push(display.innerHTML[i])
            n = "";
            break;
          case "x":
            nums.push(parseFloat(n));
            nums.push(display.innerHTML[i])
            n = "";
            break;
          case "/":
            nums.push(parseFloat(n));
            nums.push(display.innerHTML[i])
            n = "";
            break;
          default:
            n += display.innerHTML[i];
        }
      }
      if (n != "") {
        nums.push(parseFloat(n));
      }
      var i = 0,
          r = nums[i];
      while (i < nums.length) {
        switch (nums[i+1]) {
          case "+":
            r += nums[i+2];
            break;
          case "-":
            r -= nums[i+2];
            break;
          case "x":
            r *= nums[i+2];
            break;
          case "/":
            r /= nums[i+2];
            break;
          default:
            //
        }
        console.log(nums[i])
        console.log(nums[i+1])
        console.log(nums[i+2])
        console.log(r)
        i += 2;
      }
      result.innerHTML = r;
    };
    del.onclick = function () {
      var l = display.innerHTML.length;
      display.innerHTML = display.innerHTML.substr(0,l-1);
    };
    ac.onclick = function () {
      display.innerHTML = " ";
    }

  }
