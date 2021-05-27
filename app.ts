//1) написать интерфейс Animal который описывает:
// -тип движения животного(плавает, ходит, бегает) типа стринг
// -что говорит тип стринг (Рыбы не разговаривают)
// и функцию которая возвращает информацию о животном
// создать три класса Cat, Bird, Fish и имплементировать для каждого интерфейс Anima

enum EMove{
    RUN='run',
    FLY='fly',
    SWIM='swim'
}

interface IAnimal{
    move: EMove,
    speak: string,
    inform: Function
}

class Cat implements IAnimal{
    move: EMove.RUN
    speak: string
    inform: Function
    name: string
    age: number
    constructor(move: EMove.RUN, speak: string, inform: Function, name: string, age: number) {
        this.move = move
        this.speak = speak
        this.inform = inform
        this.name = name
        this.age = age
    }
}
class Bird implements IAnimal{
    move: EMove.FLY
    speak: string
    inform: Function
    name: string
    age: number
    constructor(move: EMove.FLY, speak: string, inform: Function, name: string, age: number) {
        this.move = move
        this.speak = speak
        this.inform = inform
        this.name = name
        this.age = age
    }
}
class Fish implements IAnimal{
    move: EMove.SWIM
    speak: string
    inform: Function
    name: string
    age: number
    constructor(move: EMove.SWIM, speak: string, inform: Function, name: string, age: number) {
        this.move = move
        this.speak = speak
        this.inform = inform
        this.name = name
        this.age = age
    }
}
const Android = new Cat(EMove.RUN, 'miu',  function infa(){
    console.log(this.name, this.age + ' years');
}, 'Android', 6)
Android.inform()
//2) создать абстрактный класс Shape:
// добавить абстрактные методы perimeter() и area()
//
// создать два класса Triangle и Rectangle и унаследовать их от Shape
// переопределить для каждого класса методы под ваши фигуры
//
// кладем в массив экземпляры классов(количество может быть любым но мин 2)
// приходимся циклом по нему и и высчитываем площадь для каждой фигуры

abstract class AShape{
    perimetr(arr=[]):void{
        let p:number = 0
        for (let i = 0; i < arr.length;i++)
        {
            p += arr[i]
        }
        console.log(p);
    }
    area( arr = []):void{
        if(arr.length === 3) {
            let area: number = 1
            let p: number = 0
            for (let i = 0; i < arr.length; i++) {
                p += arr[i]
            }
            p /= 2
            for (let i = 0; i < arr.length; i++) {
                if(area >= 0) {
                    area *= p - arr[i]
                }
                else {
                    console.log('Triangle is not exist');
                }
            }
            area = area * p
            area = Math.sqrt(area)
            console.log(area);
        }
        else if(arr.length === 4){
            let area = arr[0] * arr[1]
            console.log(area);
        }
    }
}
class Triangle extends AShape{
    a: number
    b:number
    c:number
    constructor(a:number, b:number, c:number) {
        super();
        this.a = a
        this.b = b
        this.c = c
    }
    perimetr(arr: any[] = []) {
        super.perimetr([this.a, this.b, this.c]);
    }
    area(arr: any[] = []){
        super.area([this.a, this.b, this.c]);
    }
}
class Rectangle extends AShape{
    a: number
    b: number
    c: number
    d: number
    constructor(a: number, b: number, c: number, d: number) {
        super();
        this.a = a
        this.b = b
        this.c = c
        this.d = d
    }
    perimetr(arr: any[] = []) {
        super.perimetr([this.a, this.b, this.c, this.d]);
    }
    area(arr: any[] = []) {
        super.area([this.a, this.b, this.c, this.d]);
    }
}
const example1 = new Rectangle(4,5,4,5)
const example2 = new Triangle(6, 3, 5)
const example3 = new Rectangle(3, 6, 3, 6)
const example4 = new Triangle(8,7,5)
const examples = [example1,example2,example3,example4]
examples.map(value => value.area())