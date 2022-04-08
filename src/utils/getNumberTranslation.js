const translations = {
  "1-12": "1 a 12",
  "13-24": "13 a 24",
  "25-36": "25 a 36",
  evens: "Pares",
  odds: "Impares",
  reds: "Rojas",
  blacks: "Negras",
  "1-18": "1 a 18",
  "10-36": "19 a 36",
  row1: "Fila 1",
  row2: "Fila 2",
  row3: "Fila 3",
};

export const getNumberTranslation = (number) => translations[number] || number;
