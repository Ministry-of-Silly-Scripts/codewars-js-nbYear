const nbYear = (p0, percent, aug, p) => {
  total = p0;
  year_count = 0

  do {
    total = p0 + p0 * percent/100 + aug;
    p0 = total;
    year_count ++;
  } while (total < p);

  return year_count;
};

module.exports = {
  nbYear,
};
