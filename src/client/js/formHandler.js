
function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    const flag = Client.checkForWebAddress(formText);
    console.log("Flag : "+ flag)
    if(flag) {
        console.log("::: Form Submitted :::")
        const APIURL = process.env.API_ID;
        const APIKEY = process.env.API_KEY;
        fetch(`http://localhost:8081/sentiment?url=${formText}`)
            .then(res => res.json())
            .then(function (res) {
                console.log(res);
                document.getElementById('agreement').innerHTML = `Agreement : ${res.agreement}`;
                document.getElementById('confidence').innerHTML = `Confidence : ${res.confidence}`;
                document.getElementById('irony').innerHTML = `Irony : ${res.irony}`;
                document.getElementById('score_tag').innerHTML = `Score Tag : ${res.score_tag}`;
                document.getElementById('subjectivity').innerHTML = `Subjectivity : ${res.subjectivity}`;
                document.getElementById('model').innerHTML = `Model : ${res.model}`;
            })
    } else {
        alert("Address has to start with HTTP/HTTPS")
    }

}

export { handleSubmit }
