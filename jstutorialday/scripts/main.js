//  //create element
// let div = document.createElement('div');
 
// //add class to element
// div.classList.add('btn');

// document.querySelector('.container').appendChild(div);

// //add and remove classes. changes class of div 
// // inside container to "btn-click" instead of "btn"
// div.classList.add('btn-click');
// div.classList.remove('btn');

// div.innerHTML=
//     '<p>dude whats up</p><p>hello</p>';

// document.querySelector('h1').innerText='this is a header';

// let header=document.querySelector('h1');

// header.style.color="red";
// header.style["padding-top"]="2px";
// header.style = 'font-family: monospace; font-size:50px';

// //manually update it but it will override what's in the JS before...
// // document.querySelector('.btn-click').innerHTML = '<div class="test-outer"><div class = "test-inner">this is not a drill</div></div>'


//creating a function...
function addNumbers(a,b){
    return a+b;
}


//call function using any 2 int parameters and log the result
let result =  addNumbers(5,3);
console.log(result);


// let formText=documnet.getElementById("userInput");
//function that makes elements with differetn text, text types and fonts

function makeElement(textParameter,type,fontType){
    let newElement = document.createElement(type);

    // Add text content to the paragraph, using the "text" parameter as the string
    newElement.innerHTML = textParameter;
    
    // Add a class to the new paragraph
    newElement.classList.add("new-text-element");
    
    // Find the container element by its class
    let container = document.querySelector(".container");
    
    // Append the new paragraph to the container
    container.appendChild(newElement);

    newElement.style["font-family"]=fontType;
    // newElement.style["color"]=colorType;

}

//run make Element with custom text, element, font and color
makeElement("hello","p","Arial");




