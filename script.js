document.addEventListener("DOMContentLoaded", function () {
    let currentPage = 0;
    const pages = document.querySelectorAll('#flipbook .page');

    function showPage(index) {
        pages.forEach((page, i) => {
            page.style.display = (i === index || i === index - 1) ? 'flex' : 'none';
        });
        const angle = index * -180;
        document.querySelector('#flipbook').style.transform = `rotateY(${angle}deg)`;
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

    showPage(currentPage);  // Show the first page
});
