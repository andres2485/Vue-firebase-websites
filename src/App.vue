<template>
  <div id="app">
    <nav class="navbar navbar-dark bg-primary">
        <a href="/" class="navbar-brand">VueJs FIrebase</a>
    </nav>
    <div class="container">
      <div class="row mt-5">
          <div class="col sm-4">
              <div class="card">
                <div class="card-header">
                  <h3>Agrega nuevo WebSite</h3>
                </div>
                <div class="card-body">
                  <form @submit.prevent="addWebsite">
                      <div class="form-group">
                        <input type="text" class="form-control mb-2" v-model="nombre" placeholder="Nombre">
                      </div>
                      <div class="form-group">
                        <input type="text" class="form-control mb-2" v-model="autor" placeholder="Autor">
                      </div>
                      <div class="form-group">
                        <input type="text" class="form-control mb-2" v-model="url" placeholder="Url">
                      </div>
                      <button type="submit" class="btn btn-primary">Guardar</button>
                      <button type="button" class="btn btn-danger" @click="reset">Limpiar</button>
                  </form>
                  
                </div>

              </div>
          </div>
          <div class="col sm-8 text-center">
              <img src="./assets/logo.png">
                <div class="card">
                  <div class="card-header">
                    <h3>Lista de WebSites</h3>
                  </div>
                  <div class="card-body">
                     <table class="table table-striped table-bordered">
                       <thead>
                         <th>Nombre</th>
                         <th>Autor</th>
                         <th>Acciones</th>
                       </thead>
                       <tbody>
                         <tr v-for="item in websites" v-bind:key="item.id">
                          <td>
                            <a v-bind:href="item.data.url" target="_blank">{{item.data.nombre}}</a>
                          </td>
                          <td>
                            {{item.data.autor}}
                          </td>
                          <td>
                            <button type="button" class="btn btn-danger" @click="deleteWebsite(item.id)">Eliminar</button>
                            <button type="button" class="btn btn-success" @click="updateWebsite(item.id)">Actualizar</button>
                          </td>
                          
                        </tr>


                       </tbody>


                     </table>
                  
                  </div>

              </div>
          </div>



      </div>


    </div>
  
   
  </div>
</template>

<script>
import toastr from 'toastr'
export default {
  name: 'App',
 
  data() {
    return {
     
        nombre:null,
        autor:null,
        url:null,
         websites:[],

       
    }
  },

  created(){
    this.obtener()
  },
  methods:{

    obtener(){
       this.websites=[],
      colecion.get()
    .then((r) => r.docs.map((item)=> this.websites.push({id:item.id, data:item.data()})))
    console.log(this.websites);
    },
    addWebsite(){
       colecion.add({nombre:this.nombre, autor:this.autor,url:this.url}).then(()=> this.obtener())
       toastr.success('Elemento Agregado')
       this.nombre='',
      this.autor='',
       this.url=''
      //console.log(this.newWebsite);
    },
     deleteWebsite(website){
      if(confirm('estas seguro de eliminar este item')){
      colecion.doc(website).delete().then(()=> this.obtener())
      toastr.error('Elemento eliminado')
      }
    },
     updateWebsite(website){
      colecion.doc(website).set({nombre:this.nombre,autor:this.autor,url:this.url}).then(()=> this.obtener())
      toastr.success('Modificado con Exito ')

    },
    reset(){
      this.nombre='',
      this.autor='',
      this.url=''
    }
   
  }
  
}
</script>

<style>
#app{

 background: #0f0c29;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #24243e, #302b63, #0f0c29);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #24243e, #302b63, #0f0c29); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

height: 100vh;
}
</style>
