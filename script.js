//your code here

let bandNames = ['The Allman Brothers Band', 'Amadou and Mariam', 'The Andrews Sisters', 'Red Hot Chili Peppers', 'The Beach Boys', 'The Rolling Stones'];

function removeArticle(bandName){
	let articles = ['a','an','the'];

	let words = bandName.split(" ");

	if(articles.includes(words[0].toLowerCase())){
		words.shift();
	}
	return words.join(" ");
}


bandNames.sort(function(a, b) {
	// console.log(a,b)
  return removeArticle(a).localeCompare(removeArticle(b));
});

let ulElement = document.getElementById("bands");

for (let i = 0; i < bandNames.length; i++) {
  let liElement = document.createElement("li");
  liElement.textContent = bandNames[i];
  ulElement.appendChild(liElement);
}