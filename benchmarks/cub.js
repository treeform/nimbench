/* Generated by the Nim Compiler v1.1.1 */
var framePtr = null;
var excHandler = 0;
var lastJSError = null;
if (typeof Int8Array === 'undefined') Int8Array = Array;
if (typeof Int16Array === 'undefined') Int16Array = Array;
if (typeof Int32Array === 'undefined') Int32Array = Array;
if (typeof Uint8Array === 'undefined') Uint8Array = Array;
if (typeof Uint16Array === 'undefined') Uint16Array = Array;
if (typeof Uint32Array === 'undefined') Uint32Array = Array;
if (typeof Float32Array === 'undefined') Float32Array = Array;
if (typeof Float64Array === 'undefined') Float64Array = Array;
var NTI222176 = {size: 0, kind: 18, base: null, node: null, finalizer: null};
var NTI46012 = {size: 0,kind: 34,base: null,node: null,finalizer: null};
var NTI222016 = {size: 0, kind: 18, base: null, node: null, finalizer: null};
var NTI222015 = {size: 0,kind: 22,base: null,node: null,finalizer: null};
var NTI222113 = {size: 0, kind: 18, base: null, node: null, finalizer: null};
var NNI222016 = {kind: 2, len: 4, offset: 0, typ: null, name: null, sons: [{kind: 1, offset: "x", len: 0, typ: NTI46012, name: "x", sons: null}, 
{kind: 1, offset: "y", len: 0, typ: NTI46012, name: "y", sons: null}, 
{kind: 1, offset: "left", len: 0, typ: NTI222015, name: "left", sons: null}, 
{kind: 1, offset: "right", len: 0, typ: NTI222015, name: "right", sons: null}]};
NTI222016.node = NNI222016;
NTI222015.base = NTI222016;
var NNI222113 = {kind: 2, len: 2, offset: 0, typ: null, name: null, sons: [{kind: 1, offset: "Field0", len: 0, typ: NTI222015, name: "Field0", sons: null}, 
{kind: 1, offset: "Field1", len: 0, typ: NTI222015, name: "Field1", sons: null}]};
NTI222113.node = NNI222113;
var NNI222176 = {kind: 2, len: 3, offset: 0, typ: null, name: null, sons: [{kind: 1, offset: "Field0", len: 0, typ: NTI222015, name: "Field0", sons: null}, 
{kind: 1, offset: "Field1", len: 0, typ: NTI222015, name: "Field1", sons: null}, 
{kind: 1, offset: "Field2", len: 0, typ: NTI222015, name: "Field2", sons: null}]};
NTI222176.node = NNI222176;

function setConstr() {
        var result = {};
    for (var i = 0; i < arguments.length; ++i) {
      var x = arguments[i];
      if (typeof(x) == "object") {
        for (var j = x[0]; j <= x[1]; ++j) {
          result[j] = true;
        }
      } else {
        result[x] = true;
      }
    }
    return result;
  

  
}
var ConstSet1 = setConstr(17, 16, 4, 18, 27, 19, 23, 22, 21);

function nimCopy(dest_73827, src_73828, ti_73829) {
  var result_74019 = null;

    switch (ti_73829.kind) {
    case 21:
    case 22:
    case 23:
    case 5:
      if (!(is_fat_pointer_73801(ti_73829))) {
      result_74019 = src_73828;
      }
      else {
        result_74019 = [src_73828[0], src_73828[1]];
      }
      
      break;
    case 19:
            if (dest_73827 === null || dest_73827 === undefined) {
        dest_73827 = {};
      }
      else {
        for (var key in dest_73827) { delete dest_73827[key]; }
      }
      for (var key in src_73828) { dest_73827[key] = src_73828[key]; }
      result_74019 = dest_73827;
    
      break;
    case 18:
    case 17:
      if (!((ti_73829.base == null))) {
      result_74019 = nimCopy(dest_73827, src_73828, ti_73829.base);
      }
      else {
      if ((ti_73829.kind == 17)) {
      result_74019 = (dest_73827 === null || dest_73827 === undefined) ? {m_type: ti_73829} : dest_73827;
      }
      else {
        result_74019 = (dest_73827 === null || dest_73827 === undefined) ? {} : dest_73827;
      }
      }
      nimCopyAux(result_74019, src_73828, ti_73829.node);
      break;
    case 24:
    case 4:
    case 27:
    case 16:
            if (src_73828 === null) {
        result_74019 = null;
      }
      else {
        if (dest_73827 === null || dest_73827 === undefined) {
          dest_73827 = new Array(src_73828.length);
        }
        else {
          dest_73827.length = src_73828.length;
        }
        result_74019 = dest_73827;
        for (var i = 0; i < src_73828.length; ++i) {
          result_74019[i] = nimCopy(result_74019[i], src_73828[i], ti_73829.base);
        }
      }
    
      break;
    case 28:
            if (src_73828 !== null) {
        result_74019 = src_73828.slice(0);
      }
    
      break;
    default: 
      result_74019 = src_73828;
      break;
    }

  return result_74019;

}

