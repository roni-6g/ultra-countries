import React from 'react';

const AddCountry = (props) => {
    const added = props.addCountry
    let total = 0
    for (let i = 0; i < added.length; i++) {
        const addedCountry = added[i];
        total = total + addedCountry.population
    }

    return (
        <div>
            <h3>Countries Added: {added.length} </h3>
            <p>Total Population: {total} </p>
        </div>
    );
};

export default AddCountry;