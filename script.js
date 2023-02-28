const url = 'https://isro.vercel.app/api/customer_satellites';

fetch(url)
  .then(response => response.json())
  .then(data => {
    const satellites = data.customer_satellites;
    const tableBody = document.querySelector('#satellitesTable tbody');

    satellites.forEach(satellite => {
      const row = document.createElement('tr');
      const idCell = document.createElement('td');
      const countryCell = document.createElement('td');
      const launchDateCell = document.createElement('td');
      const launcherCell = document.createElement('td');
      const massCell = document.createElement('td');

      idCell.textContent = satellite.id;
      countryCell.textContent = satellite.country;
      launchDateCell.textContent = satellite.launch_date;
      launcherCell.textContent = satellite.launcher;
      massCell.textContent = satellite.mass;

      row.appendChild(idCell);
      row.appendChild(countryCell);
      row.appendChild(launchDateCell);
      row.appendChild(launcherCell);
      row.appendChild(massCell);

      tableBody.appendChild(row);
    });
  })
  .catch(error => console.error(error));