function toJSStr(s_72304) {
                    var Tmp5;
            var Tmp7;

  var result_72305 = null;

    var res_72378 = new_seq_72336((s_72304 != null ? s_72304.length : 0));
    var i_72380 = 0;
    var j_72382 = 0;
    L1: do {
        L2: while (true) {
        if (!(i_72380 < (s_72304 != null ? s_72304.length : 0))) break L2;
          var c_72383 = s_72304[i_72380];
          if ((c_72383 < 128)) {
          res_72378[j_72382] = String.fromCharCode(c_72383);
          i_72380 += 1;
          }
          else {
            var helper_72406 = new_seq_72336(0);
            L3: do {
                L4: while (true) {
                if (!true) break L4;
                  var code_72407 = c_72383.toString(16);
                  if (((code_72407 != null ? code_72407.length : 0) == 1)) {
                  if (helper_72406 != null) { helper_72406.push("%0"); } else { helper_72406 = ["%0"]; };
                  }
                  else {
                  if (helper_72406 != null) { helper_72406.push("%"); } else { helper_72406 = ["%"]; };
                  }
                  
                  if (helper_72406 != null) { helper_72406.push(code_72407); } else { helper_72406 = [code_72407]; };
                  i_72380 += 1;
                    if (((s_72304 != null ? s_72304.length : 0) <= i_72380)) Tmp5 = true; else {                      Tmp5 = (s_72304[i_72380] < 128);                    }                  if (Tmp5) {
                  break L3;
                  }
                  
                  c_72383 = s_72304[i_72380];
                }
            } while(false);
++excHandler;
            Tmp7 = framePtr;
            try {
            res_72378[j_72382] = decodeURIComponent(helper_72406.join(""));
--excHandler;
} catch (EXC) {
 var prevJSError = lastJSError;
 lastJSError = EXC;
 --excHandler;
            framePtr = Tmp7;
            res_72378[j_72382] = helper_72406.join("");
            lastJSError = prevJSError;
            } finally {
            framePtr = Tmp7;
            }
          }
          
          j_72382 += 1;
        }
    } while(false);
    if (res_72378 === null) res_72378 = [];
               if (res_72378.length < j_72382) { for (var i=res_72378.length;i<j_72382;++i) res_72378.push(null); }
               else { res_72378.length = j_72382; };
    result_72305 = res_72378.join("");

  return result_72305;

}

function rawEcho() {
          var buf = "";
      for (var i = 0; i < arguments.length; ++i) {
        buf += toJSStr(arguments[i]);
      }
      console.log(buf);
    

  
}

function cstrToNimstr(c_72287) {
      var ln = c_72287.length;
  var result = new Array(ln);
  var r = 0;
  for (var i = 0; i < ln; ++i) {
    var ch = c_72287.charCodeAt(i);

    if (ch < 128) {
      result[r] = ch;
    }
    else {
      if (ch < 2048) {
        result[r] = (ch >> 6) | 192;
      }
      else {
        if (ch < 55296 || ch >= 57344) {
          result[r] = (ch >> 12) | 224;
        }
        else {
            ++i;
            ch = 65536 + (((ch & 1023) << 10) | (c_72287.charCodeAt(i) & 1023));
            result[r] = (ch >> 18) | 240;
            ++r;
            result[r] = ((ch >> 12) & 63) | 128;
        }
        ++r;
        result[r] = ((ch >> 6) & 63) | 128;
      }
      ++r;
      result[r] = (ch & 63) | 128;
    }
    ++r;
  }
  return result;
  

  
}
var nim_program_result = 0;
var global_raise_hook_64018 = [null];
var local_raise_hook_64023 = [null];
var out_of_mem_hook_64026 = [null];
if (!Math.trunc) {
  Math.trunc = function(v) {
    v = +v;
    if (!isFinite(v)) return v;
    return (v - v % 1) || (v < 0 ? -0 : v === 0 ? v : 0);
  };
}

