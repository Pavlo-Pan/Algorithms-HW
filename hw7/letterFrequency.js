function letterFrequency(text) {
  const freq = {};
  const normalizedText = text.toLowerCase();

  for (let char of normalizedText) {
    if (char.match(/[a-zäöüß]/)) { // для немецкого — включаем умляуты и ß
      freq[char] = (freq[char] || 0) + 1;
    }
  }

  return freq;
}

// Пример использования:
const text = "Dies ist ein Beispieltext auf Deutsch mit ä, ö, ü und ß!";
const frequencies = letterFrequency(text);

// Выводим отсортированный словарь:
Object.entries(frequencies)
  .sort((a, b) => a[0].localeCompare(b[0]))
  .forEach(([letter, count]) => {
    console.log(`${letter}: ${count}`);
  });
