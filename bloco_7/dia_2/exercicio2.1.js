const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
};

const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
};

const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
};



//EXERCICIO-1
const addTurno = (object, key, value) => {
    lesson2.turno = 'Manhã'
}
addTurno(lesson2, 'turno', 'manhã');
console.log(lesson2);


//EXERCICIO-2
const listKey = (object) => {
    Object.keys(object);
}
console.log(listKey(lesson1));


//EXERCICIO-3
const tamanhoObj = (object) => Object.keys(object).length;
console.log(tamanhoObj(lesson1));


//EXERCICIO-4
const Listvalues = (object) => Object.values(object);
console.log(Listvalues(lesson1));

//EXERCICIO-5
const general = Object.assign({}, {
    lesson1,
    lesson2,
    lesson3
});
console.log(general);


//EXERCICIO-6
const getNumberOfStudents = (obj) => {
    let total = 0;
    const array = Object.keys(obj);
    for (i in array) {
        total += obj[array[i]].numeroAlunos;
    }
    return total;
};
console.log(getNumberOfStudents(general));


//EXERCICIO-7
const getValueByNumber = (obj, number) => Object.values(obj)[number];
console.log(getValueByNumber);


//EXERCICIO-8
const verifyPair = (obj, key, value) => {
    const arr = Object.entries(obj);
    let isEqual = false;
    for (let i in arr) {
        if (arr[i][0] === key && arr[i][1] === value) isEqual = true;
    }
    return isEqual;
};
console.log(verifyPair(lesson2, 'professor', 'Carlos'));