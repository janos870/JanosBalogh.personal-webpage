// Active profile menu function

const profileImg = document.getElementById('profileImg');
const aside = document.getElementById('aside');
const closeProfile = document.getElementById('closeProfile')


profileImg.addEventListener('click', function (event){
    aside.classList.toggle('active-profile')
    console.log('profileImg')
})
closeProfile.addEventListener('click', function (event){
    aside.classList.toggle('active-profile')
})



