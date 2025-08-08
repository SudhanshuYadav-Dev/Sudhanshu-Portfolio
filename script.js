let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname, event) {
  for (let tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (let tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

function sendEmail_WebDesign() {
  const subject = encodeURIComponent("Web Design Services Inquiry");
  const body = encodeURIComponent(
    "Hello Sudhanshu,\n\nI'm interested in your web design services."
  );
  window.open(
    `https://mail.google.com/mail/?view=cm&fs=1&to=shudhanshuyadav48@gmail.com&su=${subject}&body=${body}`
  );
}
function sendEmail_WebDev() {
  const subject = encodeURIComponent("WebSites Services Inquiry");
  const body = encodeURIComponent(
    "Hello Sudhanshu,\n\nI'm interested in your web site services."
  );
  window.open(
    `https://mail.google.com/mail/?view=cm&fs=1&to=shudhanshuyadav48@gmail.com&su=${subject}&body=${body}`
  );
}
function sendEmail_WebPage() {
  const subject = encodeURIComponent("Web Pages Services Inquiry");
  const body = encodeURIComponent(
    "Hello Sudhanshu,\n\nI'm interested in your web page services."
  );
  window.open(
    `https://mail.google.com/mail/?view=cm&fs=1&to=shudhanshuyadav48@gmail.com&su=${subject}&body=${body}`
  );
}

let sidemenu = document.getElementById("sidemenu");
let mobileMenuBtn = document.querySelector(".mobile-menu-btn");

function openmenu() {
  sidemenu.style.right = "0";
  // Hide hamburger icon when menu is open
  if (mobileMenuBtn) {
    mobileMenuBtn.style.display = "none";
  }
}

function closemenu() {
  sidemenu.style.right = "-250px";
  // Show hamburger icon when menu is closed
  if (mobileMenuBtn) {
    mobileMenuBtn.style.display = "block";
  }
}
