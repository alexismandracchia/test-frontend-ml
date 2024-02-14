import React from "react"
import { Link } from "react-router-dom"
import './Producto.css'
import shippingLogo from '../Assets/ic_shipping.png';

const styleImage = {
  width: '100%',
}

const Producto = ({
  id,
  title,
  price,
  picture,
  free_shipping
}) => {
  return (
    <Link to={`/producto/${id}`} style={{textDecoration: 'none', color: '#333333'}}>
      <div className="card">
        <div className="container_image">
          <img src={picture} alt={title} style={styleImage} />
        </div>
        <div className="container_detail">
          <div className="price">
            <div>$ {price.amount}</div>
            {free_shipping && <img src={shippingLogo} alt='Envio gratis' className="shipping-logo" />}
          </div>
          <div className="title">{title}</div>
        </div>
      </div>
    </Link>
  )
}

export default Producto
