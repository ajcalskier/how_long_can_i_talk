function solution(min1, min2_10, min11, s) {

 if (s < min1) return 0

let centsleft = s 
let cost = 0
let minutespaid = 0
 
while (centsleft > 0) {

    if (minutespaid == 0) { cost = min1 }
    if (minutespaid >= 1) { cost = min2_10}
    if (minutespaid >= 10) { cost = min11}
    
    centsleft = centsleft - cost
    if (centsleft >= 0) {
    minutespaid = minutespaid + 1 } 
}

return minutespaid  

}
