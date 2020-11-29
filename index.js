var input  = document.querySelector("input");
document.querySelector("button").addEventListener("click",function(){
    var number = input.value;
    console.log(number)
    var plusPosition = 1;
  
    if (number>=0) {
        for (let i = 1; i <= number; i++) {
            plusPosition*=10;
            if (number<plusPosition) {
                input.value = i + "  digits in a number";
                console.log(i)
                break;
                
            }
            
        }
        
    }
})