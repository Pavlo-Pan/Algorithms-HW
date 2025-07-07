function quickSortRecursive(array) {
    if (array.length <= 1) {
        return array;
    }

    // Выбираем опорный элемент — средний по индексу
    const pivotIndex = Math.floor(array.length / 2);
    const pivot = array[pivotIndex];

    const less = [];
    const greater = [];

    // Проходим по всем элементам, кроме опорного
    for (let i = 0; i < array.length; i++) {
        if (i === pivotIndex) continue;

        if (array[i] < pivot) {
            less.push(array[i]);
        } else {
            greater.push(array[i]);
        }
    }

    // Рекурсивно сортируем подмассивы и объединяем результат
    return [...quickSortRecursive(less), pivot, ...quickSortRecursive(greater)];
}

    // Пример использования:
const arr = [10, 5, 2, 8, 3, 7, 1];
const sorted = quickSortRecursive(arr);
console.log(sorted); 
