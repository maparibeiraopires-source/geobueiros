function normalizar(txt) {
  return txt
    .toUpperCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function padronizarRua(r) {
  r = normalizar(r);
  r = r.replace(/^RUA /, "RUA ");
  r = r.replace(/^AV /, "AVENIDA ");
  return r;
}

function padronizarBairro(b) {
  return normalizar(b);
}
