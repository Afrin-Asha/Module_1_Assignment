//1) Topic: Online Store Discount Calculator (If-Else Statement)

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
 
