function createCalc() {
    return {
        display: document.querySelector('.display'),


        init() {
            this.clickButtons();
            this.pressEnter();
        },

        calculate() {
            let calc = this.display.value;
            try {
                calc = eval(calc);
                if(!calc) {
                    alert('Conta inválida');
                    return;
                }

                this.display.value = calc;
            } catch (err) {
                alert('Conta inválida');
                return;
            }
        },

        pressEnter() {
            this.display.addEventListener('keyup', e => {
                if (e.keyCode === 13) {
                    this.calculate();
                }
            })
        },

        clearDisplay() {
            this.display.value = '';
        },

        delete() {
            this.display.value = this.display.value.slice(0, -1)
        },

        clickButtons() {
            document.addEventListener('click', e => {
                const element = e.target;
                if (element.classList.contains('num')) {
                    this.btnDisplay(element.innerText);
                }

                if (element.classList.contains('clear')) {
                    this.clearDisplay();
                }

                if (element.classList.contains('del')) {
                    this.delete();
                }

                if (element.classList.contains('eq')) {
                    this.calculate();
                }
            })
        },

        btnDisplay(value) {
            this.display.value += value;
            this.display.focus();
        },
    }
}

const calc = createCalc();
calc.init();