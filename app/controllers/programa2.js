import Ember from 'ember';

export default Ember.Controller.extend({
  text:null,
  nombres:null,
  funciones:null,
  actions:{
    metodo_leerArchivo: function(evt) {
      var name=[];
      var texto=[" "];
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
      var metodos="";
      var txt = "";
      var func=[];
      var s=0;
      var i = 0;
      var num_lineasVacias=0;
      txt=this.get('text');
      var primer_ocurrencia = txt[0].indexOf("metodo_");
      var ultima_ocurrencia = txt[0].lastIndexOf("metodo_");
      var puntos = txt[0].indexOf(":",ultima_ocurrencia);
      metodos=txt[0].substring(ultima_ocurrencia,puntos);
      while(ultima_ocurrencia>primer_ocurrencia){ //compara la ultima pcurrencia con la siguiente ocurrencia que encuentre
        s=primer_ocurrencia;
        puntos = txt[0].indexOf(":",primer_ocurrencia);
        metodos=txt[0].substring(s,puntos);
        if(metodos.length <20){
          func[i] = metodos;
          i=i+1;
        }
        primer_ocurrencia = txt[0].indexOf("metodo_",s+1);
        puntos=txt[0].indexOf(":",primer_ocurrencia);
      }
      this.set('funciones',func);
      var texto_filas = txt[0].replace(/\n/g, '¬');
      var texto_filas1 = texto_filas.split("¬");
      for(var num_i=0; num_i<texto_filas.length; num_i++){
        if(texto_filas1[num_i]===''){
          num_lineasVacias = num_lineasVacias+1;
        }
      }
      //document.getElementBy Id("texto_resultado").innerHTML = "Nombre de las clases:<br/>"+this.get('nombres') + "<br/> Nombre de las funciones: "+this.get('funciones');
      //document.getElementById("resultado").innerHTML =  "Número de lineas: "+ (texto_filas1.length - num_lineasVacias);
      return func;
    },

  }
});
