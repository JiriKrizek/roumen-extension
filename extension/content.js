var KEY_LEFT = 37;
var KEY_RIGHT = 39;

function getButton(text) {
  var buttons = document.getElementsByClassName("masoButton");
  if (buttons.length==0) {
    var buttons = document.getElementsByClassName("roumingButton");
  }

  for (var i = 0; i < buttons.length; i++) {
    var hrf = buttons[i].children[0];
    if (hrf) { 
      var ht_text = hrf.innerHTML;
      if  (ht_text == text) {
        return buttons[i].children[0];
      }
    }
  }
}

function getPrevButton() {
  return getButton("&lt;&lt;");
}

function getNextButton() {
  return getButton("&gt;&gt;");
}

document.body.addEventListener('keydown', function (event) {
  if (event.keyCode == KEY_LEFT) {
    var button = getPrevButton();
  } else if (event.keyCode == KEY_RIGHT) {
    var button = getNextButton();
  }
  if (typeof button === 'undefined') {
    // do nothing
  } else { 
    button.click(); 
  }
});
