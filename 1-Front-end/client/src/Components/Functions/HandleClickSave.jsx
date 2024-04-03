import MessageValidation from "../Functions/MessageValidation";

export default function HandleClickSave(message) {
  if (MessageValidation(message)) {
    console.log("Validé");
  } else {
    console.log("Annulé");
  }
}
