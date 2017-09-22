import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:programa2', 'Unit | Controller | programa2', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

// Replace this with your real tests.
test('Probar clases', function(assert) {
  let controller = this.subject();
  var text = [];
  text[0] = "metodo_leerArchivo: function(evt){var vector_archivos = evt.target.files[0];var texto_contenido = '';var esto = this; if (vector_archivos) {var objeto_lector = new FileReader();objeto_lector.onload = function(objeto_evento){texto_contenido = objeto_evento.target.result;document.getElementById('texto').innerHTML = texto_contenido;esto.set('text', texto_contenido);};objeto_lector.readAsText(vector_archivos);}else {alert('Failed to load file');}},  metodo_generarMensaje: function(){this.set( 'mensaje', Math.random() );}});";
  controller.set('text',text);
  controller.send('metodo_contar');
  assert.strictEqual(controller.get('funciones')[0],"metodo_leerArchivo");
});
