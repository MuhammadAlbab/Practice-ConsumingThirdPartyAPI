// get
var useAPI = document.getElementById("useAPI")
var btnUser = document.getElementById("btnUser")

//add listener and its function
btnUser = addEventListener("click", loadAPI)
function loadAPI(event){
    fetch("http://192.168.1.3:8000/api/users", {
        "method" : "GET",
    })
    .then(response => response.json())
    .then(dataApiUser => {
        useAPI.innerHTML =""
        console.log(dataApiUser);
        var userDetails = dataApiUser.data
        userDetails.forEach(function(item, index) {
            var createUserDetailsEl = document.createElement("div")
            var userContent =`
                <div class="user-details">
                    <img src="`+ item.foto +`">
                    <div class="user-name">`+ item.nama +`</div>
                    <div class="user-jk">`+ item.jenis_kelamin +`</div>
                </div>
            `
            createUserDetailsEl.innerHTML = userContent
            useAPI.append(createUserDetailsEl)
        });
    })
    
}