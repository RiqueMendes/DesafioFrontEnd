function process(quant){
    var value = parseInt(document.getElementById("quant").value);
    value+=quant;
    if(value < 0){
      document.getElementById("quant").value = 1;
       total()
    }else{
    document.getElementById("quant").value = value;
     total()
    }
  }
  function process1(quant){
    var value = parseInt(document.getElementById("quant1").value);
    value+=quant;
    if(value < 0){
      document.getElementById("quant1").value = 1;
       total()
    }else{
    document.getElementById("quant1").value = value;
    total()
    }
  }
  function process2(quant){
    var value = parseInt(document.getElementById("quant2").value);
    value+=quant;
    if(value < 0){
      document.getElementById("quant2").value = 1;
      total()
    }else{
    document.getElementById("quant2").value = value;
    total()
    }
  }

  function total() {
    let num1 = document.getElementById("quant").value;
    let num2 = document.getElementById("quant1").value;
    let num3 = document.getElementById("quant2").value;
 

    let resultado = parseInt(num1) + parseInt(num2) + parseInt(num3);

    document.getElementById("total").value = resultado;

    

}
  