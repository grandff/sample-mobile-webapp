

function callNativeCallBack(message) {
    alert(message);
}    

function callSchemaCallBack(message) {
    alert(message);
}

function callFunctionFromNative() {
    if (confirm("아프지마도토도토잠보")) {
        alert("사외디캅");
    }    
}

function returnAppToken(token) {
    const uuidInput = document.querySelector("#uuid");
    uuidInput.value = token;
}