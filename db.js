let db;

const request = indexedDB.open("coletaCampoDB", 1);

request.onupgradeneeded = e => {
  db = e.target.result;
  db.createObjectStore("registros", { keyPath: "id", autoIncrement: true });
};

request.onsuccess = e => db = e.target.result;

function salvarRegistro(dado) {
  const tx = db.transaction("registros", "readwrite");
  tx.objectStore("registros").add(dado);
}

function listarRegistros(callback) {
  const tx = db.transaction("registros", "readonly");
  const req = tx.objectStore("registros").getAll();
  req.onsuccess = () => callback(req.result);
}
