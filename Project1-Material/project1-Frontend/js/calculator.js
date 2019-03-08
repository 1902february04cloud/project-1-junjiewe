let calculator = () => {
    //Get user input
    let number1 = document.getElementById('number1').value;
    let number2 = document.getElementById('number2').value;
    let operation = document.getElementById('operation').value;

    //AJAX Logic
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = () => {
        //If the request is DONE (4), and everything is OK
        if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            //Getting JSON from response body
            let data = JSON.parse(xhr.responseText);
            console.log(data);

            //Set data into div
            document.getElementById('calculateMessage').innerHTML = "<h3>Your result is " + data + " </h3>";
        }
    };

    //Doing an HTTP call to a specific endpoint
    xhr.open('POST',` https://mo73e433r0.execute-api.us-east-1.amazonaws.com/prod/calculator`);
    //Sending our request
    let request = {'number1': number1, 'number2': number2, 'operation':operation}
    xhr.send(JSON.stringify(request));
}