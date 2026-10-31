// Root page: send the visitor to /en/ or /it/ (saved choice, then browser language, then English).
(function () {
  var lang = "en";
  try {
    var saved = localStorage.getItem("dc-lang");
    if (saved === "en" || saved === "it") {
      lang = saved;
    } else {
      var list = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || ""];
      for (var i = 0; i < list.length; i++) {
        var l = String(list[i]).toLowerCase();
        if (l.indexOf("it") === 0) { lang = "it"; break; }
        if (l.indexOf("en") === 0) { lang = "en"; break; }
      }
    }
  } catch (e) { /* storage blocked: keep the language from the browser or English */ }
  location.replace("/" + lang + "/" + location.hash);
})();
