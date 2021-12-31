const productos = [
    { id: '1', nombre: 'Coneja Juana', img: 'acá va la imagen', precio: 1500, descripcion: 'Muñeco de lana, posibles colores: Beige o Blanco', stock: 5},
    { id: '2', nombre: 'AmongUs', img: 'acá va la imagen', precio: 1700, descripcion: 'Muñeco de lana, posibles modelos: Hulk, Mario Bros, Unicornio, Minions o Spiderman', stock: 5},
    { id: '3', nombre: 'Jirafa', img: 'acá va la imagen', precio: 1100, descripcion: 'Muñeco de lana, posibles colores: Amarillo, Azul o Verde', stock: 5},
    { id: '4', nombre: 'Gatito', img: 'acá va la imagen', precio: 1000, descripcion: 'Muñeco de hilo, posibles colores: Negro, Naranja o Gris', stock: 5},
    { id: '5', nombre: 'Unicornio con rulos', img: 'acá va la imagen', precio: 2000, descripcion: 'Muñeco de lana, posibles colores: Blanco o Rosa', stock: 5},
    { id: '6', nombre: 'Hada', img: 'acá va la imagen', precio: 1800, descripcion: 'Muñeco de hilo, Color único', stock: 5},
]

export const getFetch = new Promise((resolve, reject) => {
    
    if(true){
        setTimeout(() => {
            resolve(productos)
        }, 2000)
    }else{
        reject('Error')
    }
})