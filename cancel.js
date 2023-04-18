import Client from "./client";

let button = document.getElementById("id_1");
button.addEventListener("click", function () {
  let p = new Client();
  p.promise();
  let div = document.getElementById("form-id");
  let d = document.createElement("div");
  d.id = "div-id";
  d.textContent = "success";
  div.appendChild(d);
  let cancel = document.createElement("button");
  cancel.type = "button";
  cancel.textContent = "Cancel";
  cancel.id = "cancel-id";
  div.appendChild(cancel);
});
let feedback_btn = document.getElementById("id_2");

feedback_btn.addEventListener("click", function () {
  let promise = fetch(
    "https://8ae77586-f048-466a-a00a-8c3a29c5e79a.mock.pstmn.io/feedback"
  );
  promise
    .then((response) => {
      return response.json();
    })
    .then((value) => {
      console.log(value);
    });
  let div = document.getElementById("form-id");
  let form = document.createElement("form");
  form.id = "form";
  let textArea = document.createElement("textarea");
  textArea.rows = "4";
  textArea.cols = "50";
  textArea.placeholder = "Enter your feedback";

  let submit = document.createElement("button");
  submit.type = "submit";
  submit.textContent = "Submit";
  submit.id = "submit-id";
  form.appendChild(textArea);
  form.appendChild(submit);

  div.appendChild(form);
});
