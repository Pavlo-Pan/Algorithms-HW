class Stack {
    constructor() {
        this.items = [];
    }

    // Проверка на пустоту стека
    empty() {
        return this.items.length === 0;
    }

    // Добавление элемента в стек
    push(element) {
        this.items.push(element);
    }

    // Удаление и возврат верхнего элемента стека
    pop() {
        if (this.empty()) {
            throw new Error("Стек пустой");
        }
        return this.items.pop();
    }

    // Возврат верхнего элемента без удаления
    peek() {
        if (this.empty()) {
            throw new Error("Стек пустой");
        }
        return this.items[this.items.length - 1];
    }

    // Поиск элемента: возвращает позицию от вершины или -1
    search(element) {
        const index = this.items.lastIndexOf(element);
        if (index === -1) return -1;

        // Позиция от вершины (0 — это верхний элемент)
        return this.items.length - 1 - index;
    }
}

// Пример использования
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.peek());        // 30
console.log(stack.search(20));   // 1
console.log(stack.pop());        // 30
console.log(stack.empty());      // false
console.log(stack.search(50));   // -1