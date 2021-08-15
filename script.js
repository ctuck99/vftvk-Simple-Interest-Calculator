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

PREVIOUS PART WAS EXERCISE 4
NEXT IS 5

Exercise 5 : Test the app.
Now that you have finished coding your app. Let us do some basic testing, before we release it.

Enter these values in the form.

Amount = 0

Rate = 1

No. of Years = 1

Click on Compute button.

You should see an alert "Enter a positive number".

Enter these values in the form.

Amount = 99999

Rate = 9

No. of Years = 9

Click on Compute button. You should see the following output.
If you deposit 99999,<br>
at an interest rate of 9.<br>
You will receive an amount of 80999.19,<br>
in the year 2029<br>

As I write this, the year is 2020, so 2029 is correct.

If you app has passed both the test cases, it is time to go to the next excercise.

Otherwise, start debugging your code to see where you went wrong.

Exercise 6 : Upload to GitHub and submit the github pages URL for peer review.
When you are done with all the changes in the project, commit and push to GitHub. You do not have to create a Push Request back to the original IBM repository.

Open the URL of your project in a browser. (You created this URL in Exercise 1)

You should see your completed project.

Submit this URL for peer review.
*/
