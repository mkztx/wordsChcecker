var numbers = [5];
var letters = 'rantus';
var firstLetter = 't';
var arrayOfNumbersAndLetters = undefined;

import selectWordsWithLettersOnSelectedPlaces from './index.mjs';
import wordsSpelled from './wordSpeller.mjs';

wordsSpelled('kozak');

selectWordsWithLettersOnSelectedPlaces(
	numbers,
	letters,
	firstLetter,
	arrayOfNumbersAndLetters
);
