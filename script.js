
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
  case "1934":
  case "1935":
  case "1944":
  case "1945":
  case "1954":
  case "1955":
  case "1964":
  case "1965":
  case "1974":
  case "1975":
  case "1984":
  case "1985":
  case "1994":
  case "1995":
  case "2004":
  case "2005":
  case "2014":
  case "2015":
    elementtext = "WOOD";
    break;
  case "1926":
  case "1927":
  case "1936":
  case "1937":
  case "1946":
  case "1947":
  case "1956":
  case "1957":
  case "1966":
  case "1967":
  case "1976":
  case "1977":
  case "1986":
  case "1987":
  case "1996":
  case "2006":
  case "2007":
  case "2016":
  case "2017":
    elementtext = "FIRE";
    break;
  case "1928":
  case "1929":
  case "1938":
  case "1939":
  case "1948":
  case "1949":
  case "1958":
  case "1959":
  case "1968":
  case "1969":
  case "1978":
  case "1979":
  case "1988":
  case "1989":
  case "1998":
  case "1999":
  case "2008":
  case "2009":
  case "2018":
  case "2019":
    elementtext = "EARTH";
    break;
  case "1920":
  case "1921":
  case "1930":
  case "1931":
  case "1940":
  case "1941":
  case "1960":
  case "1950":
  case "1951":
  case "1961":
  case "1970":
  case "1971":
  case "1980":
  case "1981":
  case "1990":
  case "1991":
  case "2000":
  case "2001":
  case "2010":
  case "2011":
  case "2020":
  case "2021":
    elementtext = "METAL";
    break;
  case "1922":
  case "1923":
  case "1932":
  case "1933":
  case "1942":
  case "1943":
  case "1952":
  case "1953":
  case "1962":
  case "1963":
  case "1972":
  case "1973":
  case "1982":
  case "1983":
  case "1992":
  case "1993":
  case "2002":
  case "2003":
  case "2012":
  case "2013":
  case "2022":
  case "2023":
    elementtext = "WATER";
    break;
};

document.getElementById("ANIMAL").innerHTML = animaltext;
document.getElementById("ELEMENT").innerHTML = elementtext;


//ELEMENT IN KANJI
var kanji;
if ( elementtext === "WOOD") {
  kanji = "木";
} else if ( elementtext === "FIRE") {
  kanji = "火";
} else if ( elementtext === "EARTH") {
  kanji = "土";
} else if ( elementtext === "METAL") {
  kanji = "金";
} else if ( elementtext === "WATER") {
  kanji = "水";
} else { kanji = "";
};
document.getElementById("KANJI").innerHTML = kanji;

//ANIMAL KANJI
var animalKanji;
if (animaltext === "Year of the Rat") {
  animalKanji = "鼠";
} else if (animaltext === "Year of the Rabbit") {
  animalKanji = "兔";
} else if (animaltext === "Year of the Horse") {
  animalKanji = "⾺";
} else if (animaltext === "Year of the Dog") {
  animalKanji = "狗";
} else if (animaltext === "Year of the Tiger") {
  animalKanji = "寅";
} else if (animaltext === "Year of the Goat") {
  animalKanji = "羊";
} else if (animaltext === "Year of the Pig") {
  animalKanji = "豬";
} else if (animaltext === "Year of the Snake") {
  animalKanji = "蛇";
} else if (animaltext === "Year of the Ox") {
  animalKanji = "牛";
} else if (animaltext === "Year of the Rooster") {
  animalKanji = "鷄";
} else if (animaltext === "Year of the Dragon") {
  animalKanji = "龍";
} else if (animaltext === "Year of the Monkey") {
  animalKanji = "猴";
} else { animalKanji = "";
};
document.getElementById("ANIMALKANJI").innerHTML = animalKanji;


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
  resultText = "Fire Monkeys: Ambitious, Adventurous (1956, 2016)";
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
};

