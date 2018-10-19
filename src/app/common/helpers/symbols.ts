import { SYMBOLS } from '../domain/constants';

export function formatToMeter(data: string) {
  return `${data}${SYMBOLS.METER}`;
}
