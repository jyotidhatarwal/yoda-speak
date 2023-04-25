var btnTranslate = document.querySelector("#btn-translate");
var textInput = document.querySelector("#text-input");
var outputText = document.querySelector("#text-output");

var serverURL = "https://api.funtranslations.com/translate/yoda.json";

function constructURL(text){
    return serverURL + "?" + "text=" + text;
}

function errorHandler(error){
    console.log("Error occured --> "+ error);
    alert("Some error occured, please try after sometime");
}

function clickHandler(){
    var text = textInput.value;
    var url = constructURL(text);
    fetch(url)
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        outputText.innerHTML = translatedText;
    })
    .catch(errorHandler);
}

btnTranslate.addEventListener("click",clickHandler);