document.getElementById("Result").innerHTML = resultText;
//ABOUT
var aboutText;
switch(animaltext) {
  case "Year of the Rat":
    aboutText = "Rats are clever, quick thinkers; successful, but content with living a quiet and peaceful life. Optimistic and energetic, people born in the Rat year are likable by all.<br><br>Men born in the Rat year are clever and adapt quickly to new environments.<br>Women born in the Rat year are very traditional.<br><br>The Rat is also associated with the Earthly Branch (地支—dì zhī) Zi (子) and the midnight hours. In the terms of yin and yang (阴阳—yīn yáng), the Rat is yang and represents the beginning of a new day."
    break;
  case "Year of the Horse":
    aboutText = "Horses are free spirits who need space to be themselves. Horses are full of energy, and are strong believers of chasing after dreams.<br><br>Men born in the Horse year are independent and crave freedom.<br>Women born in the Horse year are beautiful and impressive.<br><br>The Horse is also associated with the Earthly Branch (地支—dì zhī) wǔ (午), and the hours 11–13 at midday. In the terms of yin and yang (阴阳—yīn yáng), the Horse is yang."
    break; 
  case "Year of the Goat":
    aboutText = "Goats are loving and selfless, always thinking for others, even if it works against their own interest. No matter what, they put others’ needs above their own. However, their inner stubbornness sometimes makes communication difficult.<br><br>Men born in the Goat year are true gentlemen.<br>Women born in the Goat year are reliable and attentive.<br><br>The Goat is also associated with the Earthly Branch (地支—dì zhī) wèi (未) and the hours 1–3 in the afternoon. In the terms of yin and yang (阴阳—yīn yáng), the Goat is yin."
    break; 
  case "Year of the Pig":
    aboutText = "Pigs have a beautiful personality and are blessed with good fortune in life. They love entertainment and will occasionally treat themselves, but are very realistic.<br><br>Men born in the Pig year are optimistic and gentle.<br>Women born in the Pig year are full of excitement. <br><br>The Pig is also associated with the Earthly Branch (地支—dì zhī) hài (亥), and the hours 9–11 in the night. In terms of yin and yang (阴阳—yīn yáng), the Pig is yin. In Chinese culture, pigs are the symbol of wealth."
    break; 
  case "Year of the Snake":
    aboutText = "Snakes have a deep and complex mind, but if they love, they love with their entire heart. Snakes are humorous and sophisticated, however they may become jealous easily and often distrust others.<br><br>Men born in the Snake year are mysterious and experienced.<br>Women born in the Snake year are graceful and elegant.<br><br>The Snake is also associated with the Earthly Branch (地支—dì zhī) sì (巳), and the hours 9–11 in the morning. In the terms of yin and yang (阴阳—yīn yáng), the Snake is yin."
    break; 
  case "Year of the Tiger":
    aboutText = "Tigers are courageous and active people who love a good challenge and adventure in life. Tigers are kind and benevolent. Sometimes they make brash decisions and are hard to control.<br><br>Men born in the Tiger year have adventurous spirits.<br>Women born in the Tiger year are mesmerizing and expressive.<br><br>The Tiger is also associated with the Earthly Branch (地支—dì zhī) yín (寅) and the hours 3–5 in the morning. In the terms of yin and yang (阴阳—yīn yáng), the Tiger is yang."
    break; 
  case "Year of the Monkey":
    aboutText = "Monkeys are lighthearted pranksters who have the ability to achieve all their dreams. Monkeys are always able to triumph and be the final winner. However, they can be arrogant and quick to jealousy.<br><br>Men born in the Monkey year are enthusiastic and responsible. <br>Women born in the Monkey year are social and connect with others easily.<br><br>The Monkey is also associated with the Earthly Branch (地支—dì zhī) shēn (申), and the hours 3–5 in the afternoon. In the terms of yin and yang (阴阳—yīn yáng), the Monkey is yang."
    break; 
  case "Year of the Dragon":
    aboutText = "Dragons are strong and independent, but they yearn for support and love. They value respect and may be aloof. They do not waste money or time.<br><br>Men born in the Dragon year are steadfast in their beliefs.<br>Women born in the Dragon year are mesmerizing and strong.<br><br>The Dragon is also associated with the Earthly Branch (地支—dì zhī) chén (辰) and the hours 7–9 in the morning. In the terms of yin and yang (阴阳—yīn yáng), the Dragon is yang."
    break; 
  case "Year of the Rooster":
    aboutText = "Roosters are complex people who seem strong but, deep down, need validation from loved ones. Roosters are serious in their work, straightforward and decisive in their actions.<br><br>Men born in the Rooster year are always changing, sometimes joyous, sometimes emotional.<br>Women born in the Rooster year are caring and very down to earth.<br><br>The Rooster is also associated with the Earthly Branch (地支—dì zhī) yǒu (酉), and the hours 5–7 in the afternoon. In the terms of yin and yang (阴阳—yīn yáng), the Rooster is yin."
    break; 
  case "Year of the Rabbit":
    aboutText = "Rabbits are earnest with everything they do; they just ask that others treat them the same way.Though quiet, they are far from weak. With their good reasoning skills and attention to detail, they make great scholars.<br><br>Men born in the Rabbit year are extraordinarily polite.<br>Women born in the Rabbit year love being social, but always mind their manners. <br><br>The Rabbit is also associated with the Earthly Branch (地支—dì zhī) mǎo (卯) and the hours 5—7 in the morning. In the terms of yin and yang (阴阳—yīn yáng), the Rabbit is yin."
    break; 
  case "Year of the Dog":
    aboutText = "Honest and loyal, Dogs are the truest friends and most reliable partner.A Dog’s most defining characteristic is their loyalty. They will never abandon their friends, family or work, making them popular in social circles.<br><br>Men born in the Dog year are straightforward and genuine.<br>Women born in the Dog year are very cautious. <br><br>The Dog is also associated with the Earthly Branch (地支—dì zhī) xū (戌), and the hours 7–9 in the evening. In the terms of yin and yang (阴阳—yīn yáng), the Dog is yang."
    break; 
  case "Year of the Ox":
    aboutText = "Oxen are the hard workers, intelligent and reliable, but never demanding praise. They make excellent leaders, though they may be stubborn. <br><br>Men born in the Ox year are reliable and trustworthy.<br>Women born in the Ox year are calm and gentle.<br><br>The Ox is also associated with the Earthly Branch (地支—dì zhī) Chǒu (丑) and the hours 1–3 in the morning. In the terms of yin and yang (阴阳—yīn yáng), the Ox is Yang."
    break; 
  default:
  aboutText = "";
}

