let num1=''
let num2=''
let signIra=''
let signMain=''
let firstNum=true
let secondNum=false
let score=''
let ira=true
let afterEqual=false

function num(operand){
    if(firstNum){
        num1+=operand
        numStr1=''+num1
        numStr2=''+num2
        document.getElementById('total').innerHTML=signIra+numStr1+signMain+numStr2
        ira=false
    }
    if(secondNum ){
        num2+=operand
        numStr1=''+num1
        numStr2=''+num2
        document.getElementById('total').innerHTML=signIra+numStr1+signMain+numStr2
    }
    if(afterEqual){
        
        num2=''
        signIra=''
        signMain=''
        firstNum=true
        secondNum=false
        score=''
        afterEqual=false
        ira=false
        num1=''
        num1+=operand
        document.getElementById('total').innerHTML=num1
    }
    document.getElementById('numOne').innerHTML=num1
    document.getElementById('numTwo').innerHTML=num2
}
function sign(operand){
     
    if(firstNum && ira==false){ 
        document.getElementById('oper').innerHTML=operand
        afterEqual=false
        signMain=operand
        secondNum=true
        firstNum=false
       
        }
    
        if(ira && (operand=='/' || operand=='*')){
            document.getElementById('total').innerHTML='error'
           
            setTimeout(function(){
               
                reset()
                
            },2000);

        }    
    if(firstNum && ira){
        document.getElementById('oper').innerHTML=operand
  
        signIra=operand
        ira=false
        document.getElementById('total').innerHTML=signIra+numStr1+signMain+numStr2
    }
    if(secondNum){
       
        signMain=''
        signMain+=operand
        document.getElementById('oper').innerHTML=operand
     }
    
    
     document.getElementById('numOne').innerHTML=num1
     document.getElementById('numTwo').innerHTML=num2
    
}
function equal(){   
     firstNum=true
     secondNum=false
     afterEqual=true
     document.getElementById('numOne').innerHTML=''
    document.getElementById('numTwo').innerHTML=''
     
    num1=eval(signIra+num1+signMain+num2)
    signMain=''
    document.getElementById('total').innerHTML=num1
    num2=''
    document.getElementById('oper').innerHTML='_'
    ira=false
    signIra=''
    
}
function reset(){
    document.getElementById('total').innerHTML='0'
    num1=''
    num2=''
    signIra=''
    signMain=''
    firstNum=true
    secondNum=false
    score=''
    ira=true
    afterEqual=false
    
     document.getElementById('oper').innerHTML='_'
     numStr1=''
     numStr2=''
}

