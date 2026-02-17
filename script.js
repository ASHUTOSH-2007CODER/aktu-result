const database = [
  {
    username: "2505110120046",
    dob: "06/12/2007",
    pdf: "results/rahul123.pdf"
  },
    {
    username: "2505110120104",
    dob: "26/01/2007",
    pdf: "results/2505110120104.pdf"
  }
];

function checkResult() {
  const username = document.getElementById("username").value;
  const dob = document.getElementById("dob").value;
  const error = document.getElementById("error");

  error.innerText = "";

  const user = database.find(
    u => u.username === username && u.dob === dob
  );

  if (user) {
    error.style.color = "green";
    error.innerText = "Verifying...";

    setTimeout(() => {
      window.location.href = user.pdf;
    }, 1500);
  } else {
    error.style.color = "red";
    error.innerText = "Invalid Credentials";
  }
}


