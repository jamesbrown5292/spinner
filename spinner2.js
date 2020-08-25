let delay = 100;
let loader = "|/-\\|/-\\|/-\\|/-\\|\r\n";
for (let char of loader) {
  setTimeout(() => {
    process.stdout.write('\r' + char);
  }, delay);
  delay += 100;
  console.log('\n');
}
