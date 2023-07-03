const nbYear = (p0, percent, aug, p) => {
  total = p0;
  year_count = 0

  do {
    growth = p0 * percent/100
    total = p0 + growth + aug;
    p0 = Math.floor(total);
    year_count ++;

  } while (total < p);

  return year_count;
}

module.exports = {
  nbYear,
};
