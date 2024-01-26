export const signUpFetch = async (username, email, password) => {
  const response = await fetch(`${process.env.REACT_APP_BASE_URL}/users`, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      username: username,
      email: email,
      password: password,
    }),
  });

  const data = await response.json();
  console.log("signup done: ", data);
};

export const loginFetch = async (username, password) => {
  const response = await fetch("http://localhost:5001/users/login", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  });

  const data = await response.json();
  console.log(data);

  return data;
};
