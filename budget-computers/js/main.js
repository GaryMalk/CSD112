document.addEventListener("DOMContentLoaded", randomHeaderBackground());
document.addEventListener("DOMContentLoaded", updateCopyrightText());

function updateCopyrightText()
{
  var copyElement = document.getElementById("copyright");
  if (copyElement != null)
  {
    copyElement.innerHTML = "Copyright &copy; " + new Date().getFullYear() + " <a href=\"mailto:S-Emily.Comes@lwtech.edu\" id=\"mailto\">Emily Comes.</a> All Rights Reserved.";
  }
}

function randomHeaderBackground()
{
  var headerElement = document.getElementById("header");
  if (headerElement != null)
  {
      const htmlPageFileName = location.pathname.substring(location.pathname.lastIndexOf("/") + 1);
      var goUp = ""
      if ((htmlPageFileName != "index.html") && (htmlPageFileName != ""))
      {
        goUp = "../"
      }
    const bgNum = Math.floor(Math.random() * 8);
    headerElement.style.backgroundImage = "url(\"./" + goUp + "img/bg/" + bgNum + ".png\")";
    
    var picCreditElement = document.getElementById("headerPicNote");
    const photoBy = "(Photo by ";
    const openAnchor = "<a target=\"_blank\" rel=\"external\" href=\"https://";
    const endOpenAnchor = "\">";
    const closeAnchor = "</a>"
    const usr = "user "
    const onSite = closeAnchor + " on " + openAnchor;
    const endCredit = closeAnchor + ".)";
    const pxBay = "Pixabay";
    if (picCreditElement != null)
    {
      picCreditElement.innerHTML = photoBy;
      switch (bgNum)
      {
        case 0:
          picCreditElement.innerHTML += openAnchor + "pixabay.com/users/fabersam-98886/" + endOpenAnchor + "Samuel Faber" + onSite + "pixabay.com/photos/electronics-circuit-board-ic-green-6074902/"  + endOpenAnchor + pxBay;
          break;
        case 1:
          picCreditElement.innerHTML += usr + openAnchor + "pixabay.com/users/tony-media-6041778/" + endOpenAnchor + "\"Tony-Media\"" + onSite + "pixabay.com/photos/hardware-technology-motherboard-4955473/"  + endOpenAnchor + pxBay;
          break;
        case 2:
          picCreditElement.innerHTML += usr + openAnchor + "pixabay.com/users/bru-no-1161770/" + endOpenAnchor + "\"Bru-nO\"" + onSite + "pixabay.com/photos/cpu-processor-chip-motherboard-4393376/"  + endOpenAnchor + pxBay;
          break;
        case 3:
          picCreditElement.innerHTML += openAnchor + "pixabay.com/users/paulclee-50010/" + endOpenAnchor + "Paul C. Lee" + onSite + "pixabay.com/photos/circuit-board-electronics-circuit-3450410/"  + endOpenAnchor + pxBay;
          break;
        case 4:
          picCreditElement.innerHTML += usr + openAnchor + "pixabay.com/users/republica-24347/" + endOpenAnchor + "\"Republica\"" + onSite + "pixabay.com/photos/main-board-chips-electronics-89050/" + endOpenAnchor + pxBay;
          break;
        case 5:
          picCreditElement.innerHTML += usr + openAnchor + "unsplash.com/@umby" + endOpenAnchor + "\"Umberto\"" + onSite + "unsplash.com/photos/blue-circuit-board-jXd2FSvcRr8" + endOpenAnchor + "Unsplash";
          break;
        case 6:
          picCreditElement.innerHTML += openAnchor + "pixabay.com/users/axonite-5531574/" + endOpenAnchor + "Pavel \"axonite\" Matoušek" + onSite + "pixabay.com/photos/cyber-security-network-internet-2377718/" + endOpenAnchor + pxBay;
          break;
        case 7:
          picCreditElement.innerHTML += "an anonymous user on " + openAnchor + "pixabay.com/photos/pcb-printed-circuit-board-ic-3374102/" + endOpenAnchor + pxBay;
          break;
        default:
          break;
      }
      picCreditElement.innerHTML += endCredit;
    }
  }
}
