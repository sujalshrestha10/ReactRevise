import { useState } from "react"

export default function InsertingArrays() {

    

    const elements = [
        { id: 0, name: 'sujal' },
        { id: 1, name: 'Vincent' },
        { id: 2, name: 'Messi' },
    ]
    const [name, setName] = useState('')
    const [first, setFirst] = useState(elements)
    let someId = 2;



    const HandleClick = () => {

        const nextElements = [...first.slice(0, 1),
        {
            id: someId++,
            name: name
        }, ...first.slice(1),
        ]
        setFirst(nextElements)
        setName('')


    }


    return (
        <>

            <div className="border">
                <h1>Inserting In The Arrays</h1>
                <ul>
                    {first.map(a =>
                        <li key={a.id}>{a.name}</li>
                    )}
                </ul>
                <input value={name} onChange={e => setName(e.target.value)} />
                <button onClick={HandleClick}>Insert

                </button>

            </div>

        </>
    )







}