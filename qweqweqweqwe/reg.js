let name = document.querySelector('#name')
let login = document.querySelector('#login')
let password = document.querySelector('#password')
let mail = document.querySelector('#mail')
let sumbit = document.querySelector('#sumbit')

let users = {}

function Users(name, login, password, mail){
    this.name = name
    this.login = login
    this.password = password
    this.mail = mail
}

function createId(){
    return Object.keys(users).length
}
sumbit.addEventListener('click', () => {
    const nameUser = name.value
    const loginUser = login.value
    const passwordUser = password.value
    const mailUser = mail.value

    const user = new Users(nameUser, loginUser, passwordUser, mailUser)
    const userId = 'User' + createId(users)
    users[userId]
})

//*const form = document.querySelector('form')

// form.addEventListener('submit', (e) => {
    // e.preventDefault()
    // const signup_name = document.getElementById('reg-name').value
    // const signup_pass = document.getElementById('reg-pass').value
  
    // fetch('http://localhost:3000/file_sharing/registration', {
    //   method: 'POST',
    //   headers: {
        // 'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({ signup_name, signup_pass })
    // })
    //   .then(response => response.json())
    //   .then(data => console.log(data))
    //   .catch(error => console.log(error))
//   })
  