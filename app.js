const pageInfo = document.querySelector("#page-info");

let data = [
  {
    name: "customers",
    number: 2000,
    descrption: "Number of customers using this feature",
  },
  {
    name: "Vans",
    number: 200,
    descrption: "Number of customers using this feature",
  },
  {
    name: "Route",
    number: 50,
    descrption: "Number of customers using this feature",
  },
  {
    name: "destinations",
    number: 40,
    descrption: "Number of customers using this feature",
  },
];

let display = data
  .map((item) => {
    return `
        <div>
          <p>${item.name}</p>
          <h1>${item.number} +</h1>
          <p>${item.descrption}</p>
        </div>
    
    `;
  })
  .join("");

pageInfo.innerHTML = display;
