export function validateUrl(str) {
  var pattern = new RegExp(
    "^(https?:\\/\\/)?" + // protocol
    "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
    "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
    "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
    "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
      "(\\#[-a-z\\d_]*)?$",
    "i"
  ); // fragment locator
  return !!pattern.test(str) ? "" : "Здесь должна быть ссылка";
}

export function validateLengthStr(str, min, max) {
  if (str.length === 0) return "Это обязательное поле";
  if (str.length >= min && str.length <= max) return "";
  return `Должно быть от ${min} до ${max} символов`;
}
