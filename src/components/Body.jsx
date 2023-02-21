import React, { useState } from "react";
import '../App.css';

const API ={
    API_ID: "f9e0e928728dd71821192d6581eba1c7",
    LINK: "https://api.openweathermap.org/data/2.5/",
};
function Body() {

    const [search, setSearch] = useState("");
    const [result, setResult] = useState({});

    const handleOnChange = (e) => {
        setSearch(e.target.value)

    }
    const handeleOnClick = () => {
        fetch(`${API.LINK}weather?q=${search}&units=metric&APPID=${API.API_ID}`)
        .then((res)=>res.json())
        .then((r)=>{
            setResult(r);
        });
    }

    return(
        <>
        <div className="body">
        <div className="search-bar">
            <form>
                <input className="input" type="text" placeholder="Enter city/town name" onChange={handleOnChange}/>
                
            </form>
            <button className="submit-btn" onClick={handeleOnClick}>Submit</button>
            
        </div>
        {typeof result.main !== "undefined" ? (
        <div className="details">
            <div className="blank"> </div>
            <div className="card">
                <div className="temp">
                    <div className="img-card"><img src={`http://openweathermap.org/img/w/${result.weather[0].icon}.png`} className="icon" alt="icon" />
                    <p className="temperature">{result.main.temp}°C </p></div>
                    <p className="name">{result.name}</p>
                    <p className="main">{result.weather[0].main}</p>
                    <p className="desc">{result.weather[0].description}</p>  

                </div>
                <div className="half">
                    <div className="coord">
                        <p className="lon">latitiude: {result.coord.lat}</p>
                        <p className="lat">	longitude: {result.coord.lon}</p>
                    </div>
                
                    <div className="misc">
                        <p className="humid">humidity: {result.main.humidity}</p>
                        <p className="speed">wind: {result.wind.speed}</p>
                    </div>
                </div>
            </div>
        </div>
        ): (
            "   "
        )}
        </div>
        </>
    )
}

export default Body 