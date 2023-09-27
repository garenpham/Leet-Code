class Solution:
    def commonFactors(self, a: int, b: int) -> int:
      biggestCommonFactor=min(a,b)
      count=0
      while biggestCommonFactor>0:
        if (a%biggestCommonFactor==0 and b%biggestCommonFactor==0):
          count+=1
        biggestCommonFactor-=1
      return count