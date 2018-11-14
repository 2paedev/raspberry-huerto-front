module.exports = {
  formatDate: function(strDate) {
    var arrayDate = strDate.split('-');
    return arrayDate[2] + '/' + arrayDate[1] + '/' + arrayDate[0];
  }
  // formatImporte: function(strImporte) {
  //   return formatNumero(Number(strImporte).toLocaleString("es-ES")) + " €";
  // },
  // formatPorcentaje: function(strImporte) {
  //   return formatNumero(strImporte) + " %";
  // }
};

// function formatNumero(numero) {
//   return numero
//     .toString()
//     .replace(/\./g, ':')
//     .replace(/\,/g, '.')
//     .replace(/\:/g, ',');
// }
