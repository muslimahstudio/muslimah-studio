const menuButton = document.querySelector(".menu-toggle");
const menu = document.querySelector(".main-nav");

if (menuButton && menu) {

    menuButton.addEventListener("click", () => {

        menu.classList.toggle("open");

        const expanded =
            menuButton.getAttribute("aria-expanded") === "true";

        menuButton.setAttribute(
            "aria-expanded",
            !expanded
        );

    });

    menu.querySelectorAll("a").forEach((link) => {

        link.addEventListener("click", () => {

            menu.classList.remove("open");

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );

        });

    });

}