var state_94005 = [{a0: 1773455756, a1: 4275166512}];
var utc_instance_213431 = [null];
var local_instance_213432 = [null];

function is_fat_pointer_73801(ti_73803) {
  var result_73804 = false;

  BeforeRet: do {
    result_73804 = !((ConstSet1[ti_73803.base.kind] != undefined));
    break BeforeRet;
  } while (false);

  return result_73804;

}

function nimCopyAux(dest_73832, src_73833, n_73835) {
    switch (n_73835.kind) {
    case 0:
      break;
    case 1:
            dest_73832[n_73835.offset] = nimCopy(dest_73832[n_73835.offset], src_73833[n_73835.offset], n_73835.typ);
    
      break;
    case 2:
          for (var i = 0; i < n_73835.sons.length; i++) {
      nimCopyAux(dest_73832, src_73833, n_73835.sons[i]);
    }
    
      break;
    case 3:
            dest_73832[n_73835.offset] = nimCopy(dest_73832[n_73835.offset], src_73833[n_73835.offset], n_73835.typ);
      for (var i = 0; i < n_73835.sons.length; ++i) {
        nimCopyAux(dest_73832, src_73833, n_73835.sons[i][1]);
      }
    
      break;
    }

  
}

function split_binary_222109(orig_222111, value_222112) {
  var result_222114 = {Field0: null, Field1: null};

    if ((orig_222111 == null)) {
    var colontmp__222422 = null;
    var colontmp__222423 = null;
    nimCopy(result_222114, {Field0: colontmp__222422, Field1: colontmp__222423}, NTI222113);
    }
    else {
    if ((orig_222111.x < value_222112)) {
    var split_pair_222121 = split_binary_222109(orig_222111.right, value_222112);
    orig_222111.right = split_pair_222121["Field0"];
    var colontmp__222424 = orig_222111;
    var colontmp__222425 = split_pair_222121["Field1"];
    nimCopy(result_222114, {Field0: colontmp__222424, Field1: colontmp__222425}, NTI222113);
    }
    else {
      var split_pair_222123 = split_binary_222109(orig_222111.left, value_222112);
      orig_222111.left = split_pair_222123["Field1"];
      var colontmp__222426 = split_pair_222123["Field0"];
      var colontmp__222427 = orig_222111;
      nimCopy(result_222114, {Field0: colontmp__222426, Field1: colontmp__222427}, NTI222113);
    }
    }

  return result_222114;

}

function split_222172(orig_222174, value_222175) {
  var result_222180 = {Field0: null, Field1: null, Field2: null};

    var colontmp__222421 = split_binary_222109(orig_222174, value_222175);
    var lower_222181 = null;
    var equal_greater_222182 = null;
    lower_222181 = colontmp__222421["Field0"];
    equal_greater_222182 = colontmp__222421["Field1"];
    var colontmp__222428 = split_binary_222109(equal_greater_222182, (value_222175 + 1));
    var equal_222183 = null;
    var greater_222184 = null;
    equal_222183 = colontmp__222428["Field0"];
    greater_222184 = colontmp__222428["Field1"];
    var colontmp__222418 = lower_222181;
    var colontmp__222419 = equal_222183;
    var colontmp__222420 = greater_222184;
    nimCopy(result_222180, {Field0: colontmp__222418, Field1: colontmp__222419, Field2: colontmp__222420}, NTI222176);

  return result_222180;

}

function rotl_94230(x_94232, k_94233) {
  var result_94234 = 0;

    result_94234 = ((x_94232 << k_94233) | ((x_94232 >>> 0) >>> ((64 - k_94233) >>> 0)));

  return result_94234;

}

