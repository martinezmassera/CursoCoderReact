import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { BsCart3 } from "react-icons/bs";

const ItemCount = ({ initial, stock, onAdd }) => {
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
    onAdd(count)
  }


  return (
    <div className="Contador">
      <Button variant="outline-secondary" onClick={restauno}> - </Button>
      <label className="cantidadAgregar"> {count} </label>
      <Button variant="outline-secondary" onClick={sumauno}> + </Button>
      <Button variant="outline-secondary" onClick={agregar}> <BsCart3 /></Button>
    </div>
  )
}

export default ItemCount