# Поиск k-го элемента в объединённом отсортированном массиве

Дано два отсортированных массива `arr1` и `arr2`, необходимо найти элемент, который стоит на `k`-й позиции в их объединении, если массив был бы отсортирован.

Пример:

```text
arr1 = [100, 112, 256, 349, 770]  
arr2 = [72, 86, 113, 119, 265, 445, 892]  
k = 7

Итоговый объединённый массив:
[72, 86, 100, 112, 113, 119, 256, 265, 349, 445, 770, 892]

Ответ: 256
```

---

## ✅ Решение 1 — Интуитивное (слияние массивов)

```javascript
function findKthElement(arr1, arr2, k) {
    let i = 0, j = 0, count = 0;
    let result;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            result = arr1[i++];
        } else {
            result = arr2[j++];
        }
        count++;
        if (count === k) return result;
    }

    while (i < arr1.length) {
        result = arr1[i++];
        count++;
        if (count === k) return result;
    }

    while (j < arr2.length) {
        result = arr2[j++];
        count++;
        if (count === k) return result;
    }

    return -1;
}
```

**Время:** O(k)  
**Плюсы:** Простая реализация  
**Минусы:** Медленно при больших значениях k

---

## 🔥 Решение 2 — Эффективное (бинарный поиск)

```javascript
function findKthElement(arr1, arr2, k) {
    function kth(arr1, arr2, k) {
        if (arr1.length > arr2.length) return kth(arr2, arr1, k);
        if (arr1.length === 0) return arr2[k - 1];
        if (k === 1) return Math.min(arr1[0], arr2[0]);

        let i = Math.min(arr1.length, Math.floor(k / 2));
        let j = k - i;

        if (arr1[i - 1] < arr2[j - 1]) {
            return kth(arr1.slice(i), arr2, k - i);
        } else {
            return kth(arr1, arr2.slice(j), k - j);
        }
    }

    return kth(arr1, arr2, k);
}
```

**Время:** O(log k)  
**Плюсы:** Подходит для больших массивов  
**Минусы:** Использует рекурсию (можно переписать в итеративный вид)

---

## 🏁 Итоговое сравнение

| Характеристика        | Слияние (O(k)) | Бинарный поиск (O(log k)) |
|------------------------|----------------|----------------------------|
| Простота реализации    | ✅ Простой      | ⚠️ Сложнее                 |
| Скорость на больших `k`| ❌ Медленно     | ✅ Быстро                  |
| Рекурсия               | ❌ Нет          | ✅ Используется            |
| Универсальность        | ✅              | ✅                         |

---

Для небольших массивов подойдёт простое слияние.  
Для задач с большими объёмами данных — выбирайте бинарный поиск.
