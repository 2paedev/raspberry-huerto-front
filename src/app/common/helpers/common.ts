import { SETTINGS_OPTIONS } from '../domain/constants';
import { TEXTS } from '../domain/texts';

export function isUndefinedOrNullOrEmpty(variable: any) {
  if (Array.isArray(variable)) {
    return variable.length === 0;
  }
  if (typeof variable === 'object' && variable !== null) {
    return !Object.keys(variable).length;
  }
  return variable === undefined || variable === null || variable === '';
}

export function getSettingsOptionsTitle(settingId: number) {
  if (settingId === SETTINGS_OPTIONS.MANUAL.ID) {
    return TEXTS.SETTINGS_OPTIONS.MANUAL.TITLE;
  }
  if (settingId === SETTINGS_OPTIONS.AUTO_HOURS.ID) {
    return TEXTS.SETTINGS_OPTIONS.AUTO_HOURS.TITLE;
  }
  if (settingId === SETTINGS_OPTIONS.AUTO_HUMIDITY.ID) {
    return TEXTS.SETTINGS_OPTIONS.AUTO_HUMIDITY.TITLE;
  }
}

export function getSettingsValueText(value: number) {
  if (value === SETTINGS_OPTIONS.MANUAL.VALUES.ON) {
    return TEXTS.SETTINGS_OPTIONS.MANUAL.VALUE_TEXT.ON;
  }
  if (value === SETTINGS_OPTIONS.MANUAL.VALUES.OFF) {
    return TEXTS.SETTINGS_OPTIONS.MANUAL.VALUE_TEXT.OFF;
  }
}
