//File woth showcase of working functions

import selectWordsWithLettersOnSelectedPlaces from './index.mjs';
import wordsSpelled from './wordSpeller.mjs';

//Parameters for our words finder
var numbers = [6];
var letters = 'rantus';
var firstLetter = 't';
var arrayOfNumbersAndLetters = undefined;

//word to get its parameters
var word = 'brzeszczot';
//Function used to get number of letters, letters and first letter of word
wordsSpelled(word);

//Function used to get every words with given parameters
console.log('\nArray with words matching given parameters:');
selectWordsWithLettersOnSelectedPlaces(
	numbers,
	letters,
	firstLetter,
	arrayOfNumbersAndLetters
);
