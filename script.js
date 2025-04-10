const tbody = document.getElementById("output");

const loadingRow = document.createElement("tr");
loadingRow.innerHTML = `<td colspan="2">Loading...</td>`;
tbody.appendChild(loadingRow);

function createPromise(index) {
  const delay = Math.random() * 2 + 1; 
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(delay);
    }, delay * 1000);
  });
}

const start = performance.now();

const promises = [createPromise(1), createPromise(2), createPromise(3)];

Promise.all(promises).then((times) => {
  tbody.innerHTML = "";

  times.forEach((time, i) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>Promise ${i + 1}</td>
      <td>${time.toFixed(3)}</td>
    `;
    tbody.appendChild(row);
  });

  const total = (performance.now() - start) / 1000;

  const totalRow = document.createElement("tr");
  totalRow.innerHTML = `
    <td>Total</td>
    <td>${total.toFixed(3)}</td>
  `;
  tbody.appendChild(totalRow);
});
