let btn = document.getElementById('btn');

const getColor = () => {
    // Hex Code
    const ramdomNum = Math.floor(Math.random()*1677215);
    const ramdomCode = "#" + ramdomNum.toString(16);
    document.body.style.backgroundColor = ramdomCode;
}

// event Call
btn.addEventListener('click', getColor);

// init Call
getColor();