const baseUrl = "http://localhost:3000";
const signinUrl = baseUrl + "/signin";
const signUpUrl = baseUrl + "/signup";

//FETCH USER
export function signin(name, password) {
  return fetch(signinUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, password })
  }).then(resp => resp.json());
}

//SIGN UP
export function signup(name, password) {
  //console.log(name, password)
  return fetch(signUpUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, password })
  }).then(resp => resp.json());
}

export function validate(){
  return fetch('http://localhost:3000/validate', {
    headers: { 'Authorization': localStorage.token }
  }).then(resp => resp.json())
}


export default { signin, validate };
