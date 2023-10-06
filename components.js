const restaurantRow = restaurant => {
  const {name, address, company} = restaurant;
  const tr = document.createElement('tr');
  const nameCell = document.createElement('td');
  nameCell.innerText = name;
  const addressCell = document.createElement('td');
  addressCell.innerText = address;
  const companyCell = document.createElement('td');
  companyCell.innerText = company;
  tr.appendChild(nameCell);
  tr.appendChild(addressCell);
  //tr.appendChild(companyCell);
  return tr;
};

const restaurantModal = (restaurant, menu) => {
  const {name, address, city, postalCode, phone, company} = restaurant;
  let html = `<h3>${name}</h3>
  <p>${company}</p>
  <p>${address} ${postalCode} ${city}</p>
  <p>${phone}</p>
  <button class="button-2" >Show weekly menu</button>
  <button class="button-2" >Show todays menu</button>
  <table>
    <tr>
      <th id="day" >date</th>
      <th id="day">Course</th>
      <th id="day">diets</th>
      <th id="day">price</th>
    
    </tr>
  `;
  menu.days. forEach(days => {
    const {courses, date} = days;
    html += `
        <tr>
          <td class="paiva">${date ?? ' - '}</td>
          <td class="paiva"></td>
          <td class="paiva"></td>
          <td class="paiva"></td>
          
        </tr>
        `;

  courses.forEach(course => {

      const name = course.name
      const diets = course.diets
      const price = course.price
      
          html += `
        <tr>
        <td></td>
        <td>${name ?? ' - '}</td>
        <td>${diets ?? ' - '}</td>
        <td>${price ?? ' - '}</td>
          
        </tr>
        `;
    
    })

  });

  html += '</table>';
  return html;
};

const errorModal = message => {
  const html = `
      <h3>Error</h3>
      <p>${message}</p>
      `;
  return html;
};

export {restaurantRow, restaurantModal, errorModal};