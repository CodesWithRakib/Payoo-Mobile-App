function getValueById(id) {
  let value = document.getElementById(id).value;
  let convertedValue = parseInt(value);
  return convertedValue;
}
function getTextValueById(id) {
  let value = document.getElementById(id).innerText;
  let convertedValue = parseInt(value);
  return convertedValue;
}
function setValueById(id, value) {
  document.getElementById(id).innerText = value;
}
