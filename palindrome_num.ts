function isPalindrome(x: number): boolean {
  // Raw solution:
  // if (x < 0 || (x != 0 && x % 10 === 0)) return false;

  // let reversed_num = 0;

  // while (x > reversed_num) {
  //   reversed_num = reversed_num * 10 + (x % 10);
  //   x = Math.floor(x / 10);
  // }

  // return x === reversed_num || x === Math.floor(reversed_num / 10);

  // Embedded functions solution:
  const reversed = `${x}`.split("").reverse().join("");

  return `${x}` === reversed;
}

if (require.main === module) {
  const num = process.argv[2];
  const result = isPalindrome(Number(num));
  console.log(result);
}
