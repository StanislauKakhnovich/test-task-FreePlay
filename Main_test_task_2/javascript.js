
class IndexMap {
    constructor() {
        this.arr = [];
    }
    set(key, value) {
        this.key = key;
        this.value = value;
        this.arr = [...this.arr, [this.key, this.value]];
        let map = new Map(this.arr);
        return map;
    }
    has(key) {
        this.key = key;
        let map = new Map(this.arr);
        return map.has(this.key);
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
        let map = new Map(this.arr);
        return map.get(this.key);
    }
    getByIndex(index) {
        this.index = index;
        if(!this.arr[this.index]) return undefined;
        else {
            let key = this.arr[this.index][0];
            let map = new Map(this.arr);
            return map.get(key);
        }
    }
    remove(key) {
        this.key = key;
        let map = new Map(this.arr);
        map.delete(this.key);
        this.arr = [...map];
        return map;
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
