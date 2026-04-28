/*
Tasks:
In this assignment, your task is to make a program to simulate an ATM machine.
Create ten accounts in an array with id 0 to 9, each of the account has initial balance of $100. The system prompts the user to enter an id. If the id is entered incorrectly, ask the user to enter the correct id. Once id is accepted, the main menu is displayed as shown in the sample run. You can enter 1 for viewing the current balance, 2 for withdrawing money, 3 for depositing money, 4 for exiting the main menu. Once you exit, the system will prompt for an id again. Thus, once the system starts, it will not stop.
*/

// Model (AtmMachine)
//  - data
//  - set data
//  - get data

// Views (AtmMachineView)
//  - prompView

// Controller (AtmMachineController)
//  - combine Model and View

const readline = require('readline-sync');

const accounts = new Object();
for (let i = 0; i < 10; i++){
    accounts[i] = 100;
};

let selectedUser;

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
    }

    this.userSelected = function(id){
        this.id = id;
        selectedUser = id
    }
};

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



}

function AtmMachineController() {
    this._board = new AtmMachine();
    this._view = new AtmMachineView();
    let choice;

    this.atmStart = function() {

        while (true){
            selectedUser = this._view.selectUser();
            if (selectedUser >= 0 && selectedUser <= 9 ){
                this._view.option();
                break
            } else{
                this._view.allertSelectUser();
            }
        } 
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
                selectedUser = this._view.selectUser();
                if (selectedUser >= 0 && selectedUser <= 9 ){
                    this._view.option();
                } else{
                    this._view.allertSelectUser();
                    selectedUser = this._view.selectUser();
                }
                break;
            }
        }


    }
}
const atm = new AtmMachineController();
atm.atmStart()



