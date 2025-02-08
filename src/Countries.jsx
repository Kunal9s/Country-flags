import React from "react";
import { useState, useEffect } from "react";


const CountryCard = ({name, flag}) => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            border: "1px solid black",
            borderRadius: "5px",
            margin: "10px",
            width: "200px",
            height: "200px",
            textAlign: "center"
        }}>
            <img src={flag} alt={`Flag of ${name}`} style={{
                width: "100px",
                height: "100px",
            }}/>
            <h2>{name}</h2>
        </div>
    )
}

function Countries() {
    
    const API_ENDPOINT = "https://xcountries-backend.azurewebsites.net/all";
    const [flagData, setFlagData] = useState([]);

        useEffect(() => {
            const fetchData = async () => {
              try{const data = await fetch(API_ENDPOINT);
                  const jsonData = await data.json();
                  setFlagData(jsonData);
                } catch(error) {
                    console.error("Error fetching data: ", error);
                }
            };
            
            fetchData();
        }, [])

 
    return (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
          }}>
        {flagData.map((country, index) => (
            <CountryCard 
            key={country.abbr}
            name={country.name}
            flag={country.flag} />
        ))}
         
        </div>
    );
}

export default Countries;

