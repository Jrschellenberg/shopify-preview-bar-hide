$(document).ready(() => {
  waitForElementToDisplay('#preview-bar-iframe', 1000, 1).then((selector) => {
    setTimeout(function () {
      selector.hide();
      //console.log("finished hiding..");
    }, 1500);
    //console.log("This hit..");
  }).catch((err) => {
    console.log(err);
  });

  function waitForElementToDisplay(selector, time, index) {
    return new Promise((resolve, reject) => {
      if (document.querySelector(selector) != null) {
        let theFrame = $(selector);
        return resolve(theFrame);
      }
      else {
        if (index > 10) {
          return reject("Asset looking to hide Took too long to load or is not present");
        }
        //console.log(`Still waiting with index ${index}`);
        setTimeout(function () {
          waitForElementToDisplay(selector, time, index + 1);
        }, time);
      }
    });
  }
});
