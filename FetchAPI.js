/**
 * FETCH API
 * - A JS inteferface that is used to make HTTP requests to a given web server, to receive a response
 *
 */

function fetchAndShowUsers() {
  fetch("https://jsonplaceholder.typicode.com/users", { method: "GET" })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      data.map(user =>{
        const parentPara = document.getElementById("addData");
        const nameEl = document.createElement("p")
        const usernameEl = document.createElement("p")
        const emailEl = document.createElement("p")
        const streetEl = document.createElement("p")
        const cityEl = document.createElement("p")
        const dataSeparatorEl = document.createElement("p")

        nameEl.innerHTML = `${user.name}`
        usernameEl.innerHTML = `${user.username}`
        emailEl.innerHTML = `${user.email}`
        streetEl.innerHTML = `${user.address.street}`
        cityEl.innerHTML = `${user.address.city}`
        dataSeparatorEl.innerHTML = `---------------------------------------------------`

        parentPara.append(nameEl, usernameEl, emailEl, streetEl, cityEl, dataSeparatorEl)
      })
    })
    .catch((error) => console.log(error.message));
}

function fetchAndShowPhotos(){
  fetch("https://jsonplaceholder.typicode.com/photos", { method: "GET" })
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    data.map(photo =>{
      const parentPara = document.getElementById("addData");
      const titleEl = document.createElement("p")
      const idEl = document.createElement("p")
      const imgEl = document.createElement("img")
      const dataSeparatorEl = document.createElement("p")

      titleEl.innerHTML = `${photo.title}`
      idEl.innerHTML = `${photo.id}`
      imgEl.src = `${photo.url}`
      
      dataSeparatorEl.innerHTML = `---------------------------------------------------`

      parentPara.append(titleEl, idEl, imgEl, dataSeparatorEl)
    })
  })
  .catch((error) => console.log(error.message));
}
