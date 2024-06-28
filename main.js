let hour = document.getElementById('hrs');
let minute = document.getElementById('mint');
let second = document.getElementById('sec');


function time(){
    let date = new Date()

    let hrs = date.getHours();
    let mint = date.getMinutes();
    let sec = date.getSeconds();

    //Rotation

    //[
       // Rotation calculation

        //For hours
        //12 hours = 360 deg
        //1 hour = 360/12
        //hRotation = 30h + m/2 (60 mint = 30 deg => 1 mint = 30/60 = (1/2)m)

        //For minute
        //60 mint(1 hour) = 360 deg
        //1 mint = 360/60 = 6
        //mRotation = 6m

        //For second
        //60 sec(1 mint) = 360 deg
        //1 sec = 360/60 = 6
        //sRotation = 6s
          
    //]

    let hRotation = 30*hrs + mint/2 
    let mRotation = 6*mint
    let sRotation = 6*sec


    hour.style.transform = `rotate(${hRotation}deg)`
    minute.style.transform = `rotate(${mRotation}deg)`
    second.style.transform = `rotate(${sRotation}deg)`
}

setInterval(time,1000)