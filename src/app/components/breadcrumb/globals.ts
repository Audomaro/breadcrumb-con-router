export let caches: any = {
  isMenuAction: false
};

export const deepClone = (source: any): any => {
  if (typeof (source) !== 'object' || source === null) {
    return source;
  }
  let clone: any;
  if (Array.isArray(source)) {
    clone = source.slice();
  } else {
    clone = Object.assign({}, source);
  }

  for (let key of Object.keys(clone)) {
    key = deepClone(key);
  }

  return clone;
};
