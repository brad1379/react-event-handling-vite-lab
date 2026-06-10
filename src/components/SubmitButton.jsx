// Code SubmitButton Component Here

function SubmitButton (){
    // Handler function for the mouse entering the button
    function handleEnter() {
        console.log("Mouse Entering");
    }
    // Handler function for the mouse exiting the button
    function handleLeave() {
        console.log("Mouse Exiting");
    }
    return(
        <>
            {/* button that has two functions attachjed to it */}
            <button onMouseEnter={handleEnter} onMouseLeave={handleLeave}>Submit Password</button>
        </>
    )
}

export default SubmitButton;