class Solution {
  isPalindrome(x: number): boolean {
    const reversed = `${x}`.split("").reverse().join("");

    return `${x}` === reversed;
  }
}

if (require.main === module) {
  const num = process.argv[2];
  const result = new Solution();
  console.log(result.isPalindrome(Number(num)));
}
