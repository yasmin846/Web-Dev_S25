import math
import os
import random
import re
import sys

if __name__ == '__main__':
    n, m = map(int, input().split())
    arr = [list(map(int, input().split())) for _ in range(n)]
    k = int(input())
    arr.sort(key=lambda x: x[k])
    for row in arr:
        print(*row)