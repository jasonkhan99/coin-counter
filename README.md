# _Coin Counter_

#### _A program that will tell you how much change you need!, 08/31/2020_

#### By _**Jason Khan and Erich Richter**_

## Description

_Create a coin counter application that takes X amount of money (such as $4.99) and determines the exact amount of change needed in quarters, dimes, nickels and pennies. Do not worry about adding a user interface to the application. Instead, focus on writing good tests and functional code._

## Setup/Installation Requirements

Software Requirements
1. Internet browser
2. A code editor like VSCode or Atom to view or edit the codebase.

Open by downloading:
1. Download this repository onto your computer by clicking the 'clone or download button'
2. Double click index.html to open it in your web browser

Open via Bash/GitBash:
1. Clone this repository onto your computer:
`git clone https://github.com/jasonkhan99/coin-counter`
2. Navigate into the `/coin-counter/` directory in Visual Studio Code or preferred text editor
`code .`
3. Open index.html in Chrome or preferred browser:
`open index.html`

## Project Specifications

| Behavior | Input | Output |
| -------- | ----- | ------ |
| The Program will return a message if input is not a number or is negative or is not exact change | "one", -1, 1.505 | "This is not valid US legal tender" |
| The program will add .25 (a quarter) to a counter initialized at 0 until it is greater than the inputted dollar amount minus .25 | 4.99 | 4.75 |
| The program will add .10 (a dime) to the counter until it is greater than the inputted dollar amount minus .10 | 4.75  | 4.95 |
| The program will add .05 (a nickel) to the counter until it is greater than the inputted dollar amount minus .05 | 4.95 | 4.95 |
| The program will add .01 (a penny) to the counter until it is greater than the inputted dollar amount minus .01 | 4.95 | 4.99 |
| The program will display the amount of quarters nickels dimes and pennies required to make the requested dollar amount |

## Known Bugs

_No known bugs_

## Support and contact details

_Please reach out through my GitHub account._

## Technologies Used

* _HTML_
* _CSS_
* _JavaScript_
* _VSCode_

### License

MIT License.

Copyright (c) 2020 **_Jason Khan and Erich Richter_**
