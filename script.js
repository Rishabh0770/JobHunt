// ================================
// Scroll Reveal Animations
// ================================
const reveals = document.querySelectorAll(".reveal");

const revealOnScroll = () => {
  const windowHeight = window.innerHeight;

  reveals.forEach((el) => {
    const top = el.getBoundingClientRect().top;

    if (top < windowHeight - 100) {
      el.classList.add("active");
    } else {
      el.classList.remove("active");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));
    const offset = 80;

    if (target) {
      window.scrollTo({
        top: target.offsetTop - offset,
        behavior: 'smooth'
      });
    }
  });
});

// ================================
// Notification & Inbox Badge Count
// ================================
let notificationCount = 3;
let inboxCount = 5;

const notificationBadge = document.querySelector('.nav-icons .icon:nth-child(1) .badge');
const inboxBadge = document.querySelector('.nav-icons .icon:nth-child(2) .badge');

function updateBadges() {
  if (notificationCount > 0) {
    notificationBadge.textContent = notificationCount;
    notificationBadge.style.display = "inline-block";
  } else {
    notificationBadge.style.display = "none";
  }

  if (inboxCount > 0) {
    inboxBadge.textContent = inboxCount;
    inboxBadge.style.display = "inline-block";
  } else {
    inboxBadge.style.display = "none";
  }
}

updateBadges();

setInterval(() => {
  notificationCount++;
  updateBadges();
}, 10000);

fetch('/api/notifications')
  .then(res => res.json())
  .then(data => {
    notificationCount = data.notifications;
    inboxCount = data.inbox;
    updateBadges();
  })
  .catch(err => console.error("Failed to load notifications:", err));

// Profile Toggle
const profileToggle = document.getElementById("profileToggle");
const profilePanel = document.getElementById("profilePanel");
const profileOverlay = document.getElementById("profileOverlay");

profileToggle.addEventListener("click", function (e) {
  e.preventDefault();
  profilePanel.classList.add("active");
  profileOverlay.classList.add("active");

  // Close other sidebar if open
  notificationSidebar.classList.remove("open");
});

profileOverlay.addEventListener("click", function () {
  profilePanel.classList.remove("active");
  profileOverlay.classList.remove("active");
});

// Notification Toggle
const notificationToggle = document.getElementById("notificationToggle");
const notificationSidebar = document.getElementById("notificationSidebar");
const notificationOverlay = document.getElementById("notificationOverlay");

notificationOverlay.addEventListener("click", function () {
  notificationSidebar.classList.remove("open");


  // Close profile if open
  profilePanel.classList.remove("active");
  profileOverlay.classList.remove("active");
});

closeNotification.addEventListener("click", function () {
  notificationSidebar.classList.remove("open");
});

function openNotification() {
    document.getElementById("notificationSidebar").classList.add("open");
  }

  function closeNotification() {
    document.getElementById("notificationSidebar").classList.remove("open");
  }







  function openMessages() {
  document.getElementById("messagesSidebar").classList.add("show");
  document.getElementById("messagesOverlay").classList.add("show");
}
function closeMessages() {
  document.getElementById("messagesSidebar").classList.remove("show");
  document.getElementById("messagesOverlay").classList.remove("show");
}








function openMessage(el) {
  document.getElementById("messagesList").style.display = "none";
  document.getElementById("messageContent").style.display = "flex";

  // Optional: Dynamically inject message content
  const sender = el.querySelector("strong").textContent;
  const message = "This is a test message from " + sender + ".";

  document.querySelector(".sender-name").textContent = sender;
  document.querySelector(".message-text").textContent = message;
}

function goBackToList() {
  document.getElementById("messagesList").style.display = "block";
  document.getElementById("messageContent").style.display = "none";
}

function openMessages() {
  document.getElementById("messagesSidebar").classList.add("show");
  document.getElementById("messagesOverlay").classList.add("show");
}

function closeMessages() {
  document.getElementById("messagesSidebar").classList.remove("show");
  document.getElementById("messagesOverlay").classList.remove("show");
}





// Make sure this is included in your script.js or just before </body>