document.getElementById("ABOUT").innerHTML = aboutText;

//COMPATIBILITY
var compatText
switch(animaltext) {
  case "Year of the Rat":
    compatText = "Most compatible with: Ox, Dragon, Monkey<br>Least compatible with: Horse, Goat and Rabbit"
    break;
  case "Year of the Horse":
    compatText = "Most compatible with: Goat, Tiger, Dog<br>Least compatible with: Rat, Ox, Horse"
    break; 
  case "Year of the Goat":
    compatText = "Most compatible with: Horse, Pig, Rabbit<br>Least compatible with: Ox, Rat, Dog"
    break; 
  case "Year of the Pig":
    compatText = "Most compatible with: Tiger, Rabbit, Goat<br>Least compatible with: Snake, Monkey"
    break; 
  case "Year of the Snake":
    compatText = "Most compatible with: Monkey, Rooster, Ox<br>Least compatible with: Tiger, Pig"
    break; 
  case "Year of the Tiger":
    compatText = "Most compatible with: Pig, Horse, Dog<br>Least compatible with: Monkey, Snake"
    break; 
  case "Year of the Monkey":
    compatText = "Most compatible with: Snake, Rat, Dragon<br>Least compatible with: Tiger, Pig"
    break; 
  case "Year of the Dragon":
    compatText = "Most compatible with: Rooster, Monkey, Rat<br>Least compatible with: Dog, Rabbit, Dragon"
    break; 
  case "Year of the Rooster":
    compatText = "Most compatible with: Dragon, Snake, Ox<br>Least compatible with: Rabbit, Dog, Rooster"
    break; 
  case "Year of the Rabbit":
    compatText = "Most compatible with: Dog, Pig, Goat<br>Least compatible with: Rooster, Dragon, Rat"
    break; 
  case "Year of the Dog":
    compatText = "Most compatible with: Rabbit, Tiger, Horse<br>Least compatible with: Dragon, Ox, Goat"
    break; 
  case "Year of the Ox":
    compatText = "Most compatible with: Rat, Snake, Rooster<br>Least compatible with: Goat, Horse, Dog"
    break; 
  default:
  compatText = "";
}

document.getElementById("COMPAT").innerHTML = compatText;
}