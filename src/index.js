const nbYear = (p0, percent, aug, p) => {
  total_first_year = p0 + aug;

  if (total_first_year < p) { return 2;}
  
  return 1;
};

module.exports = {
  nbYear,
};
