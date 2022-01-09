


const productos = [
    { id: '1', nombre: 'CUBIERTA MICHELIN', img: 'https://mlstaticquic-a.akamaihd.net/neumatico-dunlop-grandtrek-pt3-25555-r18-D_NQ_NP_756351-MLU29508057639_022019-F.jpg/', precio: '$1500', descripcion: 'Cubierta dura, perfil bajo, medidas...', stock: 4},
    { id: '2', nombre: 'CUBIERTA PIRELLI', img: '../src/assets/dunlop.jpg', precio: '$1700', descripcion: 'Cubierta dura, perfil bajo, medidas...', stock: 8},
    { id: '3', nombre: 'CUBIERTA BRIDGESTONE', img: 'acá va la imagen', precio: '$1100', descripcion: 'Cubierta dura, perfil bajo, medidas...', stock: 16},
    { id: '4', nombre: 'CUBIERTA FATE', img: 'acá va la imagen', precio: '$1000', descripcion: 'Cubierta dura, perfil bajo, medidas...', stock: 4},
    { id: '5', nombre: 'CUBIERTA YOKOHAMA', img: 'acá va la imagen', precio: '$2000', descripcion: 'Cubierta dura, perfil bajo, medidas...', stock: 12},
    { id: '6', nombre: 'CUBIERTA DUNLOP', img: 'acá va la imagen', precio: '$1800', descripcion: 'Cubierta dura, perfil bajo, medidas...', stock: 8},
]

export const getFetch = new Promise((resolve, reject) => {
    let condicion = true
    if(condicion){
        setTimeout(() => {
            resolve(productos)
        }, 2000)
    }else{
        reject('error')
    }
})