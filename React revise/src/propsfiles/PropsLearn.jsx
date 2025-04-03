
// here we are learning about props in react
// props are used to pass data from parent to child component

//this is a default props example
function PropsLearning({ name = 'sujal', age = 19, address = 'china' }) {
    return (
        <>
            <p>name is: {name}  and age is: {age}     address is: {address} </p>
        </>
    )

}

export default PropsLearning