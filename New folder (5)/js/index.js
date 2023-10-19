var role = window.prompt("Enter your role");


if(role == "admin"){
    console.log("You Can add , update and delete");
}

else if (role == "mentor"){
    console.log("You Can add and update");
}

else if (role == "manger"){
    console.log("you Can add only");
}

else{
    console.log("show only")
}