function next_94258(r_94261) {
  var result_94262 = 0;

    var s0_94263 = r_94261.a0;
    var s1_94264 = r_94261.a1;
    result_94262 = ((s0_94263 + s1_94264) >>> 0);
    s1_94264 = (s1_94264 ^ s0_94263);
    r_94261.a0 = ((rotl_94230(s0_94263, 55) ^ s1_94264) ^ (s1_94264 << 14));
    r_94261.a1 = rotl_94230(s1_94264, 36);

  return result_94262;

}

function rand_94643(r_94646, max_94647) {
  var result_94648 = 0;

  BeforeRet: do {
    if ((max_94647 == 0)) {
    break BeforeRet;
    }
    
    L1: do {
        L2: while (true) {
        if (!true) break L2;
          var x_94649 = next_94258(r_94646);
          if ((x_94649 <= ((4294967295 - (4294967295 % max_94647)) >>> 0))) {
          result_94648 = (x_94649 % ((max_94647 + 1) ));
          break BeforeRet;
          }
          
        }
    } while(false);
  } while (false);

  return result_94648;

}

function rand_94663(max_94665) {
  var result_94666 = 0;

    result_94666 = rand_94643(state_94005[0], max_94665);

  return result_94666;

}

function new_node_222028(x_222030) {
  var result_222031 = null;

    result_222031 = {x: x_222030, y: rand_94663(2147483647), left: null, right: null};

  return result_222031;

}

function merge_222081(lower_222083, greater_222084) {
  var result_222085 = null;

    if ((lower_222083 == null)) {
    result_222085 = greater_222084;
    }
    else {
    if ((greater_222084 == null)) {
    result_222085 = lower_222083;
    }
    else {
    if ((lower_222083.y < greater_222084.y)) {
    lower_222083.right = merge_222081(lower_222083.right, greater_222084);
    result_222085 = lower_222083;
    }
    else {
      greater_222084.left = merge_222081(lower_222083, greater_222084.left);
      result_222085 = greater_222084;
    }
    }}

  return result_222085;

}

function merge3_222153(lower_222155, equal_222156, greater_222157) {
  var result_222158 = null;

    result_222158 = merge_222081(merge_222081(lower_222155, equal_222156), greater_222157);

  return result_222158;

}

function insert_222242(self_222245, x_222246) {
    var splited_222247 = split_222172(self_222245.root, x_222246);
    if ((splited_222247.Field1 == null)) {
    splited_222247.Field1 = new_node_222028(x_222246);
    }
    
    self_222245.root = merge3_222153(splited_222247.Field0, splited_222247.Field1, splited_222247.Field2);

  
}

function erase_222266(self_222269, x_222270) {
    var splited_222271 = split_222172(self_222269.root, x_222270);
    self_222269.root = merge_222081(splited_222271.Field0, splited_222271.Field2);

  
}

function has_value_222217(self_222220, x_222221) {
  var result_222222 = false;

    var splited_222223 = split_222172(self_222220.root, x_222221);
    result_222222 = !((splited_222223.Field1 == null));
    self_222220.root = merge3_222153(splited_222223.Field0, splited_222223.Field1, splited_222223.Field2);

  return result_222222;

}

function new_seq_72336(len_72339) {
  var result_72341 = null;

    result_72341 = new Array(len_72339); for (var i=0;i<len_72339;++i) {result_72341[i]=null;}
  return result_72341;

}

function main_222285() {
    var tree_222287 = [{root: null}];
    var cur_222288 = 5;
    var res_222290 = 0;
    L1: do {
      var i_222300 = 0;
      var i_222416 = 1;
      L2: do {
          L3: while (true) {
          if (!(i_222416 < 1000000)) break L3;
            i_222300 = i_222416;
            var a_222301 = Math.trunc(i_222300 % 3);
            cur_222288 = Math.trunc(((cur_222288 * 57) + 43) % 10007);
            switch (a_222301) {
            case 0:
              insert_222242(tree_222287[0], cur_222288);
              break;
            case 1:
              erase_222266(tree_222287[0], cur_222288);
              break;
            case 2:
              if (has_value_222217(tree_222287[0], cur_222288)) {
              res_222290 += 1;
              }
              
              break;
            default: 
              break;
            }
            i_222416 += 1;
          }
      } while(false);
    } while(false);
    rawEcho(cstrToNimstr((res_222290)+""));

  
}
main_222285();
