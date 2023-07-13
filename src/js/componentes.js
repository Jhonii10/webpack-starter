import '../css/componentes.css'


export const saludar = (nombre)=>{
    console.log("creadndo etuiqueta html");
    const titulo = document.createElement('h1')
    titulo.innerHTML = `Hola ${nombre}, listo para un nuevo proyecto`
    document.body.append(titulo)
}
