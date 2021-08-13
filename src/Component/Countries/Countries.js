import React, { useEffect, useState } from 'react';
import AddCountry from '../AddedCountries/AddCountry';
import Country from '../Country/Country';

const Countries = () => {
    const [countries, setCountries] = useState([])
    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])    
    const [addCountry, setCountry] = useState([])
    const handleAddCountry = (country) => {
        const newCountry = [...addCountry, country]
        setCountry(newCountry)
    }
    return (
        <div>
            <h1>Countries Result: {countries.length} </h1>
            <AddCountry addCountry={addCountry}></AddCountry>
            {
                countries.map(country => <Country 
                    country={country}
                    handleAddCountry={handleAddCountry}
                ></Country>)
            }
        </div>
    );
};

export default Countries;