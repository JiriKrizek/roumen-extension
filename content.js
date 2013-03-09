var KEY_LEFT = 37;
var KEY_RIGHT = 39;

function getButton(text) {
  buttons = document.getElementsByClassName("roumingButton");

  for (var i = 0; i < buttons.length; i++) {
    hrf = buttons[i].children[0];
    if (hrf) { 
      ht_text = hrf.innerHTML;
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
    button = getPrevButton();
  } else if (event.keyCode == KEY_RIGHT) {
    button = getNextButton();
  }
  if (typeof button === 'undefined') {
    // do nothing
  } else { 
    button.click(); 
  }
});
