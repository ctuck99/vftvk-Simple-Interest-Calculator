function compute()
{
	var principal = document.getElementById("principal").value;
	var rate = document.getElementById("rate").value;
	var years = document.getElementById("years").value;
	var interest = principal * years * rate / 100;
	var year = new Date().getFullYear() + parseInt(years);
}

function updateRate()
{
	var rateval = document.getElementById("rate").value;
	document.getElementById("rate_val").innerText = rateval;
}
        
/* Remaing steps
Link this function with an "onchange" event on the range input.

Change the slider, and test if the display in the span is being updated dynamically.

Get the reference to the element named 'result'

When "Compute Interest" is clicked, set its inner html property to the below text.

If you deposit 1000000,
at an interest rate of 3.5%.
You will receive an amount of 175000,
in the year 2025

The number above are for indication only. Make sure the output contains the relevant values by using the correct variables

Sample:
document.getElementById("result").innerHTML="If you deposit "+principal+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+amount+",\<br\>in the year "+year+"\<br\>"

Make sure that the input you have taken as "No of Years" is converted into an actual year.

Make sure the numbers in the result are highlighted.

Add validation for "Principal" input box. If the user enters zero or negative values, show an alert "Enter a positive number"

Once the user clicks on the alert "OK" button, take the user back to the "Principal" input box, by setting the focus on this box. You can refer to the Javascript Form Validation lab.

You are done with the coding. Let us proceed to next exercise where we test the code.

Write comments in your code. They not only help you score more marks in the project, but also help you to debug and maintain the code in the long term.
*/
