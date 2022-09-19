class ContactForm {
  constructor() {
    this.form = document.querySelector(".contact-form");
    this.name = document.getElementById("name");
    this.email = document.getElementById("email");
    this.message = document.getElementById("message");
    this.toast = document.querySelector(".toast");
  }

  validateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return true;
    }

    return false;
  }

  validateName(word) {
    if (word.length < 2) return false;
    return true;
  }
  validateMessage(word) {
    if (word.length < 5) return false;
    return true;
  }
  clearInputs() {
    this.name.value = "";
    this.email.value = "";
    this.message.value = "";
  }
  async send() {
    const { value: emailVal } = this.email;
    const { value: messageVal } = this.message;
    const { value: nameVal } = this.name;

    let error = "";

    try {
      if (!this.validateEmail(emailVal)) error += "Invalid Email Input.";
      if (!this.validateMessage(messageVal))
        error += "Message Needs To Be At Least 5 Characters.";
      if (!this.validateName(nameVal)) error += "Please provide a proper name.";

      if (error) throw new Error(error.split(".").join("<br/>"));

      const res = await Email.send({
        SecureToken: "698ee1fd-2fe2-42b9-a863-6ec48fb03a0e",
        To: "franzelijahmatugas@gmail.com",
        From: "franzelijahmatugas@gmail.com",
        Subject: `${nameVal}: ${emailVal}`,
        Body: `${messageVal}`,
      });
      if (res !== "OK") throw new Error("Something went wrong!");
      this.clearInputs();
      if (this.toast.classList.contains("toast--error"))
        this.toast.classList.remove("toast--error");
      this.toast.innerHTML =
        "<h4>Sent<br/></h4> Sent message successfully! <br/> Have a good day!";
      this.toast.classList.add("toast--success");
      this.toast.classList.remove("toast-animate");
      setTimeout(() => {
        this.toast.classList.add("toast-animate");
      }, 2750);
    } catch (err) {
      if (this.toast.classList.contains("toast--success"))
        this.toast.classList.remove("toast--success");
      this.toast.innerHTML = "<h4>Error Sending<br/></h4>" + err.message;
      this.toast.classList.add("toast--error");

      this.toast.classList.remove("toast-animate");
      setTimeout(() => {
        this.toast.classList.add("toast-animate");
      }, 2750);
    }
  }
  run() {
    this.form.addEventListener("submit", (e) => {
      e.preventDefault();

      this.send();
    });
  }
}

export default new ContactForm();
