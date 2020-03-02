function CalculateArea(){
    const radi =document.getElementById("radius").value;
    const Acircle = radi * radi * Math.PI
    document.getElementById("Calc").innerHTML = Acircle
}