//1
let obj = {
    x1: document.querySelector('.i1_1x'),
    y1: document.querySelector('.i1_1y'),
    x2: document.querySelector('.i1_2x'),
    y2: document.querySelector('.i1_2y')
};

function calc1(obj) {
    document.querySelector('.ans1').innerHTML = `<br><br>Вершины прямоугольника:<br>1 точка - (${obj.x1.value};${obj.y1.value}), 2 точка - (${obj.x2.value};${obj.y1.value}),<br>3 точка - (${obj.x1.value};${obj.y2.value}), 4 точка - (${obj.x2.value};${obj.y2.value})`
}


//2
function calc2 (obj) {
    document.querySelector('.ans2').innerHTML = `<br><br>Ширина прямоугольника: ${obj.x2.value - obj.x1.value}`
}

//3
function calc3(obj) {
    obj.x2.value = +obj.x2.value + +document.querySelector('.i3').value;
    document.querySelector('.ans3').innerHTML = `<br><br>Новая ширина прямоугольника: ${obj.x2.value - obj.x1.value}`
}

//4
function calc4(obj) {
    obj.y1.value = +obj.y1.value + +document.querySelector('.i4').value;
    document.querySelector('.ans4').innerHTML = `<br><br>Новая высота прямоугольника: ${obj.y1.value - obj.y2.value}`
}

//5
function calc5(obj) {
    obj.x1.value = +obj.x1.value + +document.querySelector('.i5').value;
    obj.x2.value = +obj.x2.value + +document.querySelector('.i5').value;
    document.querySelector('.ans5').innerHTML = `<br><br>Вершины прямоугольника:<br>1 точка - (${obj.x1.value};${obj.y1.value}), 2 точка - (${obj.x2.value};${obj.y1.value}),<br>3 точка - (${obj.x1.value};${obj.y2.value}), 4 точка - (${obj.x2.value};${obj.y2.value})`
}

//6
function calc6(obj) {
    if (+document.querySelector('.i6_x').value >= +obj.x1.value && +document.querySelector('.i6_x').value <= +obj.x2.value && +document.querySelector('.i6_y').value <= +obj.y1.value && +document.querySelector('.i6_y').value >= +obj.y2.value) {
        document.querySelector('.ans6').innerHTML = '<br><br>Точка находится внутри прямоугольника'
    }
    else {
        document.querySelector('.ans6').innerHTML = '<br><br>Точка находится снаружи прямоугольника'
    }
}