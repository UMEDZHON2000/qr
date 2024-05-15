// start to project
const btn = document.querySelector('.btn__nav');
const getVal = document.querySelector('.ueser_value')
const cardBlock = document.querySelector('.cards_block');
btn.addEventListener('click', (e) => {
    e.preventDefault(); 
    const val = getVal.value;
    const pureNumer = parseInt(val.match(/\d+/));
    let counter = pureNumer;
    const typeStr = val.slice(0, 4);
    const typeOprRes = typeOpr(typeStr);

    function typeOpr(val) {
        let isNum = parseInt(val);
        if (!isNum) return true;
        else return false;
    }



   if ( pureNumer && typeOprRes ) {

    for(let i = 0; i < 20; i++) {
        ++counter;
        let resCounter = counter - 1;
        const  result = typeStr + resCounter;
        const firstNumberLength = resCounter.toString().length;
        const firstNumber = resCounter.toString().slice(0, firstNumberLength - 4);


        const lastNumber = resCounter.toString().slice(-4);
     

        const cardItem = `
        <div class="card__item auxiliary_nav card">
                    <a href="#">
                        <img src="https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${result}" alt="item">
                    </a>
                    <span class="card_item__title">${firstNumber}<b>${lastNumber}</b></span>
                </div>
        
        `;

        cardBlock.insertAdjacentHTML('beforeend', cardItem)

    }
    
   } else {
    alert('incorecct type')
   }
})

