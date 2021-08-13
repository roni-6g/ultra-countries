import React from 'react';
import './Country.css'

const Country = (props) => {
    const country = props.country 
    const {name, capital, population } = props.country 
    return (
        <div className="country-container">
           <div className="country">
                <h2> {name} </h2>
                <h3>City: {capital} </h3>
                <p>Population: {population} </p>
                <button onClick={() => props.handleAddCountry(country)}>Add Country</button>
           </div>
        </div>
    );
};

export default Country;