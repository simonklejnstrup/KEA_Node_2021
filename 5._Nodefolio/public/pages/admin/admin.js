function login() {
    fetch("/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json; charset=UTF-8" },
        body: JSON.stringify({
            pass: document.getElementById("pass").value,
        })
    }).then(res => {
        if (res.status == 200) {
            toastr.success("Logging in...")
            setTimeout(() => location.href= "/dashboard", 5); //før: 1500
        }
        else {
            toastr.info("Couldn't login - Check password and try again.'")
        }
    }) 
}

document.getElementById("login-button").addEventListener("click", login)