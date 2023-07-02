# Notes

## Description

In a small town the population is `p0 = 1000` at the beginning of a year. The population regularly increases by `2 percent` per year and moreover `50` new inhabitants per year come to live in the town. How many years does the town need to see its population greater or equal to `p = 1200` inhabitants?

```
At the end of the first year there will be: 
1000 + 1000 * 0.02 + 50 => 1070 inhabitants

At the end of the 2nd year there will be: 
1070 + 1070 * 0.02 + 50 => 1141 inhabitants (** number of inhabitants is an integer **)

At the end of the 3rd year there will be:
1141 + 1141 * 0.02 + 50 => 1213

It will need 3 entire years.
```

More generally given parameters:

`p0, percent, aug (inhabitants coming or leaving each year), p (population to equal or surpass)`

the function `nb_year` should return `n` number of entire years needed to get a population greater or equal to `p`.

`aug` is an integer, `percent` a positive or null floating number, `p0` and `p` are positive integers (> 0)

```
Examples:
nb_year(1500, 5, 100, 5000) -> 15
nb_year(1500000, 2.5, 10000, 2000000) -> 10
```

Note:

Don't forget to convert the percent parameter as a percentage in the body of your function: if the parameter percent is 2 you have to convert it to 0.02.

## Domain Discussions

- input: 
    - `p0`: initial population (int)
    - `percent`: population increase per year (null of float)
    - `aug`: number of inhabitants that comes or leaves each year (int)
    - `p`: population to equal or surpasse (int)
- output:
    -  `n`: number of entire years needed to get a population greater or equal to `p` (int)
- The total of a population after one year can be calculated by:
    `Total_after_one_year = p0 + p0 * percent/100 + aug`
- OBS: the `Total_after_one_year` is a INTEGER: so the final number should be round DOWN (as per examples)
- The `Total_after_one_year` from the previous year is the `p0` of the following year
- Repeat the count each year until the total is equal or greater than `p` 

---

**Label**  
✅ done 🚧 WIP ❌ ERROR 🐛 BUG 

---


TODO:

# Pomodoro 1 🍅:
- initial setup 
    - update README ✅
    - update NOTES ✅
    - update package.json ✅
    - update code/test files ✅
- domain discussion ✅
- perform the 'canary' test just to check if the structure works 