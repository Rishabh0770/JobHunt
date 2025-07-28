document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('editProfileForm');

  // Pre-fill fields if available in localStorage
  if (window.location.pathname.includes('edit-profile.html')) {
    document.getElementById('fullName').value = localStorage.getItem('profileName') || '';
    document.getElementById('email').value = localStorage.getItem('profileEmail') || '';
    document.getElementById('phone').value = localStorage.getItem('profilePhone') || '';
    document.getElementById('location').value = localStorage.getItem('profileLocation') || '';
    document.getElementById('bio').value = localStorage.getItem('profileBio') || '';
    document.getElementById('education').value = localStorage.getItem('profileEducation') || '';
    document.getElementById('skills').value = localStorage.getItem('profileSkills') || '';
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      // Save values to localStorage
      localStorage.setItem('profileName', document.getElementById('fullName').value);
      localStorage.setItem('profileEmail', document.getElementById('email').value);
      localStorage.setItem('profilePhone', document.getElementById('phone').value);
      localStorage.setItem('profileLocation', document.getElementById('location').value);
      localStorage.setItem('profileBio', document.getElementById('bio').value);
      localStorage.setItem('profileEducation', document.getElementById('education').value);
      localStorage.setItem('profileSkills', document.getElementById('skills').value);

      alert('Profile updated successfully!');
      window.location.href = 'user-profile.html';
    });
  }

  // Fill profile page with saved values
  if (window.location.pathname.includes('user-profile.html')) {
    document.getElementById('profileName').textContent = localStorage.getItem('profileName') || 'Rishav Sharma';
    document.getElementById('profileEmail').textContent = localStorage.getItem('profileEmail') || 'rishav123@gmail.com';
    document.getElementById('profilePhone').textContent = localStorage.getItem('profilePhone') || '+91 9876543210';
    document.getElementById('profileLocation').textContent = localStorage.getItem('profileLocation') || 'Himachal Pradesh, India';
    document.getElementById('profileBio').textContent = localStorage.getItem('profileBio') || "I'm passionate about building web apps that create impact.";
    document.getElementById('profileEducation').textContent = localStorage.getItem('profileEducation') || 'B.Tech in Computer Science and Engineering';
    document.getElementById('profileSkills').textContent = localStorage.getItem('profileSkills') || 'HTML, CSS, JavaScript, PHP, MySQL, Bootstrap';
  }
});
