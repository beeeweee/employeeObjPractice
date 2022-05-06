class Employee {
    constructor(firstName, lastName, salary) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.salary = salary;
      this.parent = null;
      this.directory = [];
    }

//will be used once linkedlist is setup (parent/child (parent/directory))  relationshipp)
    findEmployeeObj(first, last){
        
    }

    addEmployeeToDirectory(employeeObj){
        
        let newDirectoryItem = employeeObj;
        if(Array.isArray(newDirectoryItem)){
            for(let i = 0; i < newDirectoryItem.length; i++){
                newDirectoryItem[i].parent = this.firstName + " "+ this.lastName
                this.directory.push(newDirectoryItem[i])
            }
        } else{
            employeeObj.parent = this.firstName + " "+ this.lastName
            this.directory.push(employeeObj)
        }
        
    }

    //will add turnery for employeeObj on first/lastName - if employeeObj !== null then employeeObj.first/lastName
    removeEmployeeFromDirectory(first, last, employeeObj = null){
        let employeeArrayLength = this.directory.length;
        const firstName = first
        const lastName = last
        let tempEmployeeDirectory = this.directory;
        if(employeeArrayLength <=0){
            return console.log('no one to delete -array')
        }
            for(let i = 0; i < employeeArrayLength; i++ ){
                if(tempEmployeeDirectory[i].firstName === firstName && tempEmployeeDirectory[i].lastName === lastName){

                    if(this.directory[i].directory.length >=0){
                        this.addEmployeeToDirectory(this.directory[i].directory);
                    } else if(this.directory.length > 1){
                        
                        this.directory.splice(i,1)

                        this.addEmployeeToDirectory(this.directory);
                        return
                    }
                    
                    return this.directory.splice(i,1)
                    
  
            }else {
                
                this.directory[i].removeEmployeeFromDirectory(firstName, lastName)
            }
            
        }
        console.log('no one to delete')
            // return tempEmployeeDirectory.removeEmployeeFromDirectory(firstName, lastName)
    }
    
 //will add later once the node is LL library is setup   
    // changeEmployeeDirectory(newParentObj ){

    //     const firstNameChangingEmployee= this.firstName;
    //     const lastNamefirstNameChangingEmployee = this.lastName;

    //     let ParentObj = newParentObj;

    //     ParentObj.addEmployeeToDirectory(this);
    //     this.removeEmployeeFromDirectory(firstNameChangingEmployee, lastNamefirstNameChangingEmployee);

    //     return;

    // }


    getSalaryForAllEmployees(){
        let sumOfSalaries = this.salary;
        let employeeArrayLength = this.directory.length;
        for(let i = 0; i < employeeArrayLength; i++ ){
            sumOfSalaries = sumOfSalaries + this.directory[i].getSalaryForAllEmployees();
        }
        return sumOfSalaries;
    }
  }


  const employee1 = new Employee('Bill', 'Bar', 10);
  const employee2 = new Employee('Will', 'War', 20);
  const employee3 = new Employee('Phil', 'Par', 30);
  const employee4 = new Employee('Jill', 'Jar', 40);
  

  console.log(employee1.getSalaryForAllEmployees())

employee1.addEmployeeToDirectory(employee2)
employee2.addEmployeeToDirectory(employee3)
employee2.addEmployeeToDirectory(employee4)

console.log(employee1.getSalaryForAllEmployees())


employee1.removeEmployeeFromDirectory('Jill','Jar')
employee1.removeEmployeeFromDirectory('Will','War')


const employee5 = new Employee('Lill', 'Lar', 50);
employee1.addEmployeeToDirectory(employee5)


console.log(employee1.getSalaryForAllEmployees())
console.log(employee1)




//functionality for later
// employee3.changeEmployeeDirectory(employee5)
// console.log(employee3)