const nbYear = (p0, percent, aug, p) => {
  total_first_year = p0 + aug;

  if (total_first_year === p) { return 1;}
  
  total_second_year = total_first_year + aug;
  console.log(total_second_year)

  if (total_second_year === p) { return 2;}
};

module.exports = {
  nbYear,
};
