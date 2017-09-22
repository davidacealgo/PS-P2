import Ember from 'ember';

export default Ember.Controller.extend({
  text:null,
  nombres:null,
  funciones:null,
  actions:{
    metodo_leerArchivo: function(evt) {
      var name=[];
      var texto=[" "];
      var tipoArchivo = [];
      var files = evt.target.files; // FileList objects
      for (var i = 0, f; f = files[i]; i++) {
        f = files[i];
        name[i]=files[i].name;
        var tex = '';
        tex = this.get('text');
        var t = this;
        var reader = new FileReader();

        reader.onload = function(e) {
            // get file content
            tex = e.target.result;
            for(var num_i=0; num_i<=name.length;num_i++){
              var j=0;
              if(num_i==1){
                texto[j]=texto[j]+'\n'+tex;
                j=j++;
              }
            }
            t.set('text',texto);
            //console.log(t.get('text'));
            document.getElementById('texto').innerHTML =  texto;
        }
        reader.readAsText(f,"UTF-8")
      }
      t.set('nombres',name);
      document.getElementById('texto').innerHTML = this.get('text');
    },

    metodo_contar: function(){
      var names = [];
      var metodos="";
      var extension = [];
      names=this.get('nombres');
      var texto = "";
      texto=this.get('text');
      var n = texto[0].indexOf("metodo_");
      var m = texto[0].lastIndexOf("metodo_");
      var puntos = texto[0].indexOf(":",n);
      var s=0;
      while(m>n){
        console.log(n);
        s=n;
        metodos=texto[0].substring(s,puntos);
        n = texto[0].indexOf("metodo_",s+1);
        puntos=texto[0].indexOf(":",n);
        console.log(metodos);
      }
      var num_lineasVacias=0;
      var texto_filas = texto.replace(/\n/g, '¬');
      var texto_filas1 = texto_filas.split("¬");
      for(var num_i=0; num_i<texto.length; num_i++){
        if(texto_filas1[num_i]===''){
          num_lineasVacias = num_lineasVacias+1;
        }
      }
      document.getElementById("texto_resultado").innerHTML = "El numero de lineas del programa son: ";
      document.getElementById("resultado").innerHTML =  texto_filas1.length - num_lineasVacias;
    },

  }
});
