document.addEventListener("DOMContentLoaded", function () {
    let currentPage = 0;
    const pages = document.querySelectorAll('#flipbook .page');

    function showPage(index) {
        pages.forEach((page, i) => {
            if (i < index) {
                page.classList.add('flip');
            } else {
                page.classList.remove('flip');
            }
        });
    }

    pages.forEach((page, index) => {
        page.addEventListener('click', () => {
            if (index >= currentPage) {
                currentPage = index + 1;
            } else {
                currentPage = index;
            }
            showPage(currentPage);
        });
    });
});
