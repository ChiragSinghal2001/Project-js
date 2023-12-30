const clock = document.getElementById('clock')

setInterval(function(){
    let now = new Date()
    clock.innerHTML=now.toLocaleTimeString();
},1000)