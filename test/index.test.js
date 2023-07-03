const { nbYear } = require("../src/index");

describe('the nbYear canary spec', () => {
  it('shows the infrastructure works', () => {
    expect(true).toBe(true);
  });
});

describe('nbYear', () => {
  test("it should return 1 for p0 = 1000, percentage = 0, aug = 0 and p = p0 = 1000", () => {
    expect(nbYear(1000, 0, 0, 1000)).toBe(1);
  });

  test("it should return 2 for p0 = 1000, percentage = 0, aug = 100 and p = 1200", () => {
    expect(nbYear(1000, 0, 100, 1200)).toBe(2);
  });

  test("it should return 1 for p0 = 1000, percentage = 2, aug = 50 and p = 1070", () => {
    expect(nbYear(1000, 2, 50, 1070)).toBe(1);
  });

  test("it should return 94 for p0 = 1500000, percentage = 0.25, aug = 1000 and p = 2000000", () => {
    expect(nbYear(1500000, 0.25, 1000, 2000000)).toBe(94);
  });

  test("it should return 90 for p0 = 1000, percentage = null, aug = 100 and p = p0 = 10000", () => {
    expect(nbYear(1000, null, 100, 10000)).toBe(90);
  });
})
