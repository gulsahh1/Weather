const url ='https://api.openweathermap.org/data/2.5/';
const key ='a350f0a682009e71ba350f54c2363a00';
const setQuery =(e) =>{
    if(e.keyCode== 13) // keyCode 13 ise enter ' a basmıs demek
       getResult(searchBar.value)   // sehir ismine göre işlem yapıyoruz. inputtaki değere ulaşıyoruz.
}

const getResult =(cityName)=>{
// url üzerinden api ye istek oluşturma
  let query= `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=en` // apinin parametrelerini yazdık
  fetch(query)
  .then(weather => {
     return weather.json()  // json formatına dönüştürdük
  })
  .then(displayResult) // görüntüleme işlemi yapılıyor.

}

const displayResult= (result) =>{
    let city=document.querySelector('.city')
    city.innerText =`${result.name}, ${result.sys.country}`

    let temp =document.querySelector('.temp')
    temp.innerText=`${Math.round(result.main.temp)}°C`

    let desc =document.querySelector('.desc')
    desc.innerText=result.weather[0].description

    let minMax=document.querySelector('.minmax')
    minMax.innerText = `${Math.round(result.main.temp_min)}°C / ${Math.round(result.main.temp_max)}°C`
}
const searchBar = document.getElementById('searchBar')
searchBar.addEventListener('keypress', setQuery)