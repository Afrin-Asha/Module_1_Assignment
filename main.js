let a = parseFloat (prompt("Enter a number"));
let discountedAmmount=0;
let totalAmount=0;
if (a< 50){
    discountedAmmount = 0;
    totalAmount = (discountedAmmount+a);
    document.write("Discount Ammount: "+discountedAmmount+"<br>Total Amount (with discount ): "+totalAmount);
} else if(a>=50 & a<= 100){
    discountedAmmount = a*0.05;
    totalAmount = (discountedAmmount+a);
    document.write("Discount Ammount: "+discountedAmmount+"<br>Total Amount (with discount ): "+totalAmount);
}else if(a > 100 & a < 200){
    discountedAmmount = a*0.1;
    totalAmount = (discountedAmmount+a);
    document.write("Discount Ammount: "+discountedAmmount+"<br>Total Amount (with discount ): "+totalAmount);
}else if( a >= 200){
    discountedAmmount = a*0.15;
    totalAmount = discountedAmmount+a;
    document.write("Discount Ammount: "+discountedAmmount+"<br>Total Amount (with discount ): "+totalAmount);
}
 
 
 
 
 
 
 
 //  function getLastItem(array){
        //     return array[array.length-1];
        //  }
        // let num = [1, 2, 3, 4, 60];
        // let value = getLastItem(num);
        // document.write(value);
        // function isEmpty(str){
        //     if(str === ''){
        //         return false;
        //     }else{
        //         return true;
        //     }
            
        // }
        // let str ="";
        // document.write(isEmpty(str));

        // function calcAge(age) {
        //     return age *365;
        // }
        // document.write(calcAge(10));
        // function findSmallestNum(num) {
        //     let smallestNum = Math.min(...num);
        //    return smallestNum;
        // }
        // let array =[34, 15, 88, 2];
        // document.write(findSmallestNum(array));

        // function returnNegative(number) {

        // if (number < 0) {
        //     return number;
        // } else {
        //     return -number;
        // }
        // }
        // document.write(returnNegative(10));