document.querySelector("form").addEventListener("submit", check);


function check(e){
    e.preventDefault();
    let response = grecaptcha.getResponse();

    if(response.length == 0){
        alert("Bots, stay away!");
    }
    else{
        alert("You're verified!");
    };
}
