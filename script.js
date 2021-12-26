const main = document.getElementById('main')
const plus = document.getElementById('plus')
const remove = document.getElementById('remove')
const reset = document.getElementById('reset')
let result = 0;


plus.addEventListener('click', () => {
      result += 1;
      main.innerHTML = result
})

reset.addEventListener('click', () => { 
    result = 0; 
    main.innerHTML = result
})

remove.addEventListener('click', () => {
      if(result>0 ){
            result -=1;
            main.innerHTML=result
      }
})