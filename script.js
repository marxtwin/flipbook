let currentPage = 0;
const pages = document.querySelectorAll('.page');

function showPage(index) {
    const angle = index * -180;
    document.querySelector('.flipbook').style.transform = `rotateY(${angle}deg)`;
}

pages.forEach((page, index) => {
    page.addEventListener('click', () => {
        if (index % 2 === 0 && index < pages.length - 1) {
            currentPage++;
        } else if (index % 2 !== 0 && index > 0) {
            currentPage--;
        }
        showPage(currentPage);
    });
});
