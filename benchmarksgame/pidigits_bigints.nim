# Translation of http://benchmarksgame.alioth.debian.org/u32/program.php?test=pidigits&lang=go&id=4

import os, strutils, bigints

var
  tmp1, tmp2, tmp3, acc, k = initBigInt(0)
  den, num, k2 = initBigInt(1)

proc extractDigit(): int32 =
  if num > acc:
    return -1

  tmp3 = num shl 1
  tmp3 += num
  tmp3 += acc
  tmp2 = tmp3 mod den
  tmp1 = tmp3 div den
  tmp2 += num

  if tmp2 >= den:
    return -1

  result = int32(tmp1.limbs[0])

proc eliminateDigit(d: int32) =
  acc -= den * d
  acc *= 10
  num *= 10

proc nextTerm() =
  k += 1
  k2 += 2
  tmp1 = num shl 1
  acc += tmp1
  acc *= k2
  den *= k2
  num *= k

let n = parseInt(paramStr(1))
var i = 0

while i < n:
  var d: int32 = -1
  while d < 0:
    nextTerm()
    d = extractDigit()

  stdout.write(chr(ord('0') + d))
  inc(i)
  if i mod 10 == 0:
    echo "\t:", i
  if i >= n:
    break
  eliminateDigit(d)
