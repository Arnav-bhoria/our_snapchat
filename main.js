function preload(){

}

function setup(){
canvas = createCanvas(700,350);
canvas.position(300,250);
vedio= createCapture(VIDEO);
vedio.hide();
tint_color="";
}

function draw(){
image(vedio,0,0,700,350);
tint(tint_color);
}

function Apply_Filter(){
    tint_color=document.getElementById("color_name").value
}

function take_snapshot(){
    save("my_image.png");
}
