let yesSize = 40;
let yesPadding = 40;
let noClicks = 0;

const images = ["cat.gif", "sure.gif", "really.gif", "hmm.gif"];
const texts = [
  "Will You Be My Valentine?",
  "Are you sure?",
  "Really really sure??",
  "Last chance",
];

function clickNo() {
  const yes = document.getElementById("yes");
  const no = document.getElementById("no");
  const pic = document.getElementById("pic");
  const head = document.getElementById("head");

  noClicks++;

  // YES grows and pushes layout
  yesSize += 20;
  yesPadding += 20;
  yes.style.fontSize = yesSize + "px";
  yes.style.padding = yesPadding + "px";

  // Change image
  pic.src = images[noClicks % images.length];

  // Change text
  head.textContent = texts[noClicks % texts.length];

  if (noClicks === 4) {
    no.style.display = "none";
  }
}

function clickYes() {
  // Hide the existing elements
  document.querySelector(".question").style.display = "none";
  document.querySelector(".buttons").style.display = "none";
  document.getElementById("pic").style.display = "none";

  // Create container for scattered images
  // Create container for scattered images
  const container = document.createElement("div");
  container.id = "scatteredImages";
  container.style.position = "fixed";
  container.style.top = 0;
  container.style.left = 0;
  container.style.width = "100vw";
  container.style.height = "100vh";
  // Remove pointer-events here so images display correctly
  // container.style.pointerEvents = "none";
  container.style.zIndex = 9999;
  document.body.appendChild(container);

  // Add centered text
  const message = document.createElement("div");
  message.textContent = "I knew you would say YES!";
  message.style.position = "fixed";
  message.style.top = "50%";
  message.style.left = "50%";
  message.style.transform = "translate(-50%, -50%)";
  message.style.fontSize = "48px";
  message.style.fontWeight = "bold";
  message.style.color = "white";
  message.style.textShadow = "2px 2px 8px rgba(0,0,0,0.7)";
  message.style.zIndex = 10000; // Above images
  message.style.pointerEvents = "none"; // So text doesn't block clicks
  document.body.appendChild(message);

  // Placeholder image sources — replace these with your own later
  const yourImages = [
    "wow.gif",
    "yipi.gif",
    "uiia.gif",
    "bocchi-kawaii.gif",
    "jam.gif",
    "hehe.gif",
    "party.gif",
    "krr.gif",
    "happy.gif",
    "lick.gif",
    "nyenye.gif",
    "wow.gif",
    "yipi.gif",
    "uiia.gif",
    "bocchi-kawaii.gif",
    "jam.gif",
    "hehe.gif",
    "party.gif",
    "krr.gif",
    "happy.gif",
    "lick.gif",
    "nyenye.gif",
    "wow.gif",
    "yipi.gif",
    "uiia.gif",
    "bocchi-kawaii.gif",
    "jam.gif",
    "hehe.gif",
    "party.gif",
    "krr.gif",
    "happy.gif",
    "lick.gif",
    "nyenye.gif",
    "wow.gif",
    "yipi.gif",
    "uiia.gif",
    "bocchi-kawaii.gif",
    "jam.gif",
    "hehe.gif",
    "party.gif",
    "krr.gif",
    "happy.gif",
    "lick.gif",
    "nyenye.gif",
    "wow.gif",
    "yipi.gif",
    "uiia.gif",
    "bocchi-kawaii.gif",
    "jam.gif",
    "hehe.gif",
    "party.gif",
    "krr.gif",
    "happy.gif",
    "lick.gif",
    "nyenye.gif",
  ];

  // Size of each scattered image (adjust here!)
  const imgWidth = 190; // width in pixels
  const imgHeight = 190; // height in pixels

  // Add 5 scattered images without rotation
  yourImages.forEach((src) => {
    const img = document.createElement("img");
    img.src = src;
    img.style.position = "absolute";
    img.style.width = imgWidth + "px"; // <-- Adjust width here
    img.style.height = imgHeight + "px"; // <-- Adjust height here
    img.style.objectFit = "cover";
    img.style.top = Math.random() * 80 + "vh";
    img.style.left = Math.random() * 80 + "vw";
    container.appendChild(img);
  });
}
