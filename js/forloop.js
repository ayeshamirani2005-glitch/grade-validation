for (let k = 1; k < 6; k++) {
        if (k <= i) {
            row += k + " ";
        }
    }
for (let i = 1; i <= 5; i++) {
    let row = "";

    for (let j = 1; j < 6; j++) {
        if (j <= i) {
            row += j + " ";
        }
    }

    console.log(row);
}

//  for (let a = 1; a <= 5; a++) {
//     let row = "";

//    for (let b = 5; b < 6; b--) {
//         if (b <= a) {
//            row +=  b +" ";
//         }
//      }

//      console.log(row);
//  }
