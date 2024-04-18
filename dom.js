const btnAdd = document.getElementById("btnAdd");
const nameInp = document.getElementById("name");
const surnameInp = document.getElementById("surname");
const ageInp = document.getElementById("age");
const nationalityInp = document.getElementById("nationality");
const positionInp = document.getElementById("position");
const experienceInp = document.getElementById("experience");
const addTable = document.getElementById("addTable");
const users = [];
let id = 1;

btnAdd.addEventListener("click", (e) => {
  if (
    nameInp.value &&
    surnameInp.value &&
    ageInp.value &&
    nationalityInp.value &&
    positionInp.value &&
    experienceInp.value
  ) {
    e.preventDefault();
    let newUser = {
      id: id,
      name: nameInp.value,
      surname: surnameInp.value,
      age: ageInp.value,
      nationality: nationalityInp.value,
      position: positionInp.value,
      experienc: experienceInp.value,
    };
    users.push(newUser);
    renderUI(users);
    id++
    console.log(users);
  }else{
    alert("Bos xanalari doldurun");

  }
});

const renderUI = (items) => {
  let innerHtml = "";
  for (let i = 0; i < items.length; i++) {
    innerHtml += `
      <tr>
        <td>${users[i].name}</td>
        <td>${users[i].surname}</td>
        <td>${users[i].age}</td>
        <td>${users[i].nationality}</td>
        <td>${users[i].position}</td>
        <td>${users[i].experienc}</td>
        <td class="editTd" onclick="editHander(${items[i].id})">Edit</td>
        <td class="deletetTd" onclick="deleteHander(${items[i].id})">Delete</td>
      </tr>
        `;
  }
  addTable.innerHTML = innerHtml;

  nameInp.value = "";
  surnameInp.value = "";
  ageInp.value = "";
  nationalityInp.value = "";
  positionInp.value = "";
  experienceInp.value = "";
};



function deleteHander(id) {
  let target = users.find((x) => x.id == id);
  let indexOfTarget = users.indexOf(target);
  users.splice(indexOfTarget, 1);
  renderUI(users);
  console.log(users);
}

let editArrinde = 0
function editHander(id){
    btnAdd.style.display = "none";
    btnEdit.style.display= "block";
    let target = users.find((x) => x.id == id);
    let indexOfTarget = users.indexOf(target);
    editArrinde = indexOfTarget
    nameInp.value = `${target.name}`;
    surnameInp.value = `${target.surname}`;
    ageInp.value = `${target.age}`;
    nationalityInp.value = `${target.nationality}`;
    positionInp.value = `${target.position}`;
    experienceInp.value = `${target.experienc}`;
    console.log(editArrinde);
}

btnEdit.addEventListener('click',(e)=>{
  users[editArrinde].name =   nameInp.value 
  users[editArrinde].surname =   surnameInp.value
  users[editArrinde].age =   ageInp.value 
    users[editArrinde].nationality =   nationalityInp.value 
    users[editArrinde].position =   positionInp.value 
    users[editArrinde].experienc =   experienceInp.value 
    editArrinde = 0
    btnAdd.style.display = "block";
    btnEdit.style.display= "none";
    renderUI(users);


})
