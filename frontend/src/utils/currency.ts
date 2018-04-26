export function decimalToFloat(value: string) {
  if (value === '') {
    return 0;
  }
  return parseFloat(value.replace(/\./g, '').replace(',', '.'));
}
