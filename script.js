document.addEventListener("DOMContentLoaded", () => {
    const toggleButtons = document.querySelectorAll(".toggle-details");
    
    toggleButtons.forEach(button => {
        button.addEventListener("click", () => {
            const details = button.nextElementSibling;
            if (details.style.display === "none" || details.style.display === "") {
                details.style.display = "block";
                button.textContent = "Esconder Detalhes";
            } else {
                details.style.display = "none";
                button.textContent = "Mostrar Detalhes";
            }
        });
    });
});
