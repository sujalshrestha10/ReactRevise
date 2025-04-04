import { useState } from "react"

//copying object using spread operator

function Object_Copy() {
    const [name, setName] = useState({
        firstname: 'Saif',
        lastname: 'khan',
        email: 'saifpolio@gmail.com',
    })

    function Handle_First_Name_Change(e) {
        // name.firstname = e.target.value //For example, this line mutates the state from a past render
        // so we do this

        setName({ ...name, firstname: e.target.value })
        //copy the name and spread it And it override the firstname value

    }
    function Handle_Last_Name_Change(e) {
        // name.lastname = e.target.value //For example, this line mutates the state from a past render:
        setName({ ...name, lastname: e.target.value })
    }
    function Handle_Email_Change(e) {
        // name.email = e.target.value //For example, this line mutates the state from a past render:

        setName({ ...name, email: e.target.value })
    }

    return (
        <>
            <h1 className="border">Copy Object Example
                <form action="">
                    <p className="name">
                        Firstname: <input onChange={Handle_First_Name_Change} value={name.firstname} type="text " />
                    </p>
                    <p className="name">
                        Lastname: <input onChange={Handle_Last_Name_Change} value={name.lastname} type='text' />
                    </p>
                    <p className="name">
                        Email:<input type='text' onChange={Handle_Email_Change} value={name.email} />
                    </p>


                </form>
            </h1>
        </>
    )
}

export default Object_Copy;