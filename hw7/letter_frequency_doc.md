# 📄 Частотный словарь букв и визуализация на Canvas

## 🧠 Алгоритм построения частотного словаря букв

1. **Принять текст от пользователя** (например, из `<textarea>`).
2. **Нормализовать текст**:
   - Преобразовать к нижнему регистру.
   - Удалить все символы, кроме латинских букв и немецких (`äöüß`).
3. **Построить частотный словарь**:
   - Для каждой буквы увеличить счётчик в объекте `freq`.
4. **Отсортировать буквы по алфавиту.**
5. **Вывести частоты в консоль или визуализировать на холсте.

```js
function letterFrequency(text) {
  const freq = {};
  const normalizedText = text.toLowerCase();

  for (let char of normalizedText) {
    if (char.match(/[a-zäöüß]/)) {
      freq[char] = (freq[char] || 0) + 1;
    }
  }

  return freq;
}
```

---

## 🎨 Визуализация на Canvas

Чтобы отобразить частоты букв на холсте в виде гистограммы:

```html
<canvas id="canvas" width="900" height="400"></canvas>
```

```js
function drawHistogram(freq) {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const letters = Object.keys(freq).sort();
  const maxFreq = Math.max(...Object.values(freq));
  const barWidth = canvas.width / letters.length;

  letters.forEach((letter, i) => {
    const barHeight = (freq[letter] / maxFreq) * (canvas.height - 40);
    const x = i * barWidth;
    const y = canvas.height - barHeight - 20;

    ctx.fillStyle = "#4285F4";
    ctx.fillRect(x + 2, y, barWidth - 4, barHeight);

    ctx.fillStyle = "#000";
    ctx.font = "14px sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(letter, x + barWidth / 2, canvas.height - 5);
  });
}
```

---

## 📂 Связка HTML + JS

В `index.html` реализован полный интерфейс:
- Текстовое поле для ввода текста
- Кнопка "Построить гистограмму"
- Гистограмма на `<canvas>`

Если ты хочешь использовать внешний файл с логикой (`letterFrequency.js`), можно подключить его так:

```html
<script src="letterFrequency.js"></script>
```

Если хочешь, я помогу разделить функциональность по модулям.