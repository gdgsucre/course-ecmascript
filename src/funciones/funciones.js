function ExampleFunciones(){
  /*---- Parámetros por default ----*/
  function venderAuto(model = "ninguno", quantity = 0){
    console.log(model,quantity);
  }
  venderAuto();


  /*---- Parámetros rest o agrupados ----*/
  // function venderAuto( ...models ){
  //   console.log(models)
  // }
  // venderAuto("Tesla","Toyota","Nissan","Suzuki");


  /*---- Parámetros spread o distribuidos ----*/
  // function venderAuto( model, quantity, type ){
  //   console.log( model, quantity, type )
  // }
  // var cart = ['Tesla Model X',1,'Electronic'];
  // venderAuto(...cart);


  /*---- Arrow Function ----*/
  // var multiplicar = (n1,n2) => n1*n2;
  //
  // var suma = (n1,n2) => {
  //   return multiplicar(n1,n2) + multiplicar(n1,n2);
  // }
  //
  // console.log(suma(2,2));
}
export default ExampleFunciones;
