function findKthElement(arr1, arr2, k) {
    function kth(arr1, arr2, k) {
        // Гарантируем, что arr1 — короче
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

// Пример:
const arr1 = [100, 112, 256, 349, 770];
const arr2 = [72, 86, 113, 119, 265, 445, 892];
const k = 7;

console.log(findKthElement(arr1, arr2, k)); // Вывод: 256
