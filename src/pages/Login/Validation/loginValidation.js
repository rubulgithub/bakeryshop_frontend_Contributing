function validation(values) {
  let error = {};
  console.log(values);
  const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

 // const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

  // email validation
  if (values.email === "") {
    error.email = "Email should not be empty";
  } else if (!email_pattern.test(values.email)) {
    error.email = "Email didn't match";
  } else {
    error.email = "";
  }

  // password validation
  if (values.password === "") {
    error.password = "Password should not be empty";
  }
  // } else if (!password_pattern.test(values.password)) {
  //   error.password = "Password pattern didn't match";
  // }
  else {
    error.password = "";
  }
  console.log(error);
  return error;
}

export default validation;
