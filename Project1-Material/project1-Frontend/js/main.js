window.onload = () => {
    //Prime Lambda Event Listener
    document.getElementById('calculate').addEventListener('click', calculator)

    //Create EC2 Lambda Event Listener
    document.getElementById('create').addEventListener('click', create_laptop);

    //Get all EC2s Listener
    document.getElementById('list').addEventListener('click', getAllItems);

    //Click to see the image from s3
    document.getElementById('getImage').addEventListener('click', show_Image);
}