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
        let uniqIndex = this.arr.length;
        this.arr = [...this.arr, [this.key, this.value, uniqIndex]];
        return this.arr;
    }
    has(key) {
        this.key = key;
        return this.arr.some(elem=>elem[0]==this.key);
    }
    hasIndex(index) {
        this.index = index;
        return this.index < this.arr.length;
    }
    get(key) {
        this.key = key;
        let arrMiddle = this.arr.filter(elem=>elem[0]==this.key);
        if (arrMiddle.length == 0) return "There is no such key in the array.";
        else {
            let arrResult = [];
            arrMiddle.forEach(elem=>arrResult=[...arrResult, elem[1]]);
            return arrResult;
        }  
    }
    getByIndex(index) {
        this.index = index;
        if(this.index > this.arr.length) return "There is no such index in the array.";
        else {
            return this.arr[this.index][1];
        }
    }
    remove(key) {
        this.key = key;
        this.arr = this.arr.filter(elem=>elem[0]!=this.key);
        return this.arr;
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
        return this.arr;
    }
    uniq() {
        let arrMiddle = [];
        this.arr.forEach(elem=>arrMiddle=[...arrMiddle, elem[1]]);
        let arrResult = new Set(arrMiddle);
        return [...arrResult];
    }
    uniqKeys() {
        let arrMiddle = [];
        this.arr.forEach(elem=>arrMiddle=[...arrMiddle, elem[0]]);
        let arrResult = new Set(arrMiddle);
        return [...arrResult];
    }
    sort(compare) {
        this.compare = compare;
        let arrMiddle = [...this.arr];
        arrMiddle.sort(this.compare);
        this.arr = arrMiddle;
        return this.arr;
    }       
}

let collection = new IndexMap();
console.log(collection.set(2,3));
console.log(collection.set(2,4));
console.log(collection.set(3,5));
console.log(collection.set(6,8));
console.log(collection.has(6));
console.log(collection.hasIndex(6));
console.log(collection.get(7));
console.log(collection.getByIndex(3));
console.log(collection.remove(1));
console.log(collection.size());
console.log(collection.union([7,8],[8,4]));
console.log(collection.uniq());
console.log(collection.uniqKeys());

function compareValue (a,b) {
    return  a[1]-b[1];
  };
console.log(collection.sort(compareValue));

function compareKey (a,b) {
    return  a[0]-b[0];
  };
console.log(collection.sort(compareKey));