const atticus = { name: 'Atticus', employeeNumber: '2405', annualSalary: '47000', reviewRating: 3 };
const jem = { name: 'Jem', employeeNumber: '62347', annualSalary: '63500', reviewRating: 4 };
const scout = { name: 'Scout', employeeNumber: '6243', annualSalary: '74750', reviewRating: 5 };
const robert = { name: 'Robert', employeeNumber: '26835', annualSalary: '66000', reviewRating: 1 };
const mayella = { name: 'Mayella', employeeNumber: '89068', annualSalary: '35000', reviewRating: 2 };

const employees = [ atticus, jem, scout, robert, mayella ];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

console.log(employees);


console.log( 'bonus calculator');


let bonusBonus = 0;

class Employee {
    constructor (inputObject){
        this.name= inputObject.name;
        this.employeeNumber=inputObject.employeeNumber;
        this.annualSalary=parseInt(inputObject.annualSalary);
        this.reviewRating=inputObject.reviewRating;
        this.bonusPercentage=this.bonusPercentage();
        this.totalBonus=this.annualSalary*(this.bonusPercentage/100);
        this.totalCompensation=this.totalBonus+this.annualSalary;

    }

    bonusPercentage(){
        bonusBonus=0;
        this.ratingCheck();
        this.serviceCheck();
        this.incomeCheck();
        this.bonusCapper();
        return bonusBonus;
    }
    ratingCheck(){
        if (this.reviewRating <= 2){
            bonusBonus +=0;
        }
        else if (this.reviewRating==3){
            bonusBonus+=4;
        }
        else if (this.reviewRating==4){
            bonusBonus+=6;
        }
        else if (this.reviewRating==5){
            bonusBonus+=10;
        }
        return bonusBonus;
    }
    serviceCheck(){
        if (this.employeeNumber.length==4){
            bonusBonus+=5;
        }
        return bonusBonus;

    }
    incomeCheck(){
        if (this.annualSalary > 65000){
            bonusBonus-=1;
        }
        return bonusBonus;

    }
    bonusCapper(){
        if (bonusBonus > 13){
            bonusBonus=13;
        }
        else if (bonusBonus < 0){
            bonusBonus=0;
        }
        return bonusBonus;

    }
}

for (let i = 0; i < employees.length; i++) {
    let output = new Employee(employees[i]);
    console.log(output);
}