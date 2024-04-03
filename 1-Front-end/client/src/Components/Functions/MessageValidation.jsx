export default function MessageValidation(message) {
  const confirmation = window.confirm(message);

  if (confirmation) {
    alert("Action effectuée !");
    return true;
  } else {
    alert("Action annulée.");
    return false;
  }
}
