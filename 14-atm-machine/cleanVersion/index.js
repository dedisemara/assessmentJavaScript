const readline = require('readline-sync');

const accounts = new Object();
for (let i = 0; i < 10; i++){
    accounts[i] = 100;
};

let selectedUser;

// MODEL
function AtmMachine() {

    this.getBalance = function(id) {
        return accounts[id];
    }

    this.withdraw = function(id, value){
        accounts[id] -= value
    };

    this.deposit = function(id, value){
        accounts[id] += value;
    };

    this.exit = function(){
        return selectedUser = null;
    };

    this.userSelected = function(id){
        this.id = id;
        selectedUser = id
    };

    this.verif = function(id) {
        this.id = id;
        if (this.id >= 0 && this.id <= 9) {
            return true;
        } else {
            return false;
        }
    };
};

// view
function AtmMachineView(){

    this.selectUser = function(){
        return Number.parseInt(
            readline.question('Enter an Id: '), 10
        );
    };

    this.option = function(){
        console.log(`Main menu
1: check balance
2: withdraw
3: deposit
4: exit`)
    };

    this.allertSelectUser = function(){
        console.log('please choose 0 - 9!');
    }

    this.selectMenu = function(){
        return Number.parseInt(
            readline.question('Enter a choice: '), 10
        );
    }

    this.balance = function(id, value) {
        return console.log(
            `The balance id ${id} is ${value}`
        )
    }

    this.inputWithdraw = function() {
        return Number.parseInt(
            readline.question('Enter an amount to withdraw: '), 10
        );
    }
    this.inputDeposit = function() {
        return Number.parseInt(
            readline.question('Enter an amount to deposit: '), 10
        );
    }
};

// CONTROL
function AtmMachineController() {
    this._board = new AtmMachine();
    this._view = new AtmMachineView();
    let choice;

    this.atmStart = function() {

        while(true) {
            selectedUser = this._view.selectUser();
            let condition = this._board.verif(selectedUser);
            if(condition === true) {
                break;
            }else {
                this._view.allertSelectUser();
            }
        }

        this._view.option();
        while (true) {
            choice = this._view.selectMenu()
            switch(choice){
                case 1:
                const getBalance = this._board.getBalance(selectedUser);
                this._view.balance(selectedUser, getBalance);
                this._view.option();
                break
                case 2:
                const valueWithdraw = this._view.inputWithdraw();
                this._board.withdraw(selectedUser, valueWithdraw);
                this._view.option();
                break
                case 3:
                const valueDeposit = this._view.inputDeposit();
                this._board.deposit(selectedUser, valueDeposit);
                this._view.option();
                break
                case 4:
                this._board.exit()
                while(true) {
                    selectedUser = this._view.selectUser();
                    let condition = this._board.verif(selectedUser);
                    if(condition === true) {
                        break;
                    }else {
                        this._view.allertSelectUser();
                    }
                }
                this._view.option();
                break;
            }
        }
    };
};
const atm = new AtmMachineController();
atm.atmStart()



