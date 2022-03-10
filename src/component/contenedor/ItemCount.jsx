import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Imagen from '../CartWidget/CartWidget';

const ItemCount = ({ initial, stock }) => {
    const [count, setCount] = useState(initial)
    const sumauno = () => {
        if (count < stock) {
          setCount(count + 1)
        }
      }
      const restauno = () => {
        if (count > initial) {
          setCount(count - 1)
        }
      }
    
      const agregar = () => {
      }

      
    return (
        <div className="Contador"> 
            <Button variant="outline-secondary" onClick={restauno}> - </Button>
            <label className="cantidadAgregar"> {count} </label>
            <Button variant="outline-secondary" onClick={sumauno}> + </Button>
            <Button variant="outline-secondary" onClick={agregar}> <Imagen /></Button>
            </div>
    )
}

export default ItemCount