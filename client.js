export class Client {
  promise() {
    return fetch(
      "https://bf215c26-4cad-4edb-b33e-b3fdbb92c43c.mock.pstmn.io/billing/discount"
    );
    promise
      .then((response) => {
        console.log(response.status);

        return response.json();
      })
      .then((value) => {
        console.log(value);
      });
  }
}
