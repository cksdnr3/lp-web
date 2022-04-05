export const stringify = (obj: Object) =>
  Object.entries(obj).reduce((acc, [key, value]) => `${acc}${key}=${value}&`, '?');
