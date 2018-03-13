process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function() { 
	var input = process.stdin.read();
	if(input !== null) {
		var instruction = input.toString().trim();
		if (instruction === '/exit') {
		process.stdout.write('Quitting app!\n')
		process.exit();	
		} else  {
			process.stderr.write('Niestety ta aplikacja jest tylko do wychodzenia.');
			console.log(`Ale skoro juz ut jestes, to powiem Ci, tez ze korzystasz z wersji Node.js: ${process.version}`);
			console.log('A Twoj jezyk systemowy to: ' + process.env.LANG);
		} 
	}
});
