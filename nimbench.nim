import os, osproc, re, strutils, times, strformat

const
  nimPath = "/p/Nim/bin/nim"

proc bench(name, key, compileParams, programParams: string) =
  block:
    let cmd = &"{nimPath} {compileParams} {name}.nim"
    echo "> ", cmd
    var (output, code) = execCmdEx(cmd)
    if code != 0:
      echo output
      echo name, ",", key, ", ", "*COMPILE ERROR*"
      return
  block:
    let start = epochTime()
    var (output, code) = execCmdEx(
      if compileParams.startsWith("js"):
        &"node {name}.js {programParams}"
      else:
        &"{name} {programParams}"
    )
    if code != 0:
      echo output
      echo name, ",", key, ", ", "*CRASH*"
      return
    echo name, ",", key, ", ", epochTime() - start

proc bench(name: string, compileParams = "", programParams = "") =
  for releaseType in @["release", "danger"]:
    for compileType in @["c"]: #"js" "cpp"
      if compileType == "js":
        bench(name, compileType & "," & releaseType & ",,,", &"{compileType} -d:{releaseType}", programParams)
      else:
        for gcType in @["refc", "arc"]:
          for compilerType in @["gcc"]: # "clang", "gcc"
            #var exceptionTypes = @["goto", "setjmp"]
            #if compileType == "cpp":
            #  exceptionTypes.add "cpp"
            #for exceptionType in exceptionTypes:
            # --exceptions:{exceptionType}
            # & exceptionType & ","
            bench(name, compileType & "," & releaseType & "," & gcType & "," & compilerType, &"{compileType} -d:{releaseType} --cc:{compilerType} --gc:{gcType} {compileParams}", programParams)


bench "benchmarks/b64"
# bench "benchmarks/bf"
# bench "benchmarks/cub"
# bench "benchmarks/exceptions"
#bench "benchmarks/gcbench"

# bench "benchmarksgame/binarytrees_2", "--threads:on"
# bench "benchmarksgame/binarytrees_3", "--threads:on"
#bench "benchmarksgame/binarytrees_op"


# bench "benchmarksgame/nbody", "", "50000000"
# bench "benchmarksgame/nbody_2", "", "50000000"
# bench "benchmarksgame/nbody_3", "", "50000000"

# #broken bench "benchmarksgame/pidigits_gmp", "", "10000"
# bench "benchmarksgame/pidigits_bigints", "", "10000"

# bench "benchmarksgame/fastaredux", "", "25000000"

# bench "benchmarksgame/binarytrees", "", "21"
# bench "benchmarksgame/binarytrees_2", "--threads:on", "21"
# bench "benchmarksgame/binarytrees_3", "--threads:on", "21"
# #broken bench "benchmarksgame/binarytrees_op", "", "21"

# bench "benchmarksgame/fannkuch", "--threads:on", "12"
# bench "benchmarksgame/fannkuch0", "", "12"
# bench "benchmarksgame/fannkuch1", "", "12"
# bench "benchmarksgame/fannkuch2", "", "12"
# bench "benchmarksgame/fannkuch3", "", "12"
# bench "benchmarksgame/fannkuch4", "", "12"
# bench "benchmarksgame/fannkuch5", "", "12"
# bench "benchmarksgame/fannkuchST", "", "12"

# bench "benchmarksgame/knucleotide", "--threads:on"
# bench "benchmarksgame/knucleotide2pass", "--threads:on"
# bench "benchmarksgame/knucleotideST"

# bench "benchmarksgame/mandelbrot", "--threads:on"
# bench "benchmarksgame/mandelbrot8", "--threads:on"

# #broken bench "benchmarksgame/perms"
# bench "benchmarksgame/regex"
# bench "benchmarksgame/revcomp"
# bench "benchmarksgame/spectralnorm", "--threads:on"
