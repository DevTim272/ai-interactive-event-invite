import confirmationView from "./ConfirmationView.js";
const controlConfirmationMessage = function () {
   confirmationView.openConfirmationMessage(confirmationView.getConfirmationMessage.bind(confirmationView));
   console.log('boom')
   
}
const controlRemoveConfirmationMessage = function () { confirmationView.closeConfirmationMessage(confirmationView.confirmationCheck.bind(confirmationView)); }
const init = function () {
    confirmationView.addHandlerAddConfirmationMessage(controlConfirmationMessage);
    confirmationView.addHandlerRemoveConfirmationMessage(controlRemoveConfirmationMessage);
}
init();