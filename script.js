document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".learn-more-btn");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const content = this.nextElementSibling; // Select the next hidden content
            content.classList.toggle("show");
        });
    });
});
