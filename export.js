function exportarCSV() {
  listarRegistros(dados => {
    let csv = "lat,lng,rua,bairro,tipo,obs\n";
    dados.forEach(d => {
      csv += `${d.lat},${d.lng},"${d.rua}","${d.bairro}",${d.tipo},"${d.obs}"\n`;
    });

    baixar(csv, "dados.csv", "text/csv");
  });
}

function exportarODS() {
  listarRegistros(dados => {
    let tsv = "lat\tlng\trua\tbairro\ttipo\tobs\n";
    dados.forEach(d => {
      tsv += `${d.lat}\t${d.lng}\t${d.rua}\t${d.bairro}\t${d.tipo}\t${d.obs}\n`;
    });

    baixar(tsv, "dados.ods", "application/vnd.oasis.opendocument.spreadsheet");
  });
}

function baixar(conteudo, nome, tipo) {
  const blob = new Blob([conteudo], { type: tipo });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = nome;
  a.click();
}
