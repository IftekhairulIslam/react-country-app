export function numberFormat(number) {
  number.toLocaleString();
  var nf = new Intl.NumberFormat();
  return nf.format(number);
}
