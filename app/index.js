
window.onload = () => {
  const heading = document.querySelector('.heading');
  heading.textContent = 'It\'s working!';
};
let dane = [];
loaddata();
async function loaddata() {
  const response = await fetch('http://localhost:3000/users', {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }})
  const obj = await response.json();
  const response1 = await fetch('http://localhost:3000/companies', {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }})
  const obj1 = await response1.json();
  console.log(obj)
  console.log(obj1)
  let joined = obj.concat(obj1);
  console.log(joined);
  dane.push(joined);
  return joined;
};
console.log(dane)

function buildTable(data) {
  var table = document.getElementById("data_out")

  for (var i = 0; i < data.lenght; i++) {
    var row = `<tr>
                <td>${data[i].name}</td>
                <td>${data[i].uri}</td>
              </tr>`
    table.innerHTML+=row
  }
}
buildTable(dane);

// await fetch("http://localhost:3000/",{
//   // .then(function (response) {
//   //         return response.json();
//   // })
//   // .then(function (db) {
//   //     let placeholder = document.querySelector("#data_out");
//   //     let out = "";
//   //     for (let product of db) {
//   //         out += `
//   //             <tr>
//   //                 <td>${product.name}</td>
//   //                 <td>${product.uris}</td>
//   //             </tr>
//   //         `;
//   //     }
//   //     placeholder.innerHTML = out;
//   // })
//   headers: {
//       'Accept': 'application/json'
//   }})
// .then(response => response.text())
//   .then(text => console.log(text))


// async function loadintotable(url, table) {
//   const tablehead = table.querySelector("thead");
//   const tablebody = table.querySelector("tbody");
//   const response = await fetch(url);
//   const {name,uris}=  await response.json();

//     //
//   tablehead.innerHTML = "<tr></tr>";
//   tablebody.innerHTML = "";

//   for (const usertext of users) {
//     const userelement = document.createElement('th')
//     userelement.textContent = usertext;
//     tablehead.querySelector("tr").appendChild(userelement);

//     }
//   for (const uri of uris) {
//       const urielement = document.createElement('tr');

//         for (const cellText of uri) {
//             const cellElement = document.createElement('td');

//             cellElement.textContent = cellText;
//             urielement.appendChild(cellElement);


//         }
//         tablebody.appendChild(urielement);
//     }
// }
// loadintotable("http://localhost:3000/", document.querySelector("table"));

