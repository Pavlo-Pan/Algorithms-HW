# 📘 Алгоритм сложения трёх чисел на TypeScript

Простой проект на TypeScript: получаем три целых числа от пользователя, складываем их и выводим результат.

---

## 📁 Структура проекта

```
hw1/
├— index.ts
├— package.json
├— tsconfig.json
├— package-lock.json
└— README.md
```

---

## 🚀 Установка и запуск

### 1. Клонируй проект или создай папку

```bash
mkdir hw1
cd hw1
```

### 2. Инициализация и установка зависимостей

```bash
npm init -y
npm install typescript ts-node @types/readline-sync readline-sync --save-dev
```

### 3. Создай конфигурацию TypeScript

```bash
npx tsc --init
```

### 4. Добавь скрипт запуска в `package.json`

```json
"scripts": {
  "start": "ts-node index.ts"
}
```

---

## 🧠 Алгоритм

1. Получить от пользователя три целых числа.
2. Сложить эти три числа.
3. Вывести результат в консоль.

---

## 📄 index.ts

```ts
import * as readline from 'readline-sync';

const num1: number = parseInt(readline.question("Write first number (by default 5): ", { defaultInput: "5" }), 10);
const num2: number = parseInt(readline.question("Write second number (by default 6): ", { defaultInput: "6" }), 10);
const num3: number = parseInt(readline.question("Write third number (by default 7): ", { defaultInput: "7" }), 10);

const sum: number = num1 + num2 + num3;

console.log("Sum of three numbers:", sum);
```

---

## 🛠️ Запуск

```bash
npm run start
```

---

## ✅ Пример

```
Write first number (by default 5):
Write second number (by default 6):
Write third number (by default 7):
Sum of three numbers: 18
```

---

## 📦 Дополнительно

Если ты используешь `npx`, можно запускать без `npm run`:

```bash
npx ts-node index.ts
```

---

## 🛉 Удаление собранных файлов

```bash
rm index.js
```

---

## 📚 Лицензия

MIT
