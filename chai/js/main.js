const amount=document.getElementById('amount')
const person=document.getElementById('person')
const quality=document.getElementById('quality')
const total=document.getElementById('total-amount')

function calculate(){

    tip=((amount.value*quality.value)/(person.value)).toFixed(2);
    amount.value=''
    person.value=''
    quality.value=0
    if(tip ==='NaN'){
  
        total.innerHTML='Итог '+0+'$ каждому'
        showTotal();
    }
    else{
        total.innerHTML='Итог '+tip+'$ каждому'
        showTotal()
    }
}
function showTotal(){

    x=total
    x.className='show'
    setTimeout(function(){x.className=x.className.replace('show','');},3000)
}