
import Producto from "./Producto"
import './Productos.css'

const Items = ({items}) => {
  
  return (
    <div className="container_base">
      <div className="results">
        {items.slice(0, 4).map(item => <Producto {...item} /> )}
      </div>
    </div>
  )

}

export default Items;
