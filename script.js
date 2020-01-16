
function whatYear(year){
  var year = document.getElementById("mySelect").value;
  console.log(year);
  var animaltext = "";
  var elementtext = "";

//ANIMAL SIGN
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
//ELEMENT
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

//SIGN & ELEMENT ALIGNMENT
var resultText;
if ( elementtext === "WOOD" && animaltext === "Year of the Rat") {
  resultText = "Wood Rats: Principled, Charming (1924, 1984)";
} else if ( elementtext === "FIRE" && animaltext === "Year of the Rat") {
  resultText = "Fire Rats: Energetic, Brave (1936, 1996)";
} else if ( elementtext === "EARTH" && animaltext === "Year of the Rat") {
  resultText = "Earth Rats: Amiable, Modest (1948, 2008)";
} else if ( elementtext === "METAL" && animaltext === "Year of the Rat") {
  resultText = "Metal Rats: Hot-Tempered, Jealous (1960, 2020)";
} else if ( elementtext === "WATER" && animaltext === "Year of the Rat") {
  resultText = "Water Rats: Shrewd, Conservative (1912, 1972)";
  //BEGIN OX
} else if ( elementtext === "WOOD" && animaltext === "Year of the Ox") {
  resultText = "Wood Oxes: Restless, Straightforward (1925, 1985)";
} else if ( elementtext === "FIRE" && animaltext === "Year of the Ox") {
  resultText = "Fire Oxes: Impersonal, Shortsighted (1937, 1997)";
} else if ( elementtext === "EARTH" && animaltext === "Year of the Ox") {
  resultText = "Earth Oxes: Honest, Prudent (1949, 2009)";
} else if ( elementtext === "METAL" && animaltext === "Year of the Ox") {
  resultText = "Metal Oxes: Active, Kind (1961, 2021)";
} else if ( elementtext === "WATER" && animaltext === "Year of the Ox") {
  resultText = "Water Oxes: Observant, Tenacious (1913, 1973)"; 
//BEGIN TIGER
} else if ( elementtext === "WOOD" && animaltext === "Year of the Tiger") {
  resultText = "Wood Tigers: Cooperative, Communicative (1914, 1974)";
} else if ( elementtext === "FIRE" && animaltext === "Year of the Tiger") {
  resultText = "Fire Tigers: Optimistic, Independent (1926, 1986)";
} else if ( elementtext === "EARTH" && animaltext === "Year of the Tiger") {
  resultText = "Earth Tigers: Thoughtful, Realistic (1938, 1998)";
} else if ( elementtext === "METAL" && animaltext === "Year of the Tiger") {
  resultText = "Metal Tigers: Tender, Considerate (1950, 2010)";
} else if ( elementtext === "WATER" && animaltext === "Year of the Tiger") {
  resultText = "Water Tigers: Studious, Thoughtful (1902, 1962)";
//BEGIN RABBIT
} else if ( elementtext === "WOOD" && animaltext === "Year of the Rabbit") {
  resultText = "Wood Rabbits: Clever, Quick-Witted (1915, 1975)";
} else if ( elementtext === "FIRE" && animaltext === "Year of the Rabbit") {
  resultText = "Fire Rabbits: Broad-Minded, Smart (1927, 1987)";
} else if ( elementtext === "EARTH" && animaltext === "Year of the Rabbit") {
  resultText = "Earth Rabbits: Frank, Hardworking (1939, 1999)";
} else if ( elementtext === "METAL" && animaltext === "Year of the Rabbit") {
  resultText = "Metal Rabbits: Kindhearted, Conservative (1951, 2011)";
} else if ( elementtext === "WATER" && animaltext === "Year of the Rabbit") {
  resultText = "Water Rabbits: Gentle, Amicable (1963, 2023)";
//BEGIN Dragon
} else if ( elementtext === "WOOD" && animaltext === "Year of the Dragon") {
  resultText = "Wood Dragons: Introverted, Dedicated (1904, 1964)";
} else if ( elementtext === "FIRE" && animaltext === "Year of the Dragon") {
  resultText = "Fire Dragons: Smart, Acute (1916, 1976)";
} else if ( elementtext === "EARTH" && animaltext === "Year of the Dragon") {
  resultText = "Earth Dragons: Ambitious, Hardworking (1928, 1988)";
} else if ( elementtext === "METAL" && animaltext === "Year of the Dragon") {
  resultText = "Metal Dragons: Natural, Straightforward (1940, 2000)";
} else if ( elementtext === "WATER" && animaltext === "Year of the Dragon") {
  resultText = "Water Dragons: Farsighted, Resilient (1952, 2012)";
//BEGIN Snake
} else if ( elementtext === "WOOD" && animaltext === "Year of the Snake") {
  resultText = "Wood Snakes: Self-Consistent, Tasteful (1905, 1965)";
} else if ( elementtext === "FIRE" && animaltext === "Year of the Snake") {
  resultText = "Fire Snakes: Active, Wise (1917, 1977)";
} else if ( elementtext === "EARTH" && animaltext === "Year of the Snake") {
  resultText = "Earth Snakes: Reasoning, Independent (1929, 1989)";
} else if ( elementtext === "METAL" && animaltext === "Year of the Snake") {
  resultText = "Metal Snakes: Determined, Courageous (1941, 2001)";
} else if ( elementtext === "WATER" && animaltext === "Year of the Snake") {
  resultText = "Water Snakes: Clever, Creative (1953, 2013)";
//BEGIN Horse
} else if ( elementtext === "WOOD" && animaltext === "Year of the Horse") {
  resultText = "Wood Horses: Imaginative, Prudent (1954, 2014)";
} else if ( elementtext === "FIRE" && animaltext === "Year of the Horse") {
  resultText = "Fire Horses: Smart, Stubborn (1906, 1966)";
} else if ( elementtext === "EARTH" && animaltext === "Year of the Horse") {
  resultText = "Earth Horses: Optimistic, Kindhearted (1918, 1978)";
} else if ( elementtext === "METAL" && animaltext === "Year of the Horse") {
  resultText = "Metal Horses: Kind, Straightforward (1930, 1990)";
} else if ( elementtext === "WATER" && animaltext === "Year of the Horse") {
  resultText = "Water Horses: Irritable, Sentimental (1942, 2002)";
//BEGIN Goat
} else if ( elementtext === "WOOD" && animaltext === "Year of the Goat") {
  resultText = "Wood Goats: Amicable, Compassionate (1955, 2015)";
} else if ( elementtext === "FIRE" && animaltext === "Year of the Goat") {
  resultText = "Fire Goats: Frank, Honest (1907, 1967)";
} else if ( elementtext === "EARTH" && animaltext === "Year of the Goat") {
  resultText = "Earth Goats: Righteous, Honest (1919, 1979)";
} else if ( elementtext === "METAL" && animaltext === "Year of the Goat") {
  resultText = "Metal Goats: Kindhearted, Ambitious (1931, 1991)";
} else if ( elementtext === "WATER" && animaltext === "Year of the Goat") {
  resultText = "Water Goats: Responsible, Amicable (1943, 2003)";
//BEGIN Monkey
} else if ( elementtext === "WOOD" && animaltext === "Year of the Monkey") {
  resultText = "Wood Monkeys: Lively, Compassionate (1944, 2004)";
} else if ( elementtext === "FIRE" && animaltext === "Year of the Monkey") {
  resultText = "The Characters of Fire Monkeys: Ambitious, Adventurous (1956, 2016)";
} else if ( elementtext === "EARTH" && animaltext === "Year of the Monkey") {
  resultText = "Earth Monkeys: Optimistic, Fearless (1908, 1968)";
} else if ( elementtext === "METAL" && animaltext === "Year of the Monkey") {
  resultText = "Metal Monkeys: Smart, Confident (1920, 1980)";
} else if ( elementtext === "WATER" && animaltext === "Year of the Monkey") {
  resultText = "Water Monkeys: Smart, Quick-Witted (1932, 1992)";
//BEGIN Rooster
} else if ( elementtext === "WOOD" && animaltext === "Year of the Rooster") {
  resultText = "Wood Roosters: Energetic, Humorous (1945, 2005)";
} else if ( elementtext === "FIRE" && animaltext === "Year of the Rooster") {
  resultText = "Fire Roosters: Responsible, Impatient (1957, 2017)";
} else if ( elementtext === "EARTH" && animaltext === "Year of the Rooster") {
  resultText = "Earth Roosters: Lively, Generous (1909, 1969)";
} else if ( elementtext === "METAL" && animaltext === "Year of the Rooster") {
  resultText = "Roosters: Considerate, Determined (1921, 1981)";
} else if ( elementtext === "WATER" && animaltext === "Year of the Rooster") {
  resultText = "Water Roosters: Smart, Quick-Witted (1933, 1993)"; 
//BEGIN Dog
} else if ( elementtext === "WOOD" && animaltext === "Year of the Dog") {
  resultText = "Wood Dogs: Reliable, Considerate (1934, 1994)";
} else if ( elementtext === "FIRE" && animaltext === "Year of the Dog") {
  resultText = "Fire Dogs: Intelligent, Hardworking (1946, 2006)";
} else if ( elementtext === "EARTH" && animaltext === "Year of the Dog") {
  resultText = "Earth Dogs: Sensible, Communicative (1958, 2018)";
} else if ( elementtext === "METAL" && animaltext === "Year of the Dog") {
  resultText = "Dogs: Conservative, Kind (1910, 1970)";
} else if ( elementtext === "WATER" && animaltext === "Year of the Dog") {
  resultText = "Water Dogs: Thoughtful, Brave (1922, 1982)";
//BEGIN Pig
} else if ( elementtext === "WOOD" && animaltext === "Year of the Pig") {
  resultText = "Wood Pigs: Lovely, Easygoing (1935, 1995)";
} else if ( elementtext === "FIRE" && animaltext === "Year of the Pig") {
  resultText = "Fire Pigs: Ambitious, Cooperative (1947, 2007)";
} else if ( elementtext === "EARTH" && animaltext === "Year of the Pig") {
  resultText = "Earth Pigs: Cooperative, Punctual (1959, 2019)";
} else if ( elementtext === "METAL" && animaltext === "Year of the Pig") {
  resultText = "Metal Pigs: Broad-Minded, Amicable (1911, 1971)";
} else if ( elementtext === "WATER" && animaltext === "Year of the Pig") {
  resultText = "Water Pigs: Subjective, Earnest (1923, 1983)";
} else { resultText="";
}
document.getElementById("Result").innerHTML = resultText;

}