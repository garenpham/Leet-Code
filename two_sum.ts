function twoSum(nums: number[], target: number): number[] | undefined {
  const numsMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];

    if (numsMap.has(diff)) return [numsMap.get(diff), i];

    numsMap.set(nums[i], i);
  }
}

if (require.main === module) {
  const nums = process.argv[2].split(",").map(Number);
  const target = Number(process.argv[3]);
  const result = twoSum(nums, target);
  console.log(result);
}
