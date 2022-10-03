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

    // En el desafio se menciona solo devolver el nombre completo pero no
    // un texto que lo acompanie, por lo tanto basta con solo devolver el string template
    getFullName() {
        return `${this.nombre} ${this.apellido}`;
    }
    

    // El desafio indica solo recibir el nombre de una mascota
    addMascota(nombre) {
        this.mascotas.push(nombre);
    }
    
    // El desafio mencioa RETORNAR la cantidad de mascotas
    countMascotas() {
        return this.mascotas.length;
    }
    
    addBook(nombre, autor) {
        this.libros.push({name: nombre, author:autor})
    }
    

    // EL desafio menciona retornar un array con los nombres
    // MUY BIEN el uso de map
    getBookNames(){
        return this.libros.map(e => e.name)     // Podrias omitir los parentesis
                                                // es mas legible 
    }
}


// Los consol.log los podemos utilizar en esta seccion
const usuario = new Usuario('Valentin','Alvarez');
console.log('Nombre completo: ', usuario.getFullName())

usuario.addMascota('Fido', 'Peter')
console.log('Total de mascotas: ', usuario.countMascotas())

usuario.addBook('Mi historias Biblicas', 'Testigos de Jehová')
usuario.addBook('Ensayo sobre la ceguera', 'Jose Saramago')
console.log('Libros: ', usuario.getBookNames())
