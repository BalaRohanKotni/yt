// getting elements from html to change them
var inputFeild = document.getElementById("input");
var removeIcon = document.getElementById("clear");
var luckyBtn = document.getElementById("lucky");

// adding hidden property for removeicon
removeIcon.classList.add("hidden");

var searchString = "";

// respond to user when typed in inputFeild
inputFeild.addEventListener("input", function(e){
    searchString += e.data;

    if (searchString && searchString != ""){

        // removing the hidden property from clear icon when user types in the input feild
        removeIcon.classList.remove("hidden");
        
        // responding to user when clicked on the button(removeIcon)
        removeIcon.addEventListener("click", function(){

            // resetting the value of inputFeild
            inputFeild.value = "";

            // adding hidden property to removeIcon
            removeIcon.classList.add("hidden");
        });
    }
});

// when user clicks on luckyBtn the page redirects to https://www.google.com/doodles
luckyBtn.addEventListener("click", function(){
    // redirect to the link
    window.location.href = "https://www.google.com/doodles";
});