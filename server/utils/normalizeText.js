const removeAccents = (str) => {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};

const normalizeText = (str) => {
  if (!str) return str;
  return removeAccents(str).replace(/\s+/g, "").toLowerCase();
};

module.exports = normalizeText;
