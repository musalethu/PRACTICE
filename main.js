var form = document.getElementById('form');

var formList=[]


form.addEventListener("submit", (event) => {
     event.preventDefault();
     let name = document.getElementById("name").value;
     let surname = document.getElementById("surname").value;
     let password = document.getElementById("password").value;
     let email = document.getElementById("email").value;
     let gender = document.getElementById("gender").value;
     let terms = document.getElementById("terms").value;
     let formData = { name, surname, password, email, gender, terms };
     if (name && surname && password && email && gender && terms) {
         formList.push(formData);
         display()
       console.log(formList);
     }
});
function display() {
    let list = document.getElementById('list') 
    for (let i = 0; i < formList.length; i++){
        list.innerHTML = `<li>
        ${formList[i].name}
        ${formList[i].surname}
        ${formList[i].password}
        ${formList[i].email}
        ${formList[i].gender}
         ${formList[i].terms}
        </li>`;
    }
}