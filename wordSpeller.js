function liczenieliter(string) {
	console.log(
		`${string.length}, "${[...new Set(string)].join(
			','
		)}", "${string.charAt(0)}"`
	);
}
liczenieliter('brzeszczot');
