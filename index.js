class Usuario {
    nombre; 
    apellido; 
    libros; 
    mascotas;
    constructor (nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = [];
        this.mascotas = [];

    }

    getFullName(){

        console.log(`Soy  ${this.nombre} ${this.apellido}`)
    }
    
    addMascota(name_dog, name_cat){
        this.mascotas.push(name_dog, name_cat)
    }
    
    countMascotas(){
        console.log(`El largo del array es de ${this.mascotas.length}`)
    }
    
    addBook(nombre, autor){
        this.libros.push({name: nombre, author:autor})
    }
    
    getBookNames(){
        console.log(this.libros.map((e)=> e.name))

    }

    
    
}

const usuario = new Usuario('Valentin','Alvarez');
usuario.getFullName()
usuario.addMascota('Fido', 'Peter')
usuario.countMascotas()
usuario.addBook('Mi historias Biblicas', 'Testigos de Jehová')
usuario.getBookNames()



