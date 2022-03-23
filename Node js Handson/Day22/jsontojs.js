let fs=require('fs');
let emp = fs.readFileSync('records.json');
let jsonString=emp.toString();
let jsobj=JSON.parse(jsonString);
for(let i=0;i<jsobj.length;i++){
    let{id, name, salary}=jsobj[i];
    console.log(`EmpId: ${id}, Name: ${name}, Salary: ${salary}`)
}