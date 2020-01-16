
function whatYear(year){
  var year = document.getElementById("mySelect").value;
  console.log(year);
  var animaltext = "";
  var elementtext = "";

switch (year) {
  case "1912":
  case "1924":
  case "1936":
  case "1948":
  case "1960":
  case "1972":
  case "1984":
  case "1996":
  case "2008":
  case "2020":
    animaltext = "Year of the Rat";
    break;
  case "1913":
  case "1925":
  case "1937":
  case "1949":
  case "1961":
  case "1973":
  case "1985":
  case "1997":
  case "2009":
  case "2021":
    animaltext = "Year of the Ox";
    break;
  case "1914":
  case "1926":
  case "1938":
  case "1950":
  case "1962":
  case "1974":
  case "1986":
  case "1998":
  case "2010":
  case "2022":
    animaltext = "Year of the Tiger";
    break;
  case "1915":
  case "1927":
  case "1939":
  case "1951":
  case "1963":
  case "1975":
  case "1987":
  case "1999":
  case "2011":
  case "2023":
    animaltext = "Year of the Rabbit";
    break;
  case "1916":
  case "1928":
  case "1940":
  case "1952":
  case "1964":
  case "1976":
  case "1988":
  case "2000":
  case "2012":
  case "2024":
    animaltext = "Year of the Dragon";
    break;
  case "1917":
  case "1929":
  case "1941":
  case "1953":
  case "1965":
  case "1977":
  case "1989":
  case "2001":
  case "2013":
  case "2025":
    animaltext = "Year of the Snake";
    break;
  case "1918":
  case "1930":
  case "1942":
  case "1954":
  case "1966":
  case "1978":
  case "1990":
  case "2002":
  case "2014":
  case "2026":
    animaltext = "Year of the Horse";
    break;
  case "1919":
  case "1931":
  case "1943":
  case "1955":
  case "1967":
  case "1979":
  case "1991":
  case "2003":
  case "2015":
  case "2027":
    animaltext = "Year of the Goat";
    break;
  case "1920":
  case "1932":
  case "1944":
  case "1956":
  case "1968":
  case "1980":
  case "1992":
  case "2004":
  case "2016":
  case "2028":
    animaltext = "Year of the Monkey";
    break;
  case "1921":
  case "1933":
  case "1945":
  case "1957":
  case "1969":
  case "1981":
  case "1993":
  case "2005":
  case "2017":
  case "2029":
    animaltext = "Year of the Rooster";
    break;
  case "1922":
  case "1934":
  case "1946":
  case "1958":
  case "1970":
  case "1982":
  case "1994":
  case "2006":
  case "2018":
  case "2030":
    animaltext = "Year of the Dog";
    break;
  case "1923":
  case "1935":
  case "1947":
  case "1959":
  case "1971":
  case "1983":
  case "1995":
  case "2007":
  case "2019":
  case "2031":
    animaltext = "Year of the Pig";
    break;
  case "YEAR":
    animaltext = "";
    break;
}

switch (year) {
  case "1924":
  case "1925":
  case "1926":
  case "1927":
  case "1928":
  case "1929":
  case "1930":
  case "1931":
  case "1932":
  case "1933":
  case "1934":
  case "1935":
  case "1984":
  case "1985":
  case "1986":
  case "1987":
  case "1988":
  case "1989":
  case "1990":
  case "1991":
  case "1992":
  case "1993":
  case "1994":
  case "1995":
    elementtext = "WOOD";
    break;
  case "1936":
  case "1937":
  case "1938":
  case "1939":
  case "1940":
  case "1941":
  case "1942":
  case "1943":
  case "1944":
  case "1945":
  case "1946":
  case "1947":
  case "1996":
  case "1997":
  case "1998":
  case "1999":
  case "2000":
  case "2001":
  case "2002":
  case "2003":
  case "2004":
  case "2005":
  case "2006":
  case "2007":
    elementtext = "FIRE";
    break;
  case "1948":
  case "1949":
  case "1950":
  case "1951":
  case "1952":
  case "1953":
  case "1954":
  case "1955":
  case "1956":
  case "1957":
  case "1958":
  case "1959":
  case "2008":
  case "2009":
  case "2010":
  case "2011":
  case "2012":
  case "2013":
  case "2014":
  case "2015":
  case "2016":
  case "2017":
  case "2018":
  case "2019":
    elementtext = "EARTH";
    break;
  case "1960":
  case "1961":
  case "1962":
  case "1963":
  case "1964":
  case "1965":
  case "1966":
  case "1967":
  case "1968":
  case "1969":
  case "1970":
  case "2020":
  case "2021":
    elementtext = "METAL";
    break;
  case "1920":
  case "1921":
  case "1922":
  case "1923":
  case "1972":
  case "1973":
  case "1974":
  case "1975":
  case "1976":
  case "1977":
  case "1978":
  case "1979":
  case "1980":
  case "1981":
  case "1982":
  case "1983":
    elementtext = "WATER";
    break;
}
document.getElementById("ELEMENT").innerHTML = elementtext;
document.getElementById("ANIMAL").innerHTML = animaltext;
}