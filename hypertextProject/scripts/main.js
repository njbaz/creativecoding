//create a blank array to store clicked paragraph texts
let clickedParagraphs = [];

//create a function that maps the CSV to an array
async function fetchCSV(url) {
  const response = await fetch(url);
  const data = await response.text();
  return data.split('\n').map(item => item.trim()).filter(Boolean);
}

//pull random elements from the array
function getRandomElementsFromArray(array, numElements) {
  const randomElements = [];
  const numElementsInArray = array.length;
  for (let i = 0; i < numElements; i++) {
    const randomIndex = Math.floor(Math.random() * numElementsInArray);
    randomElements.push(array[randomIndex]);
  }
  return randomElements;
}


//create  a random x and y
function getRandomPosition() {
  const x = Math.random() * (window.innerWidth - 400);
  const y = Math.random() * (window.innerHeight - 100);
  return { x, y };
}

//display the randomly selected lines as paragraph text
async function displayRandomParagraphs() {
    //load in my CSV
    const csvURL = 'assets/data/poemdatabase.csv';
    //load it as an array by running fetchCSV function and then store it in variable dataArray
    const dataArray = await fetchCSV(csvURL);
    //create a randomElements array that stores the random elements. second paramenter = how many elements to include
    const randomElements = getRandomElementsFromArray(dataArray, 50);
    //create a variable that gets the output div from the index.html page
    const outputDiv = document.getElementById('output');
    const clickedParagraphs = document.getElementById('clickedParagraphs');
  //create a <p> element for each selected array item
    randomElements.forEach(elementText => {
      const paragraph = document.createElement('p');
      paragraph.textContent = elementText;
      //run randomPosition function to get random x and y position for each element  
      const randomPosition = getRandomPosition();
      paragraph.style.left = `${randomPosition.x}px`;
      paragraph.style.top = `${randomPosition.y}px`;
      //hide the clicked elements so that they disappear when clicked, see function below
      hideParagraphOnClick(paragraph); 
      outputDiv.appendChild(paragraph);
    });
  }

//add list items to the empty div called "clickedParagraphs" as they're clicked
function updateClickedParagraphsDiv() {
  const clickedParagraphsDiv = document.getElementById('clickedParagraphs');
  clickedParagraphsDiv.innerHTML = '<h2>Your Poem</h2><ul>';
  clickedParagraphs.forEach(paragraphText => {
    clickedParagraphsDiv.innerHTML += `<li>${paragraphText}</li>`;
  });

  clickedParagraphsDiv.innerHTML += '</ul>';
}

//function that hides paragraphs on click
function hideParagraphOnClick(paragraph) {
  paragraph.addEventListener('click', () => {
    paragraph.style.display = 'none';
    clickedParagraphs.push(paragraph.textContent);
    updateClickedParagraphsDiv(); 
  });
}


//run displayRandomParagraphs function to show all random array options on the screen
displayRandomParagraphs();

//create a button that allows the viewer to see their combined poem while clearing the unused lines 
//create a variable for the button

//create a function to show the clickedParagaphs div and hide the output div when the button is clicked and hides the button
function showPoem() {
  const clickedParagraphs = document.getElementById('clickedParagraphs');
  clickedParagraphs.style.display = (clickedParagraphs.style.display === 'none' || clickedParagraphs.style.display === '') ? 'block' : 'none';
  const output = document.getElementById('output');
  if (output) {
    output.style.display = 'none';
  const showpoem = document.getElementById('showpoem');
  if (showpoem) {
    showpoem.style.display = 'none';}
}}
