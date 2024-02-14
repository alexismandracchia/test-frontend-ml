import React from 'react';
import './Detalle.css';

const Detalle = ({ producto }) => {
  return (
    <div className='container_base'>
      <div className='detail_breadcrumb'>
        {producto.categories?.join(' > ')}
      </div>
      <div className='detail'>
        <div class='row'>
          <div class='col-xs-8'>
            <div className='detail_image'>
              <img src={producto.picture} alt={producto.title} />
            </div>
          <div className='description_title'>
            Descripción del producto
          </div>
          <div className='description_text'>
            {producto.description}
          </div>
          </div>
          <div class='col-xs-4'>
            <div className='detail_condition'>
              {producto.condition === 'new' ? 'Nuevo' : 'Usado'} - {producto.sold_quantity} vendidos
            </div>
            <div className='detail_title'>
              {producto.title}
            </div>
            <div className='detail_price'>
              $ {producto.price.amount.toLocaleString('es-AR')} <span className='decimal'>00</span>
            </div>
            <button className='detail_button'>Comprar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detalle;
