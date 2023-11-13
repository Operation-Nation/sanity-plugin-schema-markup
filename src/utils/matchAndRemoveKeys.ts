/* eslint-disable @typescript-eslint/no-explicit-any */
type NestedObj = Record<string, any>;
function matchAndRemoveKeys(obj: NestedObj, pattern?: NestedObj) {
  if (typeof pattern !== 'object' || pattern === undefined) {
    return obj;
  }
  const matchedObj = {} as NestedObj;
  // eslint-disable-next-line no-restricted-syntax
  for (const key in pattern) {
    if (key in obj) {
      if (Array.isArray(obj[key]) && typeof obj[key][0] === 'string') {
        matchedObj[key] = obj[key];
      } else if (Array.isArray(obj[key]) && typeof obj[key][0] === 'object') {
        matchedObj[key] = obj[key].map((item: NestedObj) =>
          matchAndRemoveKeys(item, pattern[key][0])
        );
      } else {
        matchedObj[key] = matchAndRemoveKeys(obj[key], pattern[key]);
      }
    }
  }

  return matchedObj;
}

export default matchAndRemoveKeys;
