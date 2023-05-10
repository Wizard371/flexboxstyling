const dropdown = document.querySelector('.dropdown');
const dropdownContent = document.querySelector('.dropdown-content');

dropdown.addEventListener('mouseenter', () => {
    let height = dropdownContent.offsetHeight;
    let top = '100%';
    if (window.innerWidth <= 767) { // change the breakpoint to match your mobile resolution
        top = `${dropdown.offsetHeight}px`;
    }
    dropdownContent.style.top = `-${height}px`;
    dropdownContent.style.display = 'block';

    setTimeout(() => {
        dropdownContent.style.top = top;
    }, 10);
});

dropdown.addEventListener('mouseleave', () => {
    dropdownContent.style.top = `-${dropdownContent.offsetHeight}px`;
    setTimeout(() => {
        dropdownContent.style.display = 'none';
    }, 300);
});