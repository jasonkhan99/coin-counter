export function coinCounter(usd) {
  if (isNaN(usd)) {
    return "Please enter a valid numerical value.";
  } else if (usd < 0) {
    return "Please enter a positive dollar amount.";

}else if (usd % .01 !== 0)

  } else {
    return "I don't know how to do this yet";
  }
}

//var numDec = temp.split(".")[1].length;