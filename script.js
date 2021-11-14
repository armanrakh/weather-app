//import axios from 'axios'

const body = document.querySelector('body')

const img = document.querySelector('.fas')
const temperature = document.querySelector('.temp')
const c = document.querySelector('.C')
const f = document.querySelector('.F')
const cityName = document.querySelector('.city')
const circle = document.querySelector('.circle1')
const circle2 = document.querySelector('.circle2')

const state = document.querySelector('.status')

const vis = document.querySelector('.B1')
const humid = document.querySelector('.B2')
const press = document.querySelector('.B3')
const speed = document.querySelector('.B4')

const textArea = document.querySelector('.search')
const btn = document.querySelector('.search-btn')
const update = document.querySelector('.updated')

const D = document.querySelector('.D')
const E = document.querySelector('.E')

/*const key = '771841669b9c0dc2837c3d991efbfa73'
let city = 'Almaty'

let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&units=metric&appid=${key}`;*/

img.classList.remove('fa-sun')
img.classList.add(`fa-sun`)

//axios.get(url).then(res => console.log(res.data))

const dt = new Date()


btn.addEventListener('click', () => {
    console.log(textArea.value)

    const key = '771841669b9c0dc2837c3d991efbfa73'
    let city = textArea.value
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&units=metric&appid=${key}`;

    let standart = fetch(url).then(res => res.json()).then(data => data.main.temp).then(value => temperature.textContent = value)

    c.addEventListener('click', () => {
        c.style.order = '0'
        c.style.opacity = '1'
        c.style.fontSize = '30px'
        f.style.order = '1'
        f.style.opacity = '0.75'
        f.style.fontSize = '20px'
            
        fetch(url).then(res => res.json()).then(data => data.main.temp).then(value => temperature.textContent = value)
    })
        
    f.addEventListener('click', () => {
        f.style.order = '0'
        f.style.opacity = '1'
        f.style.fontSize = '30px'
        c.style.order = '1'
        c.style.opacity = '0.75'
        c.style.fontSize = '20px'
        
        fetch(url).then(res => res.json()).then(data => data.main.temp).then(value => temperature.textContent = value * 1.8 + 32)
    })

    fetch(url).then(res => res.json()).then(data => data).then(value => console.log(value))
        
    fetch(url).then(res => res.json()).then(data => data.visibility).then(value => vis.textContent = `${value}м`)
    fetch(url).then(res => res.json()).then(data => data.main.humidity).then(value => humid.textContent = `${value}%`)
    fetch(url).then(res => res.json()).then(data => data.main.pressure).then(value => press.textContent = `${value}мм`)
    fetch(url).then(res => res.json()).then(data => data.wind.speed).then(value => speed.textContent = `${value}м/с`)
        
        
    fetch(url).then(res => res.json()).then(data => data.weather[0].description).then(value => state.textContent = value)

    fetch(url).then(res => res.json()).then(data => data.name).then(value => cityName.textContent = value)

    
    const sun = [800, 'sun']
    const bolt = [200, 201, 202, 210, 211, 212, 221, 230, 231, 232, 'bolt']
    const shower = [300, 301, 302, 310, 311, 312, 313, 314, 321, 'cloud-showers-heavy']
    const rain = [500, 501, 502, 503, 504, 520, 521, 522, 531, 'cloud-rain']
    const snowflake = [511, 600, 601, 602, 611, 612, 613, 615, 616, 620, 621, 622, 'snowflake']
    const smog = [701, 711, 721, 731, 741, 751, 761, 762, 771, 'smog']
    const tornado = [781, 'wind']
    const cloud = [801, 802, 803, 804, 'smog']

    const all = [sun, bolt, shower, rain, snowflake, smog, tornado, cloud]


    fetch(url).then(res => res.json()).then(data => data.weather[0].id).then(value => {
        console.log(value == sun[0])
    })
    fetch(url).then(res => res.json()).then(data => data.weather[0].id).then(value => {
        for (const mas of all) {
            for (const id of mas) {
                if(value == id) {
                    console.log(mas)
                    img.classList.remove(img.classList[1])
                    let ma = mas[mas.length - 1]
                    img.classList.add(`fa-${mas[ma]}`)

                    fetch(url).then(res => res.json()).then(data => data.timezone).then(value => {
                        const date = new Date()
                        let hours = date.getUTCHours() + value / 3600
                        console.log(hours)

                        if(ma == 'sun') {
                            if(6 < hours && hours < 9) {
                                body.style.backgroundImage = `url('./img/sunrise.jpg')`
                            } else if(9 < hours && hours < 17) {
                                body.style.backgroundImage = `url('./img/almost-cloudy-morning-day.jpg')`
                            } else if(18 < hours && hours < 23) {
                                body.style.backgroundImage = `url('./img/sunset.jpg')`
                            } else {
                                body.style.backgroundImage = `url('./img/night-sky.jpg')`
                            }
                        }

                        if(ma == 'bolt') {
                            if(6 < hours && hours < 9) {
                                body.style.backgroundImage = `url('./img/thunder-morn.jpg')`
                            } else if(9 < hours && hours < 23) {
                                body.style.backgroundImage = `url('./img/thunder-night.jpg')`
                            } else {
                                body.style.backgroundImage = `url('./img/thunder-night.jpg')`
                            }
                        }

                        if(ma == 'shower' || ma == 'rain') {
                            if(6 < hours && hours < 9) {
                                body.style.backgroundImage = `url('./img/rain.jpg')`
                            } else if(9 < hours && hours < 17) {
                                body.style.backgroundImage = `url('./img/rain-not-night.jpg')`
                            } else if(18 < hours && hours < 23) {
                                body.style.backgroundImage = `url('./img/rain-night.jpg')`
                            } else {
                                body.style.backgroundImage = `url('./img/rain-night.jpg')`
                            }
                        }

                        if(ma == 'snowflake') {
                            if(6 < hours && hours < 9) {
                                body.style.backgroundImage = `url('./img/snow-morn.jpg')`
                            } else if(9 < hours && hours < 17) {
                                body.style.backgroundImage = `url('./img/snow-day.jpg')`
                            } else if(18 < hours && hours < 23) {
                                body.style.backgroundImage = `url('./img/snow-eve.jpg')`
                            } else {
                                body.style.backgroundImage = `url('./img/snow-eve.jpg')`
                            }
                        }

                        if(ma == 'smog') {
                            if(6 < hours && hours < 9) {
                                body.style.backgroundImage = `url('./img/smog-morn.jpg')`
                            } else if(9 < hours && hours < 16) {
                                body.style.backgroundImage = `url('./img/smog-day.jpg')`
                            } else if(17 < hours && hours < 19) {
                                body.style.backgroundImage = `url('./img/smog-sunset.jpg')`
                            } else if(20 < hours && hours < 23) {
                                body.style.backgroundImage = `url('./img/smog-night.jpg')`
                            } else {
                                body.style.backgroundImage = `url('./img/smog-night.jpg')`
                            }
                        }

                        if(ma == 'tornado') {
                            if(6 < hours && hours < 9) {
                                body.style.backgroundImage = `url('./img/tornado-morn.jpg')`
                            } else if(9 < hours && hours < 23) {
                                body.style.backgroundImage = `url('./img/tornado-day.jpg')`
                            } else {
                                body.style.backgroundImage = `url('./img/night-sky.jpg')`
                            }
                        }
                    })
                }
            }
        }
    })

    /*let unix_sunrise = fetch(url).then(res => res.json()).then(data => data.name).then(value => value)
    let unix_sunset = fetch(url).then(res => res.json()).then(data => data.name).then(value => value)
    //sunrise: 1636767752
    //sunset: 1636803034
    var sunrise = new Date(unix_sunrise * 1000);
    var sunset = new Date(unix_sunset * 1000);
    var hours1 = sunrise.getHours();
    var minutes1 = "0" + sunrise.getMinutes();
    var seconds1 = "0" + sunset.getSeconds();

    var hours2 = sunset.getHours();
    var minutes2 = "0" + sunset.getMinutes();
    var seconds2 = "0" + sunset.getSeconds();

    var format1 = hours1 + ':' + minutes1.substr(-2) + ':' + seconds1.substr(-2);
    var format2 = hours2 + ':' + minutes2.substr(-2) + ':' + seconds2.substr(-2);

    console.log(minutes1)

    D.textContent = format1
    E.textContent = format2*/

    fetch(url).then(res => res.json()).then(data => data.sys.sunrise).then(value => {
        fetch(url).then(res => res.json()).then(data => data.timezone).then(val => {
            var dat1 = new Date(value * 1000);
            var hours = dat1.getUTCHours() + val / 3600;
            var minutes = "0" + dat1.getMinutes();
        
            var formattedTime = hours + ':' + minutes.substr(-2);
            D.textContent = formattedTime
        })
    })

    fetch(url).then(res => res.json()).then(data => data.sys.sunset).then(value => {
        fetch(url).then(res => res.json()).then(data => data.timezone).then(val => {
            var dat2 = new Date(value * 1000);
            var hours = dat2.getUTCHours() + val / 3600;
            var minutes = "0" + dat2.getMinutes();
        
            var formattedTime = hours + ':' + minutes.substr(-2);
            E.textContent = formattedTime
        })
    })

    
    fetch(url).then(res => res.json()).then(data => data.sys).then(value => {
        const date = new Date()
        const sunrise = new Date(value.sunrise * 1000);
        const sunset = new Date(value.sunset * 1000);

        const sunrise_min = sunrise.getHours() * 60 + sunrise.getMinutes()
        const sunset_min = sunset.getHours() * 60 + sunset.getMinutes()

        /*const timezone = fetch(url).then(res => res.json()).then(data => data.timezone).then(value => value)
        
        const time = (sunset_min - sunrise_min) - (((date.getUTCHours() + timezone / 3600) * 60) - (7 * 60 + 30) + date.getMinutes())
        console.log(timezone)
    
        if(time < 0) {
            circle.style.marginLeft = '480px'
        } else {
            circle.style.marginLeft = `${(time / 6 * 5)}px`
        }*/

        fetch(url).then(res => res.json()).then(data => data.timezone).then(value => {
            const time = (sunset_min - sunrise_min) - (((date.getUTCHours() + value / 3600) * 60) - (7 * 60 + 30) + date.getMinutes())
            console.log(time)
        
            if(time < 0) {
                circle.style.marginLeft = '480px'
            } else {
                circle.style.marginLeft = `${(time / 6 * 5)}px`
            }
        })
    })
    
    /*const date = new Date()
    update.textContent = `Обновлено в ${date.getHours()}:${date.getMinutes()}`

    const sunrise_min = dat1.getHours() * 60 + dat1.getMinutes()
    const sunset_min = dat2.getHours() * 60 + dat2.getMinutes()
    const time = (sunset_min - sunrise_min) - ((date.getHours() * 60) - (7 * 60 + 30) + date.getMinutes())

    if(time < 0) {
        circle.style.marginLeft = '480px'
    } else {
        circle.style.marginLeft = `${(time / 6 * 5)}px`
    }*/

        
    fetch(url).then(res => res.json()).then(data => data.main.temp).then(value => {
        let br = value + 50
        circle2.style.marginLeft = `${br}%`
    })
})