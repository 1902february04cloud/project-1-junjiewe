//Get all EC2
function getAllItems() {
    //AJAX Logic
    let xhr = new XMLHttpRequest();
        
    xhr.onreadystatechange = () => {
        //If the request is DONE (4), and everything is OK
        if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            //Getting JSON from response body
            let data = JSON.parse(xhr.responseText);
            console.log(data);

            //Present the data to the user
            presentTable(data);
        }
    };

    //Doing a HTTP to a specific endpoint
    xhr.open('GET',`https://rnesr2gp6d.execute-api.us-east-1.amazonaws.com/prod/list`);

    //Sending our request
    xhr.send();
}

//Present all Items
function presentTable(data) {
    //Get customer list node
    let tableList = document.getElementById("tableList");

    //Clean customer list
    tableList.innerHTML = "";

    //Iterate over all EC2
    data.forEach((item) => {
        //Creating node of <li>
        let itemNode = document.createElement("li");

        //Add class for styling <li class="something">
        //You can access any HTML fields (id might be useful)
        itemNode.className = "list-group-item";  
        //Creating innerHTML object, adding customer name to it.
        //<li class="something">[creating this object]</li>
        let itemNodeText = document.createTextNode(`Name: ${item.Laptop_Name}, Brand: ${item.Laptop_Brand}, Size: ${item.Laptop_Size}, Price: ${item.Starting_Price}`);

        //Append innerHTML to the customerNode
        //<li class="something">Perez, Julio</li>
        itemNode.appendChild(itemNodeText);

        //Finally, we append the new customerNode to the customerList
        //<ul id="ec2List">
        //<li class="something">Something</li>
        //</ul>
        tableList.appendChild(itemNode);
    });
}