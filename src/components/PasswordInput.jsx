// Code PasswordInput Component Here

function PasswordInput (){
    function handleChange() {
        console.log("Entering password...");
    }


    return(
        <>
            <input onChange={() => handleChange()} type="password" />
        </>
    )
}

export default PasswordInput;