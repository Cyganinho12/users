


async function loadData() {
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
    }
  })
  const obj1 = await response1.json();
  // console.log(obj)
  // console.log(obj1)
  //let joined = obj.concat(obj1);

  // dane1.push(...obj);
  // dane2.push(...obj1);
  return [obj, obj1]
};

window.onload = async () => {
  const heading = document.querySelector('.heading');
  heading.textContent = 'It\'s working!';

  const [obj, obj1] = await loadData();

  console.log(obj)
  console.log(obj1)
};

for (var i = 0; i < obj.lenght; i++) {
  for (var j = 0; i < obj1.lenght; i++) {
    
  }

}


//zrobic fora ktory iteruje po 1 tablicy i w nim kolejny ktory porownuje elementy z drugeij tablicy i zapisuje w 3 tablice jakonowa struktura


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
// function buildTable(data) {
//   var table = document.getElementById("data_out")

//   for (var i = 0; i < data.lenght; i++) {
//     var row = `<tr>
//                 <td>${data[i].name}</td>
//                 <td>${data[i].uri}</td>
//               </tr>`
//     table.innerHTML+=row
//   }
// }
// buildTable(dane1);

