// main.js - Handles highlighting of project cards when clicking "View Project" links in certifications

document.addEventListener('DOMContentLoaded', function () {
  // All links that point to a project card (href starts with '#') and have class 'associated-project-link'
  const viewLinks = document.querySelectorAll('a.associated-project-link[href^="#"]');
  viewLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      // Let the default anchor navigation happen (scroll to the project)
      const targetId = this.getAttribute('href').substring(1);
      const targetCard = document.getElementById(targetId);
      if (targetCard) {
        targetCard.classList.add('highlight');
        // Remove highlight after 3 seconds
        setTimeout(() => {
          targetCard.classList.remove('highlight');
        }, 3000);
      }
    });
  });
});
