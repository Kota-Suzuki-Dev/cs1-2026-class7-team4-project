document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".card");

    cards.forEach(function (card) {
        const link = card.querySelector("a");

        if (link) {
            card.style.cursor = "pointer";

            card.addEventListener("click", function (event) {
                event.preventDefault();

                const result = confirm("詳細ページへ移動しますか？");

                if (result) {
                    window.location.href = link.href;
                }
            });
        }
    });
});