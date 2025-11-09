
async function weather() {

const ville=document.getElementById("city")
const cityname= ville.value.trim()

if (cityname===""){
    alert("enter a city name")
    return
}
else{

    const responce = await fetch("https://api.weatherapi.com/?key=db306f78e36d269bbd219054a412c275&q=/" + cityname)
    const data = (await responce).json
    console.log(data)
}
weather()}