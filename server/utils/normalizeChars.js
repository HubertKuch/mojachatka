function normalizeToEn(string) {
  return string
    .replace("ą", "a")
    .replace("ć", "c")
    .replace("ę", "e")
    .replace("ł", "l")
    .replace("ń", "n")
    .replace("ó", "o")
    .replace("ś", "s")
    .replace("ź", "z")
    .replace("ż", "z");
}

module.exports = { normalizeToEn };
