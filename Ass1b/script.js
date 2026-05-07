document.getElementById("form").addEventListener("submit",function(e){
    e.preventDefault();//prevents from getting page refreshed

    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;

    let user={
        name:name,
        email:email
    };
    let xhr=new XMLHttpRequest();
    xhr.open("POST","https://jsonplaceholder.typicode.com/posts",true);
    xhr.setRequestHeader("Content-Type","application/json");
    xhr.onload=function(){
        if(xhr.status===201){
            let users=JSON.parse(localStorage.getItem("users")) || [];
            users.push(user);
            localStorage.setItem("users",JSON.stringify(users));
            alert("Data Saved");
            window.location.href="display.html";
        }
    };
    xhr.send(JSON.stringify(user));

});