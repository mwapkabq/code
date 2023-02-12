const navigationLinks = document.querySelectorAll('nav a');
const sections = document.querySelectorAll('main section');

function highlightLink() {
  const currentSection = document.querySelector('.active-section');
  if (currentSection) {
    currentSection.classList.remove('active-section');
  }

  const id = this.getAttribute('href').slice(1);
  document.querySelector(`#${id}`).classList.add('active-section');

  navigationLinks.forEach(link => link.style.color = '');
  this.style.color = 'red';
}

navigationLinks.forEach(link => link.addEventListener('click', highlightLink));

document.addEventListener('scroll', function() {
  const currentSection = sections.length > 0 ? sections[0] : null;

  for (const section of sections) {
    if (section.offsetTop - window.innerHeight / 2 <= window.pageYOffset) {
      currentSection = section;
    } else {
      break;
    }
  }

  if (currentSection) {
    navigationLinks.forEach(link => {
      const sectionId = link.getAttribute('href').slice(1);
      if (sectionId === currentSection.getAttribute('id')) {
        link.classList.add('active-link');
      } else {
        link.classList.remove('active-link');
      }
    });
  }
});
