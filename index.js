function createEmployeeRecord(array){
    const record = {
    firstName: array[0],
    familyName: array[1],
    title: array[2],
    payPerHour: array[3],
    timeInEvents: [],
    timeOutEvents: [],
    }
    return record
};
 
function createEmployeeRecords(arrayOfArrays){  
    let employeeRecords = arrayOfArrays.map( elemnet=> createEmployeeRecord(elemnet));
return employeeRecords
};

function createTimeInEvent (employeeRecord, date){
  let record= {};
  record.type = "TimeIn";
  record.hour = +(date.slice(11));
  record.date = date.substring(0,10);
  employeeRecord.timeInEvents.push(record);
  return employeeRecord
};

function createTimeOutEvent (employeeRecord, date){
  let record= {};
  record.type = "TimeOut";
  record.hour = +(date.slice(11));
  record.date = date.substring(0,10);
  employeeRecord.timeOutEvents.push(record);
  return employeeRecord
};

 function hoursWorkedOnDate (employeeRecord, date){
  const timeIn = employeeRecord.timeInEvents.find(e=>e.date === date);
  const timeOut = employeeRecord.timeOutEvents.find(e=>e.date === date);
 
  return (timeOut.hour - timeIn.hour)*.01
  };

function wagesEarnedOnDate (employeeRecord, date) {
    return (hoursWorkedOnDate(employeeRecord, date) * (employeeRecord.payPerHour))
  };

function allWagesFor(employeeRecord){
  const allWages = employeeRecord.timeInEvents.map(e=>wagesEarnedOnDate(employeeRecord, e.date));
  return allWages.reduce((accumulator, wage)=> accumulator + wage);
};

function calculatePayroll (arrayOfEmployeeRecords){
  const total = arrayOfEmployeeRecords.map(e=>allWagesFor(e));
  const sumAll = total.reduce((accumulator, employeeTotal) => accumulator + employeeTotal);
return sumAll
};

function calculatePayroll(arrayOfEmployeeRecords){
  const totalForEachEmployee = arrayOfEmployeeRecords.map(e=>allWagesFor(e));
return totalForEachEmployee.reduce((accumulator, e)=> accumulator + e)
};
