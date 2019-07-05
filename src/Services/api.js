const baseUrl = "http://localhost:3001";
const signinUrl = baseUrl + "/signin";

export function signin(name, password) {
  return fetch(signinUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, password })
  }).then(resp => resp.json());
}

export default { signin };
