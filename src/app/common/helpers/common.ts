export function isUndefinedOrNullOrEmpty(variable: any) {
  if (Array.isArray(variable)) {
    return variable.length === 0;
  }
  if (typeof variable === 'object' && variable !== null) {
    return !Object.keys(variable).length;
  }
  return variable === undefined || variable === null || variable === '';
}
