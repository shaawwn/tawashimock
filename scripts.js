document.addEventListener("DOMContentLoaded", () => {
    addEventListeners()
})


function addEventListeners() {
    const phoneBtn = document.getElementsByName("phone-btn")[0]
    const lineBtn = document.getElementsByName("line-btn")[0]

    phoneBtn.addEventListener('click', openPhoneApp)
    lineBtn.addEventListener('click', openLineApp)
}

function openPhoneApp() {
    var phoneNumber = '1234567890';

    window.location.href = 'tel:' + phoneNumber;
  }

  function openLineApp() {

  var lineAppURI = 'https://line.me/R/ti/p/<LINEID>';

  window.location.href = lineAppURI;
  }