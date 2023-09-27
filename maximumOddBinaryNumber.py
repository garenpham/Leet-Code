class Solution:
    def maximumOddBinaryNumber(self, s: str) -> str:
      return '1'*(s.count('1')-1 if s.count('1')!=1 else 0)+'0'*(s.count('0'))+'1'