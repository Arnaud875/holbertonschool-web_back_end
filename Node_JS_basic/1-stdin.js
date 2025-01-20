console.log('Welcome to Holberton School, what is your name?');

if (process.stdin.isTTY) {
  process.stdin.on('data', (payload) => {
    console.log(`Your name is: ${payload.toString().trim()}`);
    process.exit();
  });
} else {
  process.stdin.on('data', (payload) => {
    console.log(`Your name is: ${payload.toString().trim()}`);
  });

  process.stdin.on('end', () => {
    console.log('This important software is now closing');
  });
}
