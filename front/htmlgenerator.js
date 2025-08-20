    function generateHtml(){
        const rows = 30
        const cols = 99

        const body = document.body
        
        for (let r = 1 ; r <= rows ; r++){
            for (let c = 1 ; c <=cols ; c++){
                const cell = document.createElement('div')
                cell.classList.add('cell')

                if (r <= 10 ){
                    cell.classList.add('shamaim')
                } else if (r === 11){
                    cell.classList.add('deshe')
                } else {
                    cell.classList.add('adama')
                }

                body.appendChild(cell)
            }


        }






    }