
class User {
  constructor(id, firstName, lastName, age, image) {
    this.userName = firstName;
    this.userLastname = lastName;
    this.userAge = age;
    this.userId = id;
    this.userImage = image;

  };


  draw() {
    let container = document.querySelector(".container");
    container.innerHTML += `
            <div class="data_block">
            <div class="image_block">
            <img id =${this.userImage} class = "image" src =${this.userImage} />
            </div>

            <div class="nameAndSurname">
            <h2 id = "${this.userName}" class="userName">${this.userName} </h2>
                        <h2 id = "${this.userLastname}" class="userLastName">${this.userLastname}</h2>
            </div>

            <div class="ageBlock">
            <span class = "userAge" id = ${this.userAge}>user Age : ${this.userAge}</span>
            </div>

            <p>User ID: ${this.userId}</p>
            <button id = "${this.userId}" class = "userBtn">Click Here</button>
              </div>
            `

  };



}

fetch("data.json")
  .then(response => response.json())
  .then(function getInfo(result) {
    result.forEach((item) => {
      const readName = new User(item.id, item.firstname, item.lastname, item.age, item.image);
      readName.draw();
    });
  }
  )



class Copy extends User {
  constructor(id, firstName, lastName, age, image) {
    super(id, firstName, lastName, age, image);
    this.usId = id
    this.fName = firstName;
    this.lName = lastName;
    this.usAge = age;
    this.usImage = image;


  };

  showMe() {

    let secondContainer = document.querySelector(".secondContainer")
    let button = document.querySelectorAll(".userBtn");
    
    button.forEach((item, index) => {


      item.addEventListener("click", () => {
        let read = JSON.parse(localStorage.getItem("user")) || [];
         
        let userName = document.querySelectorAll(".userName");
        let userLastName = document.querySelectorAll(".userLastName")
        let ageUser = document.querySelectorAll(".userAge");
        let userImg = document.querySelectorAll(".image")
       let save = [this.usId = item.id, this.fName = userName[index].id,this.lName = userLastName[index].id, this.usAge = ageUser[index].id,this.usImage = userImg[index].id];
       read.push(save)
       let userBlock = document.createElement("div");
       userBlock.classList.add("generalBlock");
       let deleteBtn = document.createElement("button");
       deleteBtn.classList.add("deleteButton");
       deleteBtn.innerHTML = `<i class = "fa fa-trash" style = "color: red"></i>`
      
      save.forEach((saveItem)=>{
        localStorage.setItem("user",JSON.stringify(read));
        userBlock.appendChild(deleteBtn)
        userBlock.innerHTML += saveItem
        secondContainer.appendChild(userBlock)
      }) 
      })
    })
  }
}

fetch("data.json")
  .then(response => response.json())
  .then(function getFull(result) {
    const copy = new Copy(result.id, result.firstname, result.lastName, result.age, result.image);
    copy.showMe()
  })