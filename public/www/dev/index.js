function fetchData(){
  fetch('/api/data')
  .then(response=>response.json())
  .then(data=>{
    let html='<h2>Device Data</h2><div class="data-grid">';
    for(const[key,value]of Object.entries(data)){
      html+=`<div class="data-item"><span class="data-label">${key}</span><span class="data-value">${value}</span></div>`;
    }
    html+='</div>';
    document.getElementById('dataDisplay').innerHTML=html;
  })
  .catch(error=>{
    console.error('Error fetching data:',error);
    document.getElementById('dataDisplay').innerHTML='<h2>Device Data</h2><p>Error loading data</p>';
  });
}
fetchData();
setInterval(fetchData,5000);
