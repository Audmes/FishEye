// Ouverture et Fermeture de la Modale
export const openCloseModal = () => {
    const contactBtn = document.querySelector(".contact_button");
    const contactModal = document.getElementById("contact_modal");
    const closeModal = document.querySelector(".btn_close");

    contactBtn.addEventListener("click", () => {
        contactModal.style.display = "flex";
        closeModal.focus();
    });

    closeModal.addEventListener("click", () => contactModal.style.display = "none");
};

// Validation du Formulaire
export const validateForm = () => {
    const form = document.querySelector('.modal_form form');
    const firstName = document.querySelector("#firstname");
    const lastName = document.querySelector("#lastname");
    const email = document.querySelector("#email");
    const message = document.querySelector("#message");

    form.addEventListener('input', () => displayCustomMessage());
    
    form.addEventListener('submit', e => {
        e.preventDefault();

        if (!form.checkValidity()) displayCustomMessage();
        else {
            const formDatas = {
                firstName: firstName.value,
                lastName: lastName.value,
                email: email.value,
                message: message.value,
            };
            // Affichage dans la console
            console.log(JSON.stringify(formDatas)); // La méthode JSON.stringify() convertit une valeur JavaScript en chaîne JSON.
            document.querySelectorAll('.formField').forEach(input => input.classList.remove('valid'));
            form.reset(); // On réinitialise le formulaire
        }
    });

    // Vérification des champs
    const checkInputValidity = (input, regex) => {
        const errorMessage = input.dataset.error;
        const messageProvider = input.nextElementSibling;
        const isValid = regex.test(input.value);

        if(isValid) {
            messageProvider.innerHTML = "";
            messageProvider.removeAttribute("role");
            input.removeAttribute("aria-invalid");
        } else {
            messageProvider.innerHTML = errorMessage;
            messageProvider.setAttribute("role", "alert");
            input.setAttribute("aria-invalid", "true");
        }

        input.classList.toggle('invalid', !isValid);
        input.classList.toggle('valid', isValid);
    };

    // Affichage des messages
    const displayCustomMessage = () => {
        const regexName = /^([A-Za-z|\s]{3,15})?([-]{0,1})?([A-Za-z|\s]{3,15})$/;
        // const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        const regexEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
        const regexMessage = /^[A-Za-z0-9|\s]{20,200}$/;

        checkInputValidity(firstName, regexName);
        checkInputValidity(lastName, regexName);
        checkInputValidity(email, regexEmail);
        checkInputValidity(message, regexMessage);
    };
};