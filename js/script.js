//Question 1:
//Answer..
const cat = {
	//complain's value should be a method (a function) which logs the string "Meow!".
	complain: function () {
		console.log("Meow!");
	},
};
cat.complain();

/***********************************************************/

//Question 2:
//Answer..
const heading = document.querySelector("h3");
heading.innerHTML = "Updated heading";

/***********************************************************/

//Question 3:
//Answer..
//Use the style property on the heading variable from the question above to change its font size to "2em".
heading.style.fontSize = "2em";

/***********************************************************/

//Question 4:
//Answer..
//Add a class to the heading variable called subheading.
heading.className = "subheading";
// console.dir(heading.className);

//Or..
heading.classList.add("subheading");

/***********************************************************/

//Question 5:
//Answer..

const paragraphs = document.querySelectorAll("p");
// Loop through the p elements and change the colour of each to "red".
for (let i = 0; i < paragraphs.length; i++) {
	paragraphs[i].style.color = "red";
}

/***********************************************************/

//Question 6:
//Answer..
const resultsContainer = document.querySelector(".results");
// set its inner HTML to be <p>New paragraph</p>
resultsContainer.innerHTML = `<div class="results"><p>New paragraph</p></div>`;
// its background colour to be yellow.
resultsContainer.style.backgroundColor = "yellow";

/***********************************************************/

//Question 7:

const cats = [
	{
		name: "Blob",
		age: 10,
	},
	{
		name: "Harold",
	},
	{
		name: "Blurt",
		age: 21,
	},
];

//Answer..

function catLists(list) {
	for (let i = 0; i < list.length; i++) {
		//console log the name property in each object.
		console.log(list[i].name);
	}
}
//Call the function and pass in the cats variable
catLists(cats);

/***********************************************************/

//Question 8:
//Answer..

function createCats(cats) {
	let html = "";
	for (let i = 0; i < cats.length; i++) {
		//f the age property is missing, it should display “Age unknown” instead.
		let catsAge = "Age unknown";
		if (cats[i].age) {
			catsAge = cats[i].age;
		}
		//Wrap each item in a div, each name property in an h5 tag and each age property in a p tag.
		html += `<div> 
		<h5>${cats[i].name}</h5>
		<p>${catsAge}</p>
		</div>`;
	}
	return html;
}

//Call the function and pass in the cats array as the argument.
const newHtml = createCats(cats);

//Assign the return value of the function to the innerHTML property of the element on the HTML page with a class of cat-container.
const catContainer = document.querySelector(".cat-container");
catContainer.innerHTML = newHtml;

/***********************************************************/
