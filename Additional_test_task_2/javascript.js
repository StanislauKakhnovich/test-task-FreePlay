// 2. Как в основном задании (2), только реализовать методы:
// - union(объединение коллекций)
// - uniq(достать коллекцию уникальных значений)
// - sortIndex(сортировать индексы, принимает callback)
// - sort(сортировать значения, принимает callback)
// - setTo(добавить после индекса)
// - removeAt(удалить после индекса)


class IndexMap {
    constructor() {
        this.arr = [];
    }
    set(key, value) {
        this.key = key;
        this.value = value;
        this.arr = [...this.arr, [this.key, this.value]];
        let indexMap = new Map(this.arr);
        return indexMap;
    }
    has(key) {
        this.key = key;
        let indexMap = new Map(this.arr);
        return indexMap.has(this.key);
    }
    hasIndex(index) {
        this.index = index;
        if(!this.arr[this.index]) return false;
        else {
            return true;
        }
    }
    get(key) {
        this.key = key;
        let indexMap = new Map(this.arr);
        return indexMap.get(this.key);
    }
    getByIndex(index) {
        this.index = index;
        if(!this.arr[this.index]) return undefined;
        else {
            let key = this.arr[this.index][0];
            let indexMap = new Map(this.arr);
            return indexMap.get(key);
        }
    }
    remove(key) {
        this.key = key;
        let indexMap = new Map(this.arr);
        indexMap.delete(this.key);
        this.arr = [...indexMap];
        return indexMap;
    }
    size() {
        return this.arr.length;
    }

    // forEach(value, key, index) {
    //     this.value = value;
    //     this.key = key;
    //     this.index = index;
    //     return //this.arr.forEach((this.value, this.key, this.index))
    // }

    union(...map) {
        this.map = map;
        this.arr = this.arr.concat(map);
        let indexMap = new Map(this.arr);
        return indexMap;
    }
}

let collection = new IndexMap();
console.log(collection.set(1,2));
console.log(collection.set(2,4));
console.log(collection.set(3,5));
console.log(collection.set(6,8));
console.log(collection.has(6));
console.log(collection.hasIndex(6));
console.log(collection.get(3));
console.log(collection.getByIndex(3));
console.log(collection.remove(2));
console.log(collection.size());
console.log(collection.union([7,8],[8,9]));