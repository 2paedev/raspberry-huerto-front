import { isUndefinedOrNullOrEmpty } from './common';

export function formatMessageError(error: any, defaultMessage: string) {
  if (isUndefinedOrNullOrEmpty(error.error)) {
    return defaultMessage;
  }
  if (isUndefinedOrNullOrEmpty(error.error.error_message)) {
    return defaultMessage;
  }
  return error.error.error_message;
}
