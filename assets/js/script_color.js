document.getElementById('div1').addEventListener('click', function() {
    this.style.backgroundColor = this.style.backgroundColor === 'black' ? 'blue' : 'black'
});

document.getElementById('div2').addEventListener('click', function() {
    this.style.backgroundColor = this.style.backgroundColor === 'black' ? 'red' : 'black'
});

document.getElementById('div3').addEventListener('click', function() {
    this.style.backgroundColor = this.style.backgroundColor === 'black' ? 'green' : 'black'
});

document.getElementById('div4').addEventListener('click', function() {
    this.style.backgroundColor = this.style.backgroundColor === 'black' ? 'yellow' : 'black'
});

let color = '';

document.addEventListener('keydown', function(event) {
    switch (event.key) {
        case 'a':
            color = 'pink';
            document.getElementById('key').style.backgroundColor = color;
            break;
        case 's':
            color = 'orange';
            document.getElementById('key').style.backgroundColor = color;
            break;
        case 'd':
            color = 'skyblue';
            document.getElementById('key').style.backgroundColor = color;
            break;
        case 'q':
            createDiv('purple');
            break;
        case 'w':
            createDiv('gray');
            break;
        case 'e':
            createDiv('brown');
            break;
    }
});

function createDiv(color) {
    const newDiv = document.createElement('div');
    newDiv.style.width = '200px';
    newDiv.style.height = '200px';
    newDiv.style.backgroundColor = color;
    newDiv.style.border = '1px solid black';
    newDiv.style.display = 'inline-block';
    document.body.appendChild(newDiv);
}