// Code PasswordInput Component Here

function PasswordInput (){
    // handler function that is called from the input
    function handleChange() {
        console.log("Entering password...");
    }

    return(
        <>
            {/* input with password type that calls the handler function when interacted with */}
            <input onChange={() => handleChange()} type="password" /> 
        </>
    )
}

export default PasswordInput;