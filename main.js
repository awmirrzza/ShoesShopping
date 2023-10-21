function validateForm() {
    const fields = ['name', 'email', 'subject', 'message'];
    const statusElement = document.querySelector('.status');

    for (const field of fields) {
        const value = document.getElementById(field).value.trim();
        const messages = {
            name: "Name cannot be empty",
            email: "Email cannot be empty",
            subject: "Subject cannot be empty",
            message: "Message cannot be empty"
        };

        if (!value) {
            statusElement.innerHTML = messages[field];
            return false;
        }

        if (field === 'email') {
            const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (!re.test(value)) {
                statusElement.innerHTML = "Email format invalid";
                return false;
            }
        }
    }

    statusElement.innerHTML = "Sending...";
    return true;
}
