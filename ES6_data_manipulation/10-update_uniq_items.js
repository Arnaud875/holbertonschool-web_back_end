export default function updateUniqueItems(mapObj) {
  if (!(mapObj instanceof Map)) throw new Error('Cannot process');

  for (const [key, value] of mapObj) {
    if (value === 1) {
      mapObj.set(key, 100);
    }
  }
  return mapObj;
}
