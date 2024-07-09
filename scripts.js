function showSection(id) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        if (section.id === id) {
            section.classList.add('active');
            section.style.display = 'block';
        } else {
            section.classList.remove('active');
            section.style.display = 'none';
        }
    });
}
