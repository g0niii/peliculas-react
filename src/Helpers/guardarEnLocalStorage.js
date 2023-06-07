export const guardarEnLocalStorage = (clave, elemento) => {
    // Conseguir los elementos del local storage
    let elementos = JSON.parse(localStorage.getItem(clave));
  
    // Comprobar si es un array
    if (Array.isArray(elementos)) {
      // Añadir un elemento nuevo
      elementos.push(elemento);
    } else {
      // Crear un array con el nuevo elemento
      elementos = [elemento];
    }
  
    // Mostrar los elementos en la consola
    console.log(elementos);
  
    // Guardar en el localStorage
    localStorage.setItem(clave, JSON.stringify(elementos));
  
    // Devolver el objeto guardado
    return elemento;
  };