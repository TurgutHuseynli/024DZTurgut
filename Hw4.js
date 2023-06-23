//lvl 81
let give = ''
let total = ''
let given = false
function add_suffix(){
    if(!given){
        give = (Object.values(arguments))[0]
        total = 'Suffix has been given'
        given = true
    }else{
        total = (Object.values(arguments))[0] + give
        given = false
    }
    console.log(total)
}
add_suffix('ly')
add_suffix('hopeless') //hopelessly
add_suffix('less')
add_suffix('fear') //fearless
//lvl 82
let arr = []
let mul = 1
function arrayOfMultiples(a, b){
    arr = []
    mul = 1
    while(arr.length != b){
        arr[arr.length] = a*mul
        mul++
    }
    return arr
}
console.log(arrayOfMultiples(7, 5)) //[7, 14, 21, 28, 35]
//lvl 83
let k = []
let v = []
function keysAndValues(a){
    arr = []
    k = Object.keys(a)
    v = Object.values(a)
    k = k.sort()
    v = v.sort()
    arr[0] = k
    arr[1] = v
    return arr
}
console.log(keysAndValues({me: true, you: false})) //[[me, you], [false, true]]
//lvl 84
function intWithinBounds(a, b, c){
    b = b
    return (((a+c)%1 == 0) && a!=c)
}
console.log(intWithinBounds(3, 1, 9)) //true
console.log(intWithinBounds(6, 1, 6)) //false
console.log(intWithinBounds(4.5, 3, 8)) //false
//lvl 85
function count(num){
    return String(Math.abs(num)).length
}
console.log(count(254)) //3
console.log(count(-29312)) //5
//Тесты
// 1) 
//выведите в консоли каждый элемент из строки ниже с помощью for
let str1 = 'My name is Samuil';
arr = str1.split(' ')
for(let i of arr){
    console.log(i)
}

// 2)
//выведите в консоли каждый элемент из массива ниже с помощью for
let arr2 = [1, 2, 3, 4, 5];
for(let i of arr2){
    console.log(i)
}

// 3)
//создайте набор с помощью new Set()
let people = new Set(['John', 'Sara', 'Key'])

// 4)
//добавьте в созданный ранее набор, элементы 'a', 'b', 'c' с помощью add()
people.add('a')
people.add('b')
people.add('c')

// 5)
//выведите в консоли слово 'Element' для каждого элемента из массива с помощью forEach()
let arr5 = [1, 2, 3, 4, 5];
arr5.forEach(() => {
    console.log('Element')
})

// 6)
//выведите все значения из набора
let fruits6 = new Set(['apple', 'banana', 'mango']);
console.log(fruits6.values())

// 7)
//выведите все ключи из набора
let fruits7 = new Set(['apple', 'banana', 'mango']);
console.log(fruits7.keys())

// 8)
//выведите все ключи из набора
let fruits8 = new Set(['apple', 'banana', 'mango']);
console.log(fruits8.keys())

// 9)
//создайте обьект с помощью new Map()
let world = new Map([['Eurasia', 'Azerbaijan'], ['Africa', 'Nigeria']])

// 10)
//добавьте в созданный ранее обьект, с помощью set()
let apple = 500;
let banana = 300;
let orange = 100;
world.set(['apple', 500])
world.set(['banana', 300])
world.set(['orange', 100])

// 11)
//выведите в консоли значение apple с помощью get() из обьекта ниже
let fruits11 = new Map([['apple', 5], ['banana', 10], ['mango', 30]]);
console.log(fruits11.get('apple'))

// 12)
//выведите в консоли количество элементов в мапе ниже
let fruits12 = new Map([['apple', 5], ['banana', 10], ['mango', 30]]);
console.log(fruits12.size)
// 13)
//удалите элемент 'apple' из мапа ниже
let fruits13 = new Map([['apple', 5], ['banana', 10], ['mango', 30]]);
fruits13.delete('apple')

// 14)
//очистите мап ниже
let fruits14 = new Map([['apple', 5], ['banana', 10], ['mango', 30]]);
fruits14.clear()

// 15)
//проверьте находится ли 'apple' в мапе ниже
let fruits15 = new Map([['apple', 5], ['banana', 10], ['mango', 30]]);
console.log(fruits15.has('apple'))

// 16)
//выведите все значения из обьекта ниже
let fruits16 = new Set(['apple', 'banana', 'mango']);
console.log(fruits16.values())

// 17)
//выведите все ключи из обьекта ниже
let fruits17 = new Set(['apple', 'banana', 'mango']);
console.log(fruits17.keys())

// 18)
//выведите все ключи/значения из обьекта ниже
let fruits18 = new Set(['apple', 'banana', 'mango']);
console.log(fruits18.entries())