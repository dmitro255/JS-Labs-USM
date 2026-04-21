    // 1.1. Вывод массива в консоль

    const array = [4, 34, 1253, 5, 525, 6, 3];

    /**
     * Выводит элементы массива в консоль в формате:
     * Element: index: value
     * @param {Array<any>} array - Массив для вывода
     * @returns {void}
     */
    function printArray(array) {
        for (let i = 0; i < array.length; i++) {
            console.log(`Element: ${i}: value ${array[i]}`);
        }
    }
    printArray(array);

    /**
     * Выводит элементы массива в формате:
     * index: value
     * @param {Array<any>} array - Массив для вывода
     * @returns {void}
     */
    function printArray1(array) {
        for (let i = 0; i < array.length; i++) {
            console.log(`${i}:  ${array[i]}`);
        }
    }
    printArray1(array);


    // 1.2. Функция forEach(array, callback)

    /**
     * Выполняет callback для каждого элемента массива
     * @template T
     * @param {Array<T>} array - Исходный массив
     * @param {(element: T, index: number, array: Array<T>) => void} callback - Функция обработки
     * @returns {void}
     */
    function forEach(array, callback) {
        for (let i = 0; i < array.length; i++) {
            callback(array[i], i, array);
        }
    }

    forEach(array, (element, index, array) => {
        console.log(`Element: ${element}, Index: ${index}`);
    });


    // 2. Функция map(array, callback)

    /**
     * Создает новый массив, применяя callback к каждому элементу
     * @template T, U
     * @param {Array<T>} numbers - Исходный массив
     * @param {(element: T, index: number, array: Array<T>) => U} callback - Функция преобразования
     * @returns {Array<U>} Новый массив
     */
    function map(numbers, callback) {
        const res = [];
        for (let i = 0; i < numbers.length; i++) {
            res[i] = callback(numbers[i], i, numbers);
        }
        return res;
    }

    const numbers = [1, 2, 3, 4, 5];
    const squared = map(numbers, (element) => element * element);
    console.log(squared); // [1, 4, 9]


    // 3. Функция filter(array, callback)

    /**
     * Фильтрует массив по условию callback
     * @template T
     * @param {Array<T>} numbers - Исходный массив
     * @param {(element: T, index: number, array: Array<T>) => boolean} callback - Условие фильтрации
     * @returns {Array<T>} Отфильтрованный массив
     */
    function filter(numbers, callback) {
        const result = [];
        for (let i = 0; i < numbers.length; i++) {
            if (callback(numbers[i], i, numbers)) {
                result.push(numbers[i]);
            }
        }
        return result;
    }

    const evenNumbers = filter(numbers, (element) => element % 2 === 0);
    console.log(evenNumbers); // [2]


    // 4. Функция find(array, callback)

    /**
     * Возвращает первый элемент, удовлетворяющий условию
     * @template T
     * @param {Array<T>} numbers - Исходный массив
     * @param {(element: T, index: number, array: Array<T>) => boolean} callback - Условие поиска
     * @returns {T|undefined} Найденный элемент или undefined
     */
    function find(numbers, callback) {
        for (let i = 0; i < numbers.length; i++) {
            if (callback(numbers[i], i, numbers)) {
                return numbers[i];
            }
        }
    }

    const firstEven = find(numbers, (element) => element % 2 === 0);
    console.log(firstEven); // 2


    // 5. Функция some(array, callback)

    /**
     * Проверяет, существует ли хотя бы один элемент, удовлетворяющий условию
     * @template T
     * @param {Array<T>} array - Исходный массив
     * @param {(element: T, index: number, array: Array<T>) => boolean} callback - Условие проверки
     * @returns {boolean} true если найден хотя бы один элемент
     */
    function some(array, callback) {
        for (let i = 0; i < array.length; i++) {
            if (callback(array[i], i, array)) {
                return true;
            }
        }
        return false;
    }

    const hasEven = some(numbers, (element) => element % 2 === 0);
    console.log(hasEven); // true

    // 6. Функция every(array, callback)

    const numbers_even = [2, 4, 2];

    /**
     * Проверяет, удовлетворяют ли все элементы условию
     * @template T
     * @param {Array<T>} numbers_even - Исходный массив
     * @param {(element: T, index: number, array: Array<T>) => boolean} callback - Условие проверки
     * @returns {boolean} true если все элементы подходят
     */
    function every(numbers_even, callback) {
        for (let i = 0; i < numbers_even.length; i++) {
            if (!callback(numbers_even[i], i, numbers_even)) {
                return false;
            }
        }
        return true;
    }

    const allEven = every(numbers_even, (element) => element % 2 === 0);
    console.log(allEven); // true


    // (Дополнительно) 7. Функция reduce(array, callback, initialValue)

    /**
     * Применяет callback к аккумулятору и каждому элементу массива
     * @template T, U
     * @param {Array<T>} array - Исходный массив
     * @param {(accumulator: U, element: T, index: number, array: Array<T>) => U} callback - Функция редукции
     * @param {U} initialValue - Начальное значение аккумулятора
     * @returns {U} Итоговое значение
     */
    function reduce(array, callback, initialValue) {
        let accumulator = initialValue;

        for (let i = 0; i < array.length; i++) {
            accumulator = callback(accumulator, array[i], i, array);
        }
        return accumulator;
    }

    // пример
    const sum = reduce(numbers, (acc, el) => acc + el, 0);
    console.log(sum); // 15 - он превращает массив в ОДНО значение