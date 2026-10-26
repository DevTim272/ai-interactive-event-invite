class ConfirmationView {
    _mainParentElement = document.querySelector(".gala-container");
    _parentElement = document.querySelector(".confirmation-container");
    _removeConfirmationMessage = document.querySelector(".cancel");
     _form = document.querySelector("#rsvp-form");
     acceptedMessage = document.querySelector(".confirmation-content--accepted");
    declinedMessage = document.querySelector(".confirmation-content--declined");
     
    openConfirmationMessage(confirmationOption) {
     const confirmationMessage = confirmationOption();
     this._mainParentElement.classList.add("hidden");
      this._parentElement.classList.remove("hidden");
      confirmationMessage.classList.remove("hidden");
    return confirmationMessage;
     } 
    confirmationCheck(){
        if (!this.acceptedMessage.classList.contains('hidden') ) return this.acceptedMessage;
         if (!this.declinedMessage.classList.contains('hidden') ) return this.declinedMessage;

    }
   closeConfirmationMessage(confirmationCheck) {
    const confirmationMessage = confirmationCheck()
      this._mainParentElement.classList.remove("hidden");
    this._parentElement.classList.add("hidden");
    confirmationMessage.classList.add("hidden")
};

    getConfirmationMessage() {
        const accepted = document.querySelector("#accept");
        const declined = document.querySelector("#decline");
        console.log(this);
       if (accepted.checked) return this.acceptedMessage;
       if (declined.checked) return this.declinedMessage;
       
       
     }
     addHandlerAddConfirmationMessage(handler) {
        this._form.addEventListener("submit", function (e) {
            e.preventDefault();
            handler();
            this.reset();
        });
        
     }
     addHandlerRemoveConfirmationMessage(handler) {
        this._removeConfirmationMessage.addEventListener("click", function () {
            handler();
        });
     }
}
export default new ConfirmationView();