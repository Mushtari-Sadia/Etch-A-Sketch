function createSquareGrid(s)
{
    let e = document.getElementById("sketchBox");
    for(let i = 0 ; i < s ; i++)
    {
        let row = document.createElement("div");
        row.classList.add("row");
        for(let j = 0 ; j < s ; j++)
        {
            let column = document.createElement("div");
            column.classList.add("cell");
            row.appendChild(column);
            //column.innerHTML = i.toString() + j.toString();
            column.style.width = (screen.width)/s + "px";
            column.style.height = (screen.height)/s + "px";
            console.log("added ",i," and",j,"th cell");
            //column.onclick = myHoverFunction(column);
            //column.onmouseout = myHoverOutFunction(this);
        }
        e.appendChild(row);
    }
    attachHover();
}

function attachHover() {
    let cells = document.getElementsByClassName("cell");
    let length = cells.length;
    for(let i = 0 ; i < length ; i++)
    {
        cells[i].addEventListener("mouseover",myHoverFunction);
        cells[i].addEventListener("click",myClickFunction);
        cells[i].addEventListener("contextmenu",myRightClickFunction);
    }
}


let resetBtn = document.getElementById("reset");
let colorBtn = document.getElementById("colorBtn");
resetBtn.addEventListener("click",resetFunction);
colorBtn.addEventListener("click",colorFunction);
let size = prompt("what size do you want your grid to be?");
createSquareGrid(size);
let clicked = false;
let colorClicked = false;
let x=100,y=0,z=0;

function myHoverFunction(e) {
    if(clicked){
            e.target.classList.add("hover");
            if(colorClicked)
            {
                e.target.style.backgroundColor = "rgb(" + x + "," + y + "," + z + ")";
                
                x=(x-100)%255;
                y=(y+100)%255;
                z=(z+100)%255;
            }
            else {
                e.target.style.backgroundColor = "black";
            }
            e.target.classList.remove("cell");
    }
}

function myClickFunction(e) {
    if(clicked)
        clicked = false;
    else
        clicked = true;
}

function myRightClickFunction(e){
    e.preventDefault();
    if(e.target.classList.contains("hover")){
        e.target.classList.add("cell");
        e.target.classList.remove("hover");
    }
    return false;
}

function resetFunction(e) {
    document.querySelectorAll('.hover').forEach(e => e.remove());
    document.querySelectorAll('.cell').forEach(e => e.remove());
    let x = document.getElementById("sketchBox");
    x.innerHTML = "";
    
    clicked = false;
    colorClicked = false;
    size = prompt("what size do you want your grid to be?");
    createSquareGrid(size);

}

function colorFunction(e) {
    colorClicked = true;
}