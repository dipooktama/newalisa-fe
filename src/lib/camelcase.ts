function toCamel(s: string): string {
  return s.replace(/([-_][a-z])/gi, ($1) => {
    return $1.toUpperCase().replace('-', '').replace('_', '');
  });
}

function toSnake(s: string): string {
  return s.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);
}

export function keysToCamel<T>(o: any): T {
  if (o === Object(o) && !Array.isArray(o) && typeof o !== 'function') {
    const n: any = {};
    Object.keys(o).forEach((k) => {
      n[toCamel(k)] = keysToCamel(o[k]);
    });
    return n as T;
  }
  if (Array.isArray(o)) {
    return o.map((i) => {
      return keysToCamel(i);
    }) as unknown as T;
  }
  return o as T;
}

export function keysToSnake<T>(o: any): T {
  if (o === Object(o) && !Array.isArray(o) && typeof o !== 'function') {
    const n: any = {};
    Object.keys(o).forEach((k) => {
      n[toSnake(k)] = keysToSnake(o[k]);
    });
    return n as T;
  }
  if (Array.isArray(o)) {
    return o.map((i) => {
      return keysToSnake(i);
    }) as unknown as T;
  }
  return o as T;
}