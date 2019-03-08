create_laptop = () => {
    //Get user input
    let brand = document.getElementById('brand').value;
    let name = document.getElementById('name').value;
    let size = document.getElementById('size').value;
    let startingprice = document.getElementById('startingprice').value;

    //AJAX Logic
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = () => {
        //If the request is DONE (4), and everything is OK
        if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            //Getting JSON from response body
            let data = JSON.parse(xhr.responseText);
            console.log(data);

            //Set data into div
            document.getElementById('createLaptopMessage').innerHTML = "<h3>Your laptop "+name+" has been successfully added</h3>";
        }
    };

    //Doing an HTTP call to a specific endpoint
    xhr.open('POST',` https://jgc0gqj47d.execute-api.us-east-1.amazonaws.com/prod/laptop`);

    //Sending our request
    let request = {'Laptop_Brand': brand, 'Laptop_Name' : name, 'Laptop_Size' : size, 'Starting_Price': startingprice}
    xhr.send(JSON.stringify(request));
}