// Дополнительное:
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
        //В данной коллекции я добавил уникальные неизменяемые индексы для каждой пары key:value в виде [key, value, index].
        //Здесь и в последующих методах я буду оперировать уникальными индексами. 
        this.arr = [...this.arr, [this.key, this.value, uniqIndex]];
        return this.arr;
    }
    has(key) {
        this.key = key;
        return this.arr.some(elem=>elem[0]==this.key);
    }
    hasIndex(index) {
        this.index = index;
        return this.arr.some(elem=>elem[2]==this.index);
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
        if(this.arr.every(elem=>elem[2]!=this.index)) return "There is no such index in the array.";
        else {
            let copyArr = [...this.arr];
            let resultMiddle = copyArr.find(elem=>elem[2]==this.index);
            let result = [...resultMiddle];
            result.pop();
            return result;
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

    forEach(functionCb) {
        this.functionCb = functionCb;
        return this.arr.forEach(this.functionCb);
    }

    union(...map) {
        this.map = map;
        let maxIndex = this.arr[0][2];
        for (let i=1; i<this.arr.length; i++) {
            if (this.arr[i][2]>maxIndex) maxIndex = this.arr[i][2];
        }
        this.map = this.map.map((elem, index)=>elem=[...elem, ++maxIndex]);
        this.arr = this.arr.concat(this.map);

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
    sort(compareKeyValue) {
        this.compareKeyValue = compareKeyValue;
        let arrMiddle = [...this.arr];
        arrMiddle.sort(this.compareKeyValue);
        this.arr = arrMiddle;
        return this.arr;
    } 
    sortIndex(compareIndex) {
        this.compareIndex = compareIndex;
        let arrMiddle = [...this.arr];
        arrMiddle.sort(this.compareIndex);
        this.arr = arrMiddle;
        return this.arr;

    }     
    setTo(index, value) {
        this.index = index;
        this.value = value;
        let maxIndex = this.arr[0][2];
        for (let i=1; i<this.arr.length; i++) {
            if (this.arr[i][2]>maxIndex) maxIndex = this.arr[i][2];
        }
        this.value = [...this.value, ++maxIndex];
        let copyArr = [...this.arr];
        copyArr.splice(++this.index, 0, this.value);
        this.arr = copyArr;
        return this.arr;
    } 
    removeAt(index, count=1) {
        this.index = index;
        this.count = count;
        let copyArr = [...this.arr];
        copyArr.splice(++this.index, this.count);
        this.arr = copyArr;
        return this.arr;
    }
}

let collection = new IndexMap();
console.log(collection.set(2,3));
console.log(collection.set(9,4));
console.log(collection.set(3,5));
console.log(collection.set(6,8));
console.log(collection.has(6));
console.log(collection.hasIndex(2));
console.log(collection.get(7));
console.log(collection.getByIndex(3));
console.log(collection.remove(1));
console.log(collection.size());

function functionCb(elem) {
    let value = elem[1];
    let key = elem[0];
    let index = elem[2];
    return console.log ("value = "+value, "key = "+key, "index = "+index);

}
collection.forEach(functionCb);

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

function compareIndex (a,b) {
    return  a[2]-b[2];
  };
console.log(collection.sort(compareIndex));

console.log(collection.setTo(2, [5,4]));

console.log(collection.removeAt(2, 2));

