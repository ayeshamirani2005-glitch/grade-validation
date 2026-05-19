let row=5;
for(let i=1; i<=row; i++){
     let pattern=" ";
     for(let j=1; j<=row-i;j++){
          pattern+= " ";
     }
     for(let k=1; k<=i; k++){
          pattern += k + " ";
     }
     console.log(pattern);
}

