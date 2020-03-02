
// 4 - Area Calculator

// Given radius, display area

// input 1 type number
// input 1 radius

// function: Math.PI * radius * radius


//   const grandtot = (radius) => {
//     return Math.PI * radius * radius;
//   }
//   document.querySelector('#area').addEventListener('click', () => {
//     // Never trust the user. ALWAYS white list input text
    
//     document.getElementById("area").innerHTML = Math.PI * radius *radius;
//   })

  function circle(radius)
{
    this.radius = radius;
    this.area = function () 
    {
        return Math.PI * this.radius * this.radius;
    };
  
}
var c = new circle(3);
console.log('area =', c.area().toFixed(2));
