let row = 5;
for (a=1; a<=5; a++){
     let output="";
     for(b=1; b<=row-a; b++)
     {
          output+="  ";
     }
     for(let d=a; d>=1; d--){
          output +=  d + " ";
     }
     for(c=2; c<=a; c++){
          output+= c + " ";
     }

     console.log(output );
}