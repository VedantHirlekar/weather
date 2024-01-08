var inputvalue=document.querySelector('#cityinput')
var btn=document.querySelector('#add')
var city=document.querySelector('#cityoutput')
var descrip=document.querySelector('#description')
var temp=document.querySelector('#temp')
var wind=document.querySelector('#wind')


function convertion(val){
    return (val-273).toFixed(3)
}
apik="b059f9498df0ac5ddd67027a859d46e5"
btn.addEventListener('click',function()
{
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputvalue.value+'&appid='+apik)

    .then(res=>res.json())
    .then(data=>{
        var nameval=data['name']
        var descrip=data['weather']['0']['description']
        var tempature=data['main']['temp']
        var wndspeed=data['wind']['speed']

        city.innerHTML=`Weather of: <span>${ nameval}<span>`
        temp.innerHTML=`Temperature:<span>${convertion(tempature)}<span>`
        description.innerHTML=`Sky condition: <span>${descrip}<span>`
        wind.innerHTML=`Wind Speed: <span>${wndspeed}km/hr<span>`
    })
    .catch(err=>alert('you entered wrong city name'))
}
)