import { readFileSync } from 'fs';

// ✅ read file SYNCHRONOUSLY
function syncReadFiles(letter) {
	switch (letter) {
		case 'ą':
			letter = 'a';
			break;
		case 'ć':
			letter = 'c';
			break;
		case 'ę':
			letter = 'e';
			break;
		case 'ł':
			letter = 'l';
			break;
		case 'ń':
			letter = 'n';
			break;
		case 'ó':
			letter = 'o';
			break;
		case 'ś':
			letter = 's';
			break;
		case 'ź':
			letter = 'z';
			break;
		case 'ż':
			letter = 'z';
			break;
		default:
			break;
	}
	const contents = readFileSync(`./slowa/${letter}.txt`, 'utf-8');

	const arr = contents.split('\n');

	// console.log(arr); // 👉️ ['One', 'Two', 'Three', 'Four']

	return arr;
}
// export function syncReadFiles() ;
var arrayOfWords = [];
function selectWordsWithNumberLetters(number, letter) {
	var numberOfLetters = Number(number);

	const wordsArray = syncReadFiles(letter);
	for (let i = 0; i < wordsArray.length; i++) {
		var word = wordsArray[i];
		var length = word.length;
		if (length == numberOfLetters) {
			arrayOfWords.push(word);
		}
	}
}
// selectWordsWithNumberLetters(8, 'a');
function getAllWordsWithNumberOfLetters(number, letter) {
	var letters = letter.split(',');
	for (let i = 0; i < letters.length; i++) {
		selectWordsWithNumberLetters(number, letters[i]);
	}
}
// console.log(arrayOfWords);
function selectOnlyWordsWithGivenLetters(number, letter) {
	//TODO ERROR WHEN REPEATING LETTERS

	var selectedWords = [];
	var ourLetters = letter.split(',');
	getAllWordsWithNumberOfLetters(number, letter);
	//split word from gotten array, check if letter is from given letters, if no break, else continue
	//get word from array
	for (let i = 0; i < arrayOfWords.length; i++) {
		var word = arrayOfWords[i];
		//get letter of word
		var bool = [];
		for (let n = 0; n < word.length; n++) {
			var letterOfWord = word.charAt(n);
			//get given letter
			for (let x = 0; x < ourLetters.length; x++) {
				var givenLetter = ourLetters[x];
				if (letterOfWord == givenLetter) {
					bool.push('true');
				}
			}
		}
		if (bool.length == word.length) {
			selectedWords.push(word);
		}
	}
	// console.log(selectedWords);
	return selectedWords;
}

// selectOnlyWordsWithGivenLetters(5, 'o,g,n,i,r,e');

function selectWordsStartingOnLetter(number, letter, starting) {
	var selectedWords = selectOnlyWordsWithGivenLetters(number, letter);
	const output1 = [];
	if (starting != undefined) {
		for (let i = 0; i < selectedWords.length; i++) {
			if (selectedWords[i].charAt(0) == starting) {
				output1.push(selectedWords[i]);
			}
		}
		// console.log(output1);
		return output1;
	} else {
		// console.log(selectedWords);
		return selectedWords;
	}
}

function deleteRepetedLetters(number, letter, starting, ifRepeted) {
	var ourWords = selectWordsStartingOnLetter(number, letter, starting);
	if (ifRepeted == false) {
		var ourLetters = letter.split(',');
		// var numberOfOurLetters = [...new Set(ourLetters)]; // Have to work out why and how this works
		const output1 = [];
		// var numberOfNewLetters = numberOfOurLetters.length - number;
		for (let i = 0; i < ourWords.length; i++) {
			var numberOfLettersInWord = [...new Set(ourWords[i])];
			if (
				// numberOfOurLetters.length - numberOfNewLetters ==
				// numberOfLettersInWord.length
				numberOfLettersInWord.length == ourWords[i].length
			) {
				output1.push(ourWords[i]);
			}
		}
		// console.log(output1);
		return output1;
	} else {
		// console.log(ourWords);
		return ourWords;
	}
}

function returnWords(number, letter, firstLetter, ifRepeted) {
	const selectedWords = [];
	const ourOutput = [];
	if (number == undefined) {
		for (let i = 3; i < 9; i++) {
			ourOutput.push(
				deleteRepetedLetters(i, letter, firstLetter, ifRepeted)
			);
			arrayOfWords = [];
		}
	} else {
		for (let i = 0; i < number.length; i++) {
			ourOutput.push(
				deleteRepetedLetters(number[i], letter, firstLetter, ifRepeted)
			);
			arrayOfWords = [];
		}
	}
	for (let i = 0; i < ourOutput.length; i++) {
		for (let n = 0; n < ourOutput[i].length; n++) {
			selectedWords.push(ourOutput[i][n]);
		}
	}
	// console.log(selectedWords);
	return selectedWords;
}

function selectWordsWithLettersOnSelectedPlaces(
	number,
	letter,
	firstLetter,
	arrayOfNumbersAndLetters
) {
	var letters = [...new Set(letter)].toString(',');
	var ourWords = returnWords(
		number,
		letters,
		firstLetter,
		checkForRepeated(letter)
	);
	var outputWords = [];
	if (arrayOfNumbersAndLetters != undefined) {
		for (let i = 0; i < ourWords.length; i++) {
			var word = ourWords[i];
			var letter = arrayOfNumbersAndLetters[0];
			var place = arrayOfNumbersAndLetters[1];
			if (word.charAt(place) == letter) {
				outputWords.push(word);
			}
		}
		console.log(outputWords);
	} else {
		console.log(ourWords);
	}
}

function checkForRepeated(letter) {
	if ([...new Set(letter)].length == letter.length) {
		return false;
	} else {
		return true;
	}
}

// all([5, 6, 7, 8], 'o,g,n,i,r,e', undefined, false);

// all(ilość liter w słowie, literki(puste wypluwa od 3 do 8), pierwsza litera, litery i miejsca na których mają być)

// var numbers = undefined;
// var letters = 'rantus';
// var firstLetter = 't';
// var arrayOfNumbersAndLetters = undefined;

// selectWordsWithLettersOnSelectedPlaces(
// 	numbers,
// 	letters,
// 	firstLetter,
// 	arrayOfNumbersAndLetters
// );

// TODO possibility to select last letter in word, at any length

export default selectWordsWithLettersOnSelectedPlaces;
