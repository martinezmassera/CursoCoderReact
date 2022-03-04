export const productos = [
    {
        "id": 1,
        "title": "comida1",
        "price": 150,
        "stock": 15,
        "pictureUrl": "./image/productos/camarones.jpg"
    },
    {
        "id": 2,
        "title": "comida2",
        "price": 125,
        "stock": 25,
        "pictureUrl": "./image/productos/ensalada_palta.jpg"
    },
    {
        "id": 3,
        "title": "comida3",
        "price": 175,
        "stock": 25,
        "pictureUrl": "./image/productos/ensalada.jpg"
    },
    {
        "id": 4,
        "title": "comida4",
        "price": 182,
        "stock": 25,
        "pictureUrl": "./image/productos/pastas.jpg"
    },
    {
        "id": 5,
        "title": "comida5",
        "price": 188,
        "stock": 25,
        "pictureUrl": "./image/productos/polo.jpg"
    },
    {
        "id": 6,
        "title": "comida6",
        "price": 200,
        "stock": 12,
        "pictureUrl": "./image/productos/sandwich.jpg"
    },
    {
        "id": 7,
        "title": "comida7",
        "price": 2850,
        "stock": 1,
        "pictureUrl": "./image/productos/torta.jpg"
    },
    {
        "id": 8,
        "title": "comida8",
        "price": 250,
        "stock": 22,
        "pictureUrl": "./image/productos/polo.jpg"
    },
    {
        "id": 9,
        "title": "comida9",
        "price": 1350,
        "stock": 40,
        "pictureUrl": "./image/productos/pastas.jpg"
    },
    {
        "id": 10,
        "title": "comida10",
        "price": 1585,
        "stock": 55,
        "pictureUrl": "./image/productos/camarones.jpg"
    }
 ]
  
 const ItemList = new Promise((res, rej)=>{

      let url = 'queco.com'
      
      if (url === 'queco.com') {
        setTimeout(() => {
          res(productos)        
        }, 2000);
      }else{
        rej('error 400')
      }
  })

  export default ItemList
