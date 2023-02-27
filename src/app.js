export default function orderByProps(obj, sortOrder) {
  const array = [];

  for (const key in obj) {
    if (!sortOrder.includes(key)) {
      array.push(key);
    }
  }

  sortOrder.push(...array.sort());

  return sortOrder.reduce((total, item) => {
    total.push({ key: item, value: obj[item] });
    return total;
  }, []);
}
