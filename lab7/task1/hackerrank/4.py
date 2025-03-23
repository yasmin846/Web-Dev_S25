import os
import sys
from datetime import datetime

def time_delta(t1, t2):
    format_str = "%a %d %b %Y %H:%M:%S %z"
    dt1 = datetime.strptime(t1, format_str)
    dt2 = datetime.strptime(t2, format_str)
    return str(abs(int((dt1 - dt2).total_seconds())))

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    t = int(input())

    for _ in range(t):
        t1 = input().strip()
        t2 = input().strip()

        delta = time_delta(t1, t2)

        fptr.write(delta + '\n')

    fptr.close()