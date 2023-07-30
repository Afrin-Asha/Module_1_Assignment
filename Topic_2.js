let givenArray = prompt("Enter array values separated by commas: ");
let array = givenArray.split(",");
evenArray = array.filter(function(element){
    return element % 2 == 0;
});
document.write("Original Array: "+array+"<br>Filtered Even Numbers: "+evenArray);