// Active profile menu function

const profileImg = document.getElementById("profileImg");
const aside = document.getElementById("aside");
const closeProfile = document.getElementById("closeProfile");

profileImg.addEventListener("click", function (event) {
  aside.classList.toggle("active-profile");
  console.log("profileImg");
});
closeProfile.addEventListener("click", function (event) {
  aside.classList.toggle("active-profile");
});

// Email send function.

function sendEmail() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const message = document.getElementById("textarea").value;
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "janos.balogh870@gmail.com",
    Password: "37E4822CC265E299C75EC892601FFCA005C9",
    To: "janos.balogh870@gmail.com",
    From: email,
    Subject: phone,
    Body: 'Name: ' + name + '<br> Email: ' + email + '<br> Phone: ' + phone  + '<br> Message: ' + message,
  });
  if(email === '') {
    alert('Emailcím kitötése kötelező!');
  } else if(name === '') {
    alert('Név kitöltése kötelező!');
  } else {
    alert('Üzenet sikeresen eküldve! 😊')
  }
}
