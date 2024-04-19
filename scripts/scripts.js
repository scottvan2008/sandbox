/****************** YOUR NAME: Yinan Fan

The instructions describe the missing logic that is needed; you will translate these into JavaScript in the places indicated.

You are encouraged to use the provided naming convention for ease of review.

*/

/****************** create variables ******************/
/* create variables to hold the values for modelName and duration */

// INSERT YOUR CODE HERE
var model_name = '';
var duration_value = 0;




/****************** helper function ******************/
/* create a function called recalculate() which will
    - create a variable to represent the calculated-cost span element. That will look something like:
        // let costLabel = document.getElementById("calculated-cost");
    - check the value of the modelName variable, and use that to calculate the new total cost:
        e.g. if modelName is currently "XYZ", duration * 100 gives us the new total cost.
        if modelName is currently "CPRG", duration * 213 gives us the new total cost.
    - set the value of the calculated-cost element's innerHTML to this new value
*/

// INSERT YOUR CODE HERE

// Create a function to calculate
function calculateCost() {
    // Create a variable to represent the calculated-cost span element.
    var cost_label = document.getElementById("calculated-cost");

    var new_cost = 0;

    // Check the value of the model_name variable, and use that to calculate the new total cost.
    if (model_name === "Model XYZ") { new_cost = duration_value * 100; }
    else if (model_name === "Model CPRG") { new_cost = duration_value * 213; }

    // Set the value of the calculated-cost element's innerHTML to this new value
    cost_label.innerHTML = new_cost;
}




/****************** model button logic ******************/

/* 
- first, create a variable to represent the "Switch Model" pseudo-button (hint: can use getElementById)
- second, create a function called changeModel() which checks the value of the model name variable. This function will:
    - create a variable to represent the model-text span element
    - if modelName is currently "XYZ", change the value of modelName to "CPRG", and change the innerHTML of the model-text span element to "Model CPRG"
    - if modelName is currently "CPRG", change the value of modelName to "XYZ", and change the innerHTML of the model-text span element to "Model XYZ"
    - then, recalculate() the total cost.
- finally, uncomment the following line of JavaScript to have this function run automatically whenever the pseudo-button is clicked: */
// modelButton.addEventListener("click", changeModel);

// INSERT YOUR CODE HERE

// Create a variable to represent the "Switch Model" pseudo-button
var model_button = document.getElementById('model-button');

// Create a function checks the value of the model name
function change_Model() {

    // Create a variable to represent the model-text span element
    var switch_model = document.getElementById("model-text");

    // If model_name is currently "XYZ", change the value of model_name to "CPRG"
    if (switch_model.innerHTML === "Model XYZ") { model_name = 'Model CPRG'; switch_model.innerHTML = 'Model CPRG'; }

    // If model_name is currently "CPRG", change the value of model_name to "XYZ"
    else if (switch_model.innerHTML === "Model CPRG") { model_name = 'Model XYZ'; switch_model.innerHTML = 'Model XYZ'; }

    // Calculate the cost.
    calculateCost();
}

// Have this function run automatically whenever the pseudo-button is clicked
model_button.addEventListener("click", change_Model);




/****************** duration button logic ******************/
/*  - first, create a variable to represent the "Change Duration" pseudo-button.
    - then, create a function called changeDuration() that will
        - create a variable to represent the duration-text span element
        - prompt() the user for a new duration
        - save the result of the prompt() to the duration variable
        - change the innerHTML of the duration-text span element to this new value
        - recalculate() the total cost/
    - finally, attach this function to the "Change Duration" pseudo-button, so it runs whenever the button is clicked.
*/

// INSERT YOUR CODE HERE

// Create a variable to represent the "Change Duration" pseudo-button.
var duration_button = document.getElementById('duration-button');

// Create a function to change the duration.
function change_duration() {
    var newDuration_Value = prompt("Enter your duration:");
    var durationText_Element = document.getElementById("duration-text");
    durationText_Element.innerHTML = newDuration_Value;
    duration_value = parseFloat(newDuration_Value); // Parse the value to ensure it's a number
    calculateCost();
}

// Attach the function to the "Change Duration" pseudo-button, so it runs whenever the button is clicked
duration_button.addEventListener("click", change_duration);
