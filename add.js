const StudentId=document.getElementById("getId");
const Studentname=document.getElementById("getname");
const Studentage=document.getElementById("getage");
const Studentgame=document.getElementById("getgame");
const AddStudent=document.getElementById("Addstudent");
const ReadStudent=document.getElementById("Readstudent");
const UpdatStudent=document.getElementById("Updatestudent");
const DeleteStudent=document.getElementById("Deletestudent");

function elementValNull(){
    const StudentId=document.getElementById("getId").value='';
    const Studentname=document.getElementById("getname").value='';
    const Studentage=document.getElementById("getage").value='';
    const Studentgame=document.getElementById("getgame").value='';
    }
const database = firebase.database();
const rootref=database.ref('student');

AddStudent.addEventListener("click",(e) => {
    e.preventDefault();
    rootref.child(StudentId.value).set({
        StudentName:Studentname.value,
        StudentAge:Studentage.value,
        StudentGame:Studentgame.value
    });
    elementValNull();

});

UpdatStudent.addEventListener("click",(e) => {
    e.preventDefault();
    rootref.child(StudentId.value).update({
        StudentName:Studentname.value,
        StudentGame:Studentgame.value,
        StudentAge:Studentage.value
    });
    elementValNull();
});

DeleteStudent.addEventListener("click",(e) => {
    e.preventDefault();
    rootref.child(StudentId.value).remove();
    elementValNull();

});
  
  var Student_details;
  var key; 
 
  rootref.on("value",function(snapshot){
  document.getElementById("retrivedata").innerHTML ='';
  snapshot.forEach(function(element)
    {     
          key=element.key;
          Student_details = element.val();
          document.getElementById("retrivedata").innerHTML +=  `<p><strong>StudentId : ${key} Studentname:${Student_details.StudentName},Studentage :${Student_details.StudentAge} ,Studentgame:${Student_details.StudentGame}</p>`
    
     });
     
    });

