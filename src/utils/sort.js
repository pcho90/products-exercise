export const sort = (dir, products) => {
  let order;
  let val;
  if (dir === 'az') {
    order = -1;
    val = 'name';
  } else if (dir === 'za') {
    order = 1;
    val = 'name';
  } else if (dir === 'lh') {
    order = -1;
    val = 'price';
  } else {
    order = 1;
    val = 'price';
  }
  let sorted = [...products];
  sorted.sort((a, b) => {
    let diff = 0;
    if (+a[val] > +b[val]) {
      diff = -1;
    } else if (+a[val] < +b[val]) {
      diff = 1;
    }
    return diff * order;
  });
  return sorted;
};
