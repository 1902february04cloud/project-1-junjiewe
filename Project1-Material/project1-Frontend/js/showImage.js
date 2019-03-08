show_Image = () => {
    var list = document.getElementById('image');
    while (list.hasChildNodes()) {   
        list.removeChild(list.firstChild);
      }
    let image = document.getElementById('laptopinput').value;

    if(image == 'Razer'){
        var img = document.createElement('img');
        img.src = "../images/Razer.jpg"
        img.width = 400
        img.height = 300
        document.getElementById('image').appendChild(img)
    } else if (image == 'Alien') {
        var img = document.createElement('img');
        img.src = "../images/Alien.jpg"
        img.width = 400
        img.height = 300
        document.getElementById('image').appendChild(img)
    } else if (image == 'Mac') {
        var img = document.createElement('img');
        img.src = "../images/Mac.jpg"
        img.width = 400
        img.height = 300
        document.getElementById('image').appendChild(img)
    } else {
        document.getElementById('image').innerHTML = "<h3>Sorry do not have that laptop image available!<h3/>"
    }
}