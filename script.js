//Create a calculator class
class Calculator{
    //class constructor
    constructor(display, history){
        this.display = display;
        this.history = history;
        this.clear();
    }
    
    //method to clear the variables
    clear(){
        this.currentOperand = '';
        this.previousOperand = '';
        this.operator = undefined;
    }

    //add the entered number to the currentOperand variable
    inputNumber(number){
        if(number==='.' && this.currentOperand.includes('.'))
            return
        this.currentOperand += number;

    }

    //add the entered operation to the operator variable
    inputOperation(operator){
        if(this.currentOperand === '') 
            return
        if(this.previousOperand !== '')
            this.calculate();
        this.operator = operator
        this.previousOperand = this.currentOperand;
        this.currentOperand = '';            

    }

    //make the computation according to the operator 
    calculate(){
        let result;
        const current = parseFloat(this.currentOperand);
        const previous = parseFloat(this.previousOperand);
        switch(this.operator){
            case '+':
                result = current + previous;
                break;
            case '-':
                result = current - previous;
                break; 
            case '*':
                result = current * previous;
                break;
            case '/':
                result = current / previous;
                break;
            default:
                return;
        }
        this.currentOperand = result;
        this.operator = undefined;
        this.previousOperand = '';
    }

    //display the value in the display input
    updateDisplay(){
        this.display.value = this.currentOperand;
        this.history.value = this.previousOperand;
    }

}

//get the required elements
const display = document.querySelector('#display');
const history = document.querySelector('#history');
const buttons = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const clearButton = document.querySelector('.clear');
const equalButton = document.querySelector('.equal');

//create a new instance of the operator class
const calculator = new Calculator(display, history);

//add the click event to the number buttons
buttons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.inputNumber(button.innerText);
        calculator.updateDisplay();
    })
})

//add the click event to the operator buttons
operators.forEach(operatorButton => {
    operatorButton.addEventListener('click', () => {
        calculator.inputOperation(operatorButton.innerText);
        calculator.updateDisplay();
    })
})

//add the click event to the clearAll button
clearButton.addEventListener('click', button => {
    calculator.clear();
    calculator.updateDisplay();
});

//add the click event to the equal button
equalButton.addEventListener('click', button => {
    calculator.calculate();
    calculator.updateDisplay();
});

