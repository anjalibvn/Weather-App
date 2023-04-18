import React, { useEffect, useState } from "react";
import "./css/style.css";
const Tempapp = () => {
    const [city,setCity]=useState(null);
    const [search,setSearch]=useState("Mumbai");

    useEffect(()=>{
        const fetchApi = async()=>{
            const url=`https://api.openweathermap.org/data/2.5/weather?q=${search}&APPID=d3c19dc091059ec87387ebd1f028c24f`
            const response = await fetch(url);
            const resJson = await response.json();
            //console.log(resJson);
            setCity(resJson.main);
        }
        fetchApi();

    },[search])
    return (
        <>
            <div className="box">
                <div className="inputData">
                    <input type="search"
                        className="inputField"
                        onChange={
                            (event) => {
                                   setSearch(event.target.value)
                            }
                        }
                    ></input>
                </div>
          
            <div className="info">
                <h2 className="location">
                    <i className="fas fa-street-view"></i>
                    {search}</h2>
                <h1 className="temp">
                 {city.temp}
                </h1>
                <h3 className="tempmin_max">
                     
                </h3>
            </div>
            <div className="wave-one"></div>
            <div className="wave-two"></div>
            <div className="wave-three"></div>
            </div>
        </>
    )
}
export default Tempapp;