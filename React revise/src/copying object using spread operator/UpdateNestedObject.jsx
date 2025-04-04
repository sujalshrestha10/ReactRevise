
import { useState } from "react";

function UpdateNestedObj() {
    const [person, setPerson] = useState({
        name: 'chup hojaiye',
        artwork: {
            title: 'Blue Nana',
            city: 'Hamburg',

        }
    });

    //Now we want to update the city how to do it
    //person.artwork.city: 'Butwal';
    //But in React, you treat state as immutable! In order to change city, you would first need to produce the new artwork object (pre-populated with data from the previous one), and then produce the new person object which points at the new artwork:

    const updateCity = () => {
        const nextArtwork = { ...person.artwork, city: 'Butwal' }; // Change city to 'Butwal'
        const nextPerson = { ...person, artwork: nextArtwork }; // Update the person object with new artwork

        setPerson(nextPerson); // Set the updated state
    };


    return (
        <div className="border">
            <h1>{person.name}</h1>
            <h2>{person.artwork.title}</h2>
            <p>City: {person.artwork.city}</p>
            {/* Button to trigger the city update */}
            <button onClick={updateCity}>Change City</button>
        </div>
    );
}
export default UpdateNestedObj