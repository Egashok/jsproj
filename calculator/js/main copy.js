let check=3
let score=''
let itog=0
let sch=0

function num(operand){
  check=3
  sch=1
    score=score+String(operand)
    document.getElementById('total').innerHTML=score
  
}
function equal(){
    itog=eval(score)

    document.getElementById('total').innerHTML=itog

    score=itog
    check=3

}
function reset(){
    check=3
    itog=0
    score=''
    document.getElementById('total').innerHTML=0
}
function sign(oper){
    if(check==0){
                    
        score=score.slice(0, -1)
        score=score+String(oper)
        
        document.getElementById('total').innerHTML=score
        check=0
     }  
       
       
        if(check==3 && sch==1)
        {
           score=score+String(oper)
           document.getElementById('total').innerHTML=score

            check=0
         
        }
        if(check==3 && sch==0 && (oper=='+' || oper=='-' ))
        {
           score=score+String(oper)
           document.getElementById('total').innerHTML=score
        sch=1
        check=0
        }
        if(check==3 && sch==0 && (oper=='*' || oper=='/' ))
        {
           score=score+String(oper)
           document.getElementById('total').innerHTML=0+oper
           score=0+oper
           itog=eval(0+'oper'+score)
        sch=1
        check=0
        }
        // if(check==3 && sch==0 && (oper=='*' || oper=='/' )){ 
        //     document.getElementById('total').innerHTML="Error"
        // }
        
        
}