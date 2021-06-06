const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export function validationCheck(fields) {
    let emailIsValid = emailRegex.test(fields.email);
    let textIsValid = !!fields.text;
    let nameIsValid = !!fields.username;

    let errorMessage = "";
    if(!emailIsValid) errorMessage += "Email is invalid.";
    if(!textIsValid) errorMessage += "\r\nText is invalid.";
    if(!nameIsValid) errorMessage += "\r\nName is invalid";

    return {
        isValid: emailIsValid && textIsValid && nameIsValid,
        message: errorMessage
    };
}
export function trimToFixedLength(text, length) {
    text = text.toString();
    
    if(text.length <= length) return text;

    let trimmed = text.slice(0, length - 1 - 3);

    return trimmed + "...";
}

export function codeToText(code, isLoggedIn) {
    const valuesLoggedIn = new Map([
        ['0', "not done"],
        ['1', "not done, admin-edited"],
        ['10', "done"],
        ['11', "done, admin-edited"]
    ])
    const valuesNotLoggedIn = new Map([
        ['0', "not done"],
        ['1', "not done"],
        ['10', "done"],
        ['11', "done"]
    ])

    return isLoggedIn ? valuesLoggedIn.get(code.toString()) : valuesNotLoggedIn.get(code.toString());
}
