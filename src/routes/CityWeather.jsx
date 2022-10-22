import { Typography } from '@mui/material';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function CityWeather() {
    const [data, setData] = useState()
    const location = useLocation()
    console.log(location)

    useEffect(() => {
        getData()
    }, [location.pathname])
    const getData = async () => {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${location.state[0]}&lon=${location.state[1]}&appid=6be575c2475d90ba08d1f29279df1747`)
        const data = await response.json()
        setData(data)
    }

    if (!data) {
        return null
    }
    const icon = data.weather.map((w) => <img key={w.id} src={`http://openweathermap.org/img/wn/${w.icon}@2x.png`} width={'100px'}></img>)
    return (
        <div>
            {icon}
            <Typography >
                Temp:  {data.main.temp} K
            </Typography>
            <Typography>Temp_min:  {data.main.temp_min} K
            </Typography>
            <Typography>Temp_max:  {data.main.temp_max} K
            </Typography>
            <Typography>Pressure:  {data.main.pressure}
            </Typography>
            <Typography>Humidity:  {data.main.humidity}
            </Typography>
            <Typography>Sea_level:  {data.main.sea_level}
            </Typography>
            <Typography>Wind_speed:  {data.wind.speed}
            </Typography>
            <Typography>Clouds:  {data.clouds.all}
            </Typography>
            <Typography>Timezone:  {data.timezone}
            </Typography>
        </div>
    )
}