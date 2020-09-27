function checkForWebAddress(inputText) {
    console.log("::: Running checkForName :::", inputText);

    const re = new RegExp("^(http|https)://", "i");
    const match = re.test(inputText);
    console.log(inputText);
    return match;
}

export { checkForWebAddress }
