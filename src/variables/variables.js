function ExampleVariables(){
  /*---- Constantes ----*/

  const LIMITE = 100;
  console.log('El valor de las constantes es de: '+LIMITE);



  /*---- Variables de Bloque ----*/

  // function mostrarProducto(){
  //   let auto = 'toyota'
  //   console.log('variable de la funcion: '+auto)
  // }
  // mostrarProducto()
  //
  // /*si probamos la variable fruta fuera de la funcion*/
  // /*(genera error)*/
  // console.log('variable de la funcion afuera: '+fruta);



  /*---- Variable de Bloque For ----*/

  // for(let i=0;i<10;i++){
  //   console.log('Auto: '+i)
  // }
  //
  // /*si probamos la variable (i) del ciclo for afuera*/
  // /*(genera error)*/
  // console.log(i)



  /*---- Mapas ----*/

  // var auto = new Map();
  // auto.set('name','Tesla');
  // auto.set('model','Model X');
  //
  // console.log(auto);
  // /*Obtienes el valor de name*/
  // console.log(auto.get('name'));
  // /*Verificas si existe la propiedad name*/
  // console.log(auto.has('name'));
  // /*Elimino la propiedad name*/
  // console.log(auto.delete('name'));


  /*---- Conjuntos ----*/

  // var modelos = new Set();
  //  modelos.add('Model S');
  //  modelos.add('Model E');
  //  modelos.add('Model X').add('Model Y');
  //
  //  /*view all modelos*/
  //  console.log(modelos);
  //  /*verificar si existe*/
  //  console.log(modelos.has('Model Y'));
  //  /*verificar el tamaño*/
  //  console.log(modelos.size);
  //  /*eliminar un elemento*/
  //  console.log(modelos.delete('Model Y'));
  //  /*verificar*/
  //  console.log(modelos);
  //
  //  /*accediendo desde un ciclo forEach*/
  //  modelos.forEach(
  //     model => console.log(model)
  //  );


  /*---- Destructuring ----*/

  // var { model, year, price } = {
  //   model:'Tesla Roadster',
  //   year:2017,
  //   price: 200000
  // }
  // console.log(model,year,price+'$');
  //
  // var [ model, year] = ['Toyota Hilux','2017'];
  //
  // console.log(model, year);

}

export default ExampleVariables;
