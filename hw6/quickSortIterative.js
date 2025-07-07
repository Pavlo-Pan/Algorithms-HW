function quickSortIterative(array) {
    const stack = [];

    // Начальные границы
    stack.push(0);
    stack.push(array.length - 1);

    while (stack.length > 0) {
        const high = stack.pop();
        const low = stack.pop();

        const pivotIndex = partition(array, low, high);

        // Левая часть
        if (pivotIndex - 1 > low) {
            stack.push(low);
            stack.push(pivotIndex - 1);
        }

        // Правая часть
        if (pivotIndex + 1 < high) {
            stack.push(pivotIndex + 1);
            stack.push(high);
        }
    }

    return array;
}

    // Вспомогательная функция — как в рекурсивной версии
function partition(array, low, high) {
    const pivot = array[high];
    let i = low - 1;

    for (let j = low; j < high; j++) {
        if (array[j] <= pivot) {
            i++;
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    [array[i + 1], array[high]] = [array[high], array[i + 1]];
    return i + 1;
}


    // Пример использования:

const arr2 = [9, 3, 7, 4, 1, 8, 2];
quickSortIterative(arr2);
console.log(arr2); // [1, 2, 3, 4, 7, 8, 9]
