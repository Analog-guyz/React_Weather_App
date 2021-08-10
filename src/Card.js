import './Card.css';

function Card({api_data,list_data}) {
    
    const icon = list_data.weather[0].icon
    return (
      <div className="card-container">
          <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="weather_icon"></img>
          <p>City : {api_data.city.name}</p>
          <p>Date&Time  : {list_data.dt_txt}</p>
          <p>Tempreture : {list_data.main.temp}℃</p>
          <p>Real feel : {list_data.main.feels_like}℃</p>
          <p>Humidity : {list_data.main.humidity}%</p>
          
      </div>
    );
  }
  export default Card

  