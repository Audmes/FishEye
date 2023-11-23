export const openCloseFilterMenu = () => {
    const filterMenu = document.querySelector(".dropdown_content");
    const filterMenuButton = document.querySelector(".btn_drop");
    const filterButtons = document.querySelectorAll(".dropdown_content button");

    filterMenuButton.addEventListener("click", () => {
        const isExpanded = filterMenuButton.getAttribute("aria-expanded") === "true" || false;
        filterMenuButton.setAttribute("aria-expanded", !isExpanded);
        filterMenu.classList.toggle("curtain_effect");
        document.querySelector(".arrow-up").classList.toggle("rotate");

        const newAriaHiddenValue = filterMenu.classList.contains("curtain_effect") ? "false" : "true";
        filterMenu.setAttribute("aria-hidden", newAriaHiddenValue);

        const newTabIndexValue = filterMenu.classList.contains("curtain_effect") ? "0" : "-1";
        filterButtons.forEach(button => button.setAttribute("tabindex", newTabIndexValue));
    });
};