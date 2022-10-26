var g = document.createElement("INPUT");
g.setAttribute("type", "text");
g.setAttribute("id", "name");
document.body.appendChild(g);

async function myFunction() {
  var inputstring = document.getElementById("name").value;

  const response = await fetch(
    `https://api.nationalize.io/?name=${inputstring}`,
    { method: "GET" }
  );

  const result = await response.json();
  const country1 = result.country[0]?.country_id;
  const country2 = result.country[1]?.country_id;
  const probability1 = result.country[0]?.probability;
  const probability2 = result.country[1]?.probability;
  console.log(country1, country2);
  const ol = document.createElement("ol");
  if (country1) {
    const l1 = document.createElement("li");
    l1.innerText = country1 + probability1;
    ol.appendChild(l1);
  }else{
   const p= document.createElement("p")
   p.innerText="no result found"
    document.body.appendChild(p)
  }

  if (country2) {
    const l2 = document.createElement("li");
    l2.innerText = country2 + probability2;
    ol.appendChild(l2);
  }
  document.body.appendChild(ol);
}
