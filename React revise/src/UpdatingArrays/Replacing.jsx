
import { useState } from "react";
function ReplacingArr() {
    let initial = [0, 0, 0]
    const [first, setFirst] = useState(initial)
    const handleClick = (i) => {
        const latestArr =
            first.map((value, index) => {
                if (i == index) {
                    return value + 1
                } else {
                    return value
                }
            })

        setFirst(latestArr)
    }
    return (<>

        <div className="border">
            <h1>Replacing in ArrayList</h1>
            <ul>
                {
                    first.map((a, i) => (
                        <li key={i}>{a}
                            <button onClick={() => { handleClick(i) }}>+1</button></li>
                    ))
                }
            </ul>


        </div>


    </>)


}
export default ReplacingArr