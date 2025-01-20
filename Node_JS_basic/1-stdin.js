console.log('Welcome to Holberton School, what is your name?');

process.stdin.on('data', (payload) => {
  console.log(`Your name is: ${payload.toString().replace('\n', '')}`);

  if (!process.stdin.isTTY) console.log('This important software is now closing');

  process.exit(0);
});
