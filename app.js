let map = L.map("map").setView([-23.7, -46.4], 15);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

function capturar() {
  navigator.geolocation.getCurrentPosition(pos => {
    const dado = {
      lat: pos.coords.latitude,
      lng: pos.coords.longitude,
      rua: padronizarRua(rua.value),
      bairro: padronizarBairro(bairro.value),
      tipo: tipo.value,
      obs: obs.value,
      data: new Date().toISOString()
    };

    salvarRegistro(dado);
    L.marker([dado.lat, dado.lng]).addTo(map);
    alert("Salvo offline!");
  }, null, { enableHighAccuracy: true });
}

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js");
}
