// get
var useAPI = document.getElementById("conApi")
var btnUser = document.getElementById("btnUser")

//add listener and its function
btnUser = addEventListener("click", loadAPI)
function loadAPI(event){
    fetch("https://jsonplaceholder.typicode.com/users", {
        "method" : "GET",
    })
    .then(response => response.json())
    .then(apiUser => {
        conApi.innerHTML = ""
        apiUser.forEach(element =>  {
            var createUserDetailsEl = document.createElement("div")
            var userContent =`
                <div class="user-details">
                    <div class="user-name">`+ element.name +`</div>
                    <div class="user-username">`+ element.username +`</div>
                    <div class="user-email">`+ element.email +`</div>
                </div>
            `
            createUserDetailsEl.innerHTML = userContent
            useAPI.append(createUserDetailsEl)
        })
    })
}