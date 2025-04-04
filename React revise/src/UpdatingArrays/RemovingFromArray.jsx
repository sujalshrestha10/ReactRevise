import { useState } from "react";

function RemArr() {
    const initialArr = [
        { id: 1, age: 20 },
        { id: 2, age: 14 },
        { id: 3, age: 19 },
    ]
    const [firstArr, setFirstArrr] = useState(initialArr)

    return (
        <>
            <div className="border"><h1>Removing from the ArrayList</h1>

                <ul>
                    {firstArr.map(yo => (
                        <li key={yo.id}>Age:{yo.age}
                            <button onClick={() => { setFirstArrr(firstArr.filter(a => a.id !== yo.id)) }}>delete</button>
                        </li>)
                    )
                    }
                </ul>
            </div>

        </>
    )

}

export default RemArr