function dontConsider(str, regEx, outcome)	{
	var strLow = str.replace(regEx, '').toLowerCase(),
		strLowRev = str.replace(regEx, '').toLowerCase().split('').reverse().join('');
	
	// test reversal for equality
	if (strLow === strLowRev)  {
		outcome = true;
	}

	// if it fails set outcome to false
	else  {
		outcome = false;
	}
	return outcome;
}

function consider(str, regEx, outcome)	{
	var strr = str.replace(regEx, ''),
		strRev = str.replace(regEx, '').split('').reverse().join('');
	
	// test reversal for equality
	if (strr === strRev)  {
		outcome = true;
	}

	// if it fails set outcome to false
	else  {
		outcome = false;
	}
	return outcome;
}

function answer(outcome, pTest)	{
	if (outcome === true) {
		pTest.innerHTML = "Palindrome!";
		} 
		else {
		pTest.innerHTML = "Try Again.";
		}
}


function testPalindrome(event) {
	"use strict";
	event.preventDefault();
	/*
	outcome: this is our outcome switch, for determining output
	pTest: finds the html ID
	str: holds input value
	chk: stores checked or unchecked
	regEx: holds our regular expression for string manipulation
	*/
	let outcome = true,
		pTest = document.getElementById("pTest"),
		str = document.getElementById("input").value,
		chk = document.getElementById("case").checked,
		regEx = /[\s]/g;
	
	// If checkbox check ignore case, otherwise consider case
	if (chk)	{
		outcome = dontConsider(str, regEx, outcome)
	}
	else	{
		outcome = consider(str, regEx, outcome);
	}
  
	// Display result to page
	return answer(outcome, pTest);
}
