import { useState } from "react";

function ArrayList() {
    let someid = 0;

    const [SclpName, setSclpName] = useState('')
    const [SclpArtist, setSclpArtist] = useState([])

    return (
        <>
            <div className="border">
            <h1>Updating the arrays</h1>

            {/* If we use push it mutuates the previous array and the changes not occured as per required so we use different approach */}
            {/* <h1>Sculpture</h1>
            <input value={SclpName} onChange={e => setSclpName(e.target.value)} />
            <button onClick={() => {
                SclpArtist.push({
                    id: someid++,
                    SclpName: SclpName

                })
            }}>Add</button>
            <ul>
                {SclpArtist.map(Artist => (<li key={Artist.id}>{Artist.SclpName}</li>))}
                
            </ul> */}


            {/* instead use this approach */}
            <h1>Sculpture</h1>
            <input value={SclpName} onChange={e => setSclpName(e.target.value)} />
            <button onClick={() => { setSclpArtist([...SclpArtist, { id: someid++, Name: SclpName }]) }}>Add</button >


            <ul>
                {SclpArtist.map(Artist => (<li key={Artist.id}>{Artist.Name} </li>))}
            </ul>
        </div >
        </>

    )


}
export default ArrayList;