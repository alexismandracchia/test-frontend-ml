
import Producto from "./Producto"
import './Productos.css'

const Items = ({items, categories}) => {
  
  return (
    <div className="container_base">
      <div className="breadcrumb">
        <span>{categories.join(' > ')}</span>
      </div>
      <div className="results">
        {items.map(item => <Producto {...item} /> )}
      </div>
    </div>
  )

}

export default Items;
