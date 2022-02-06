const listItems = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastClicked;

function handleClick(e) {
    // Setting up inBetween variable
    let inBetween = false;
    // Check if shift was being held and checkbox was being checked
    if(e.shiftKey && this.checked) {
        // If they were holding shift key
        // Loop over every checkbox
        listItems.forEach(item => {
            // Checking if each item in the array is either the 
            // currently clicked item or if it is equal to the
            // lastClicked variable
            if(item === this || item === lastClicked) {
                inBetween = !inBetween;
            }
            // If inBetween variable is true, check the current checkbox
            if(inBetween) {
                item.checked = true;
            }
        });
    }
    // Setting the lastClicked variable to the current item
    lastClicked = this;
}

// Adding click event listener to each of the checkboxes and passing the
// handleClick function as the event handler.
listItems.forEach(item => {
    item.addEventListener('click', handleClick);
})