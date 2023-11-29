export async function getToken(setJson, id, pw) {
  console.log(id, pw);
  await fetch(`http://localhost:8000/user/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: `${id}`,
      pw: `${pw}`,
    }),
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      setJson(data);
    })
    .catch((err) => console.log(err));
}
