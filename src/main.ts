function mouseTracker () {
    document.addEventListener('mousemove', function(event) {
    console.log('Mouse X:', event.clientX, 'Mouse Y:', event.clientY);
    var mouseX = event.clientX;
    var mouseY = event.clientY;
    const canvas = document.getElementById("myCanvas") as HTMLCanvasElement;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const ctx = canvas.getContext("2d");

    if(!ctx){
        throw new Error("CTX is NULL");
        
    }

    ctx.beginPath();
    ctx.arc(mouseX, mouseY, 40, 0, 2 * Math.PI);
    ctx.stroke();
    });
    return 0;
}


mouseTracker();