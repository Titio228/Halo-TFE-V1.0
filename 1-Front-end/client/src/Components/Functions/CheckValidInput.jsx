function CheckValidInputString(value) {
  const regex = /^[a-zA-ZÀ-ÖØ-öø-ÿ\s]*$/;
  return regex.test(value);
}

function CheckValidInputEmail(value) {
  const regex = /^[^\s@]*@[^\s@]*\.[^\s@]*$/;
  return regex.test(value);
}

function CheckValidInputNumber(value) {
  const regex = /^[0-9]*$/;
  return regex.test(value);
}

export { CheckValidInputString, CheckValidInputEmail, CheckValidInputNumber };
