function generateHtml() {
  const rows = 30;
  const cols = 99;

  const body = document.body;

  for (let r = 1; r <= rows; r++) {
    for (let c = 1; c <= cols; c++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");

      if (r <= 10) {
        cell.classList.add("sky");
      } else if (r === 11) {
        cell.classList.add("deshe");
      } else if (r > 11 && r < 16 ){
        cell.classList.add("adama");
      }else if (r >= 16 && r <=28 ){
        cell.classList.add("avanim")
      }else {
        cell.classList.add('bedrock')
      }
      

      body.appendChild(cell);
    } 
  }
}

generateHtml()