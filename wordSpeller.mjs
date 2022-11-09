function liczenieliter(string) {
	console.log(
		`SPELLED WORD:\nlength: ${string.length},\nLetters: "${[
			...new Set(string),
		].join(',')}",\nfirst letter: "${string.charAt(0)}"`
	);
}

export default liczenieliter;
