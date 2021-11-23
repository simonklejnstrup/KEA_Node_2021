function sendContactMessage() {
  
  fetch("/api/contact", {
      method: "POST",
      headers: { "Content-type": "application/json; charset=UTF-8" },
      body: JSON.stringify({
          firstname: document.getElementById("fname").value,
          lastname: document.getElementById("lname").value,
          email: document.getElementById("email").value,
          phone: document.getElementById("phone").value,
          message: document.getElementById("message").value
      }) 
  }).then(response => {

      if (response.status === 200) {
          toastr.success("Message sent successfully.");
          setTimeout(() => location.href="/", 2000);
      } else {
          toastr.error("Something went wrong");
      }
  });
  
}


document.getElementById("contact-button").addEventListener("click", sendContactMessage);





