function sendMail1() {
    var link = "rtorres_1999@hotmail.com"
      + "?cc="
      + "&subject=" + escape("Traducir Pagina Web")
      + "&body=" + escape("CONTRATANTE: " + document.getElementById('name').value);

    var n = document.forms[0].name.value;
    var m = document.forms[0].mail.value;
    var t = document.getElementById("test");
    var filter = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,8})+$/;
    if (n.length >= 2 && filter.test(m)) { window.location.href = "mailto:" + link; return true; }
    else { t.innerHTML = "Revisa los datos . . ."; setTimeout(function () { t.innerHTML = "" }, 2000); return false; }
  }

  function sendMail2() {
    var link = "rtorres_1999@hotmail.com"
      + "?cc="
      + "&subject=" + escape("Traducir Video o Spot Publicitario")
      + "&body=" + escape("CONTRATANTE: " + document.getElementById('name').value);

    var n = document.forms[0].name.value;
    var m = document.forms[0].mail.value;
    var t = document.getElementById("test");
    var filter = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,8})+$/;
    if (n.length >= 2 && filter.test(m)) { window.location.href = "mailto:" + link; return true; }
    else { t.innerHTML = "Revisa los datos . . ."; setTimeout(function () { t.innerHTML = "" }, 2000); return false; }
  }

  function sendMail3() {
    var link = "rtorres_1999@hotmail.com"
      + "?cc="
      + "&subject=" + escape("Traducir Audio")
      + "&body=" + escape("CONTRATANTE: " + document.getElementById('name').value);

    var n = document.forms[0].name.value;
    var m = document.forms[0].mail.value;
    var t = document.getElementById("test");
    var filter = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,8})+$/;
    if (n.length >= 2 && filter.test(m)) { window.location.href = "mailto:" + link; return true; }
    else { t.innerHTML = "Revisa los datos . . ."; setTimeout(function () { t.innerHTML = "" }, 2000); return false; }
  }