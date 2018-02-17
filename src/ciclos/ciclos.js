function ExampleCiclos(){
  /*---- For of ----*/
  var models = ['Tesla','Toyota','Nissan'];
  for(let model of models){
    console.log(model);
  }



  /*---- Generadores ----*/
  // function *Contador(){
  //   var i = 0;
  //   while (true) {
  //     yield i;
  //     yield "Hola";
  //     yield "Mundo";
  //     i++;
  //   }
  // }
  // var contador = Contador();
  // console.log(contador.next());
  // console.log(contador.next());
  // console.log(contador.next());
  // console.log(contador.next());
}

export default ExampleCiclos;
