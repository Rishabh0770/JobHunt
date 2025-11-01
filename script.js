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
let inboxCount = 2;

function updateBadges() {
  const notificationBadge = document.querySelector('.nav-icons .icon:nth-child(1) .badge');
  const inboxBadge = document.querySelector('.nav-icons .icon:nth-child(2) .badge');

  if (notificationBadge) {
    if (notificationCount > 0) {
      notificationBadge.textContent = notificationCount;
      notificationBadge.style.display = "inline-block";
    } else {
      notificationBadge.style.display = "none";
    }
  }

  if (inboxBadge) {
    if (inboxCount > 0) {
      inboxBadge.textContent = inboxCount;
      inboxBadge.style.display = "inline-block";
    } else {
      inboxBadge.style.display = "none";
    }
  }
}

// Initialize badges on page load
document.addEventListener('DOMContentLoaded', function() {
  updateBadges();
});

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

function openProfilePanel() {
  document.getElementById("profilePanel").classList.add("active");
  document.getElementById("profileOverlay").classList.add("active");
}

function closeProfilePanel() {
  document.getElementById("profilePanel").classList.remove("active");
  document.getElementById("profileOverlay").classList.remove("active");
}

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





function toggleSelectMode(event) {
  event.preventDefault();
  const sidebar = document.getElementById("notificationSidebar");
  sidebar.classList.toggle("select-mode");

  // Uncheck all when exiting selection mode
  if (!sidebar.classList.contains("select-mode")) {
    document.querySelectorAll(".select-checkbox").forEach(cb => {
      cb.checked = false;
      cb.closest(".notification-item").classList.remove("selected");
    });
  }
}

// When checkbox is clicked, visually mark it
document.addEventListener('change', function (e) {
  if (e.target.classList.contains('select-checkbox')) {
    e.target.closest('.notification-item').classList.toggle('selected', e.target.checked);
  }
});

function deleteSelected() {
  const checkedItems = document.querySelectorAll('.select-checkbox:checked');
  checkedItems.forEach(cb => cb.closest('.notification-item').remove());
}

function viewSelected() {
  const selected = [];
  document.querySelectorAll('.select-checkbox:checked').forEach(cb => {
    const content = cb.closest('.notification-item').querySelector('p').innerText;
    selected.push(content);
  });

  alert("Selected Notifications:\n\n" + selected.join('\n'));
}




document.addEventListener("DOMContentLoaded", function () {
  const sidebarLinks = document.querySelectorAll(".sidebar-links a");
  const currentPage = window.location.pathname.split("/").pop(); // get current file name

  sidebarLinks.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active-link");
    }
  });
});

document.querySelectorAll('.sidebar-links a').forEach(link => {
  link.addEventListener('click', (e) => {
    // Optional ripple effect or visual feedback here
    link.classList.add("clicked"); // temporary class
    setTimeout(() => link.classList.remove("clicked"), 200);
  });
});




document.addEventListener("DOMContentLoaded", function () {
  const logoutBtn = document.querySelector(".logout-btn");

  if (logoutBtn) {
    logoutBtn.addEventListener("click", function () {
      const confirmLogout = confirm("Are you sure you want to logout?");
      if (confirmLogout) {
        // Clear local storage or session data
        localStorage.clear();
        sessionStorage.clear();

        // Show success message
        alert("You have been logged out successfully.");

        // Redirect to homepage or login page
        window.location.href = "index.html";
      }
    });
  }
});

// ================================
// Activity Section Button Handlers
// ================================
document.addEventListener('DOMContentLoaded', function() {
  const activityButtons = document.querySelectorAll('.activity-buttons button');
  
  activityButtons.forEach(button => {
    button.addEventListener('click', function() {
      const buttonText = this.textContent.trim();
      
      // Add visual feedback
      this.style.transform = 'scale(0.95)';
      setTimeout(() => {
        this.style.transform = '';
      }, 150);
      
      // Route to appropriate pages
      switch(buttonText) {
        case 'Registrations':
          window.location.href = 'profile/registration.html';
          break;
        case 'Watchlist':
          window.location.href = 'profile/watchlist.html';
          break;
        case 'Recently Viewed':
          window.location.href = 'profile/recently-viewed.html';
          break;
        case 'My Rounds':
          // Show coming soon for unimplemented features
          showToast('My Rounds feature coming soon!');
          break;
        default:
          console.log('Button clicked:', buttonText);
      }
    });
  });
});

// ================================
// Toast Notification System
// ================================
function showToast(message, duration = 3000) {
  // Create toast element if it doesn't exist
  let toast = document.querySelector('.toast-notification');
  
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast-notification';
    document.body.appendChild(toast);
    
    // Add toast styles
    const style = document.createElement('style');
    style.textContent = `
      .toast-notification {
        position: fixed;
        bottom: 30px;
        right: 30px;
        background: linear-gradient(135deg, #2d9cdb, #1c7bbf);
        color: white;
        padding: 16px 24px;
        border-radius: 12px;
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        opacity: 0;
        transform: translateY(20px);
        transition: all 0.3s ease;
        font-weight: 500;
        max-width: 300px;
      }
      
      .toast-notification.show {
        opacity: 1;
        transform: translateY(0);
      }
      
      @media (max-width: 768px) {
        .toast-notification {
          bottom: 20px;
          right: 20px;
          left: 20px;
          max-width: none;
        }
      }
    `;
    document.head.appendChild(style);
  }
  
  toast.textContent = message;
  toast.classList.add('show');
  
  setTimeout(() => {
    toast.classList.remove('show');
  }, duration);
}

// ================================
// Search Form Enhancement
// ================================
document.addEventListener('DOMContentLoaded', function() {
  const searchForms = document.querySelectorAll('.search-form');
  
  searchForms.forEach(form => {
    form.addEventListener('submit', function(e) {
      const searchInput = this.querySelector('.search-input');
      if (searchInput && searchInput.value.trim() === '') {
        e.preventDefault();
        showToast('Please enter a search term');
        searchInput.focus();
      }
    });
  });
});

// ================================
// Scroll to Top Button
// ================================
document.addEventListener('DOMContentLoaded', function() {
  // Create scroll to top button
  const scrollBtn = document.createElement('button');
  scrollBtn.className = 'scroll-to-top';
  scrollBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
  scrollBtn.setAttribute('aria-label', 'Scroll to top');
  document.body.appendChild(scrollBtn);

  // Show/hide button based on scroll position
  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
      scrollBtn.classList.add('visible');
    } else {
      scrollBtn.classList.remove('visible');
    }
  });

  // Scroll to top when clicked
  scrollBtn.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});

// ================================
// Performance Optimization - Lazy Loading
// ================================
document.addEventListener('DOMContentLoaded', function() {
  // Add lazy loading to images
  const images = document.querySelectorAll('img[data-src]');
  
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
        observer.unobserve(img);
      }
    });
  });

  images.forEach(img => imageObserver.observe(img));
});

// ================================
// Keyboard Navigation Enhancement
// ================================
document.addEventListener('DOMContentLoaded', function() {
  // Allow ESC key to close modals
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      closeNotification();
      closeMessages();
      closeProfilePanel();
    }
  });

  // Trap focus in modals when open
  const trapFocus = (element) => {
    const focusableElements = element.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstFocusable = focusableElements[0];
    const lastFocusable = focusableElements[focusableElements.length - 1];

    element.addEventListener('keydown', function(e) {
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === firstFocusable) {
            lastFocusable.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastFocusable) {
            firstFocusable.focus();
            e.preventDefault();
          }
        }
      }
    });
  };

  // Apply focus trap to sidebars when they open
  const notificationSidebar = document.getElementById('notificationSidebar');
  const messagesSidebar = document.getElementById('messagesSidebar');
  const profilePanel = document.getElementById('profilePanel');

  if (notificationSidebar) trapFocus(notificationSidebar);
  if (messagesSidebar) trapFocus(messagesSidebar);
  if (profilePanel) trapFocus(profilePanel);
});

// ================================
// Performance Monitoring
// ================================
if ('performance' in window) {
  window.addEventListener('load', function() {
    setTimeout(function() {
      const perfData = performance.timing;
      const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
      console.log('Page load time: ' + pageLoadTime + 'ms');
    }, 0);
  });
}
