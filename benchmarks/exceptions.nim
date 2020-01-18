import strutils

proc fib(m: string): int =
  let n = parseInt(m)
  if n < 0:
    raise newException(ValueError, "out of range")
  elif n <= 1:
    1
  else:
    fib($(n-1)) + fib($(n-2))

import std / [times, monotimes, stats]

when defined(cpp):
  echo "C++"
elif compileOption("exceptions", "setjmp"):
  echo "setjmp"
elif compileOption("exceptions", "goto"):
  echo "goto"

var r: RunningStat
for iterations in 1..5:
  let start = getMonoTime()
  
  for i in 0 ..< 100:
    discard fib("24") # 1 1 2 3 5 8 13
  
  r.push float((getMonoTime() - start).inMilliseconds)

echo r