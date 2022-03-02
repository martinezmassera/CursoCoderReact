export const productos = [
    {
        "id": 1,
        "title": "comida1",
        "price": 150,
        "pictureUrl": ""
    },
    {
        "id": 2,
        "title": "comida2",
        "price": 125,
        "pictureUrl": ""
    },
    {
        "id": 3,
        "title": "comida3",
        "price": 175,
        "pictureUrl": ""
    },
    {
        "id": 4,
        "title": "comida4",
        "price": 182,
        "pictureUrl": ""
    },
    {
        "id": 5,
        "title": "comida5",
        "price": 188,
        "pictureUrl": ""
    },
    {
        "id": 6,
        "title": "comida6",
        "price": 200,
        "pictureUrl": ""
    },
    {
        "id": 7,
        "title": "comida7",
        "price": 2850,
        "pictureUrl": ""
    },
    {
        "id": 8,
        "title": "comida8",
        "price": 250,
        "pictureUrl": ""
    },
    {
        "id": 9,
        "title": "comida9",
        "price": 1350,
        "pictureUrl": ""
    },
    {
        "id": 10,
        "title": "comida10",
        "price": 1585,
        "pictureUrl": null
    }
 ]
  
 const getFetch = new Promise((resolve, reject)=>{
      // tareas que realizaremos
      let url = 'fede.com'
      
      if (url === 'fede.com') {
        setTimeout(() => {
          resolve(productos)        
        }, 3000);
      }else{
        reject('400 not found')
      }
  })

  export default getFetch
