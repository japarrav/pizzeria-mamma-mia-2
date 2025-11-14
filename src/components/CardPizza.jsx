import { formatPrice } from '../utils/formatPrice';
import './CardPizza.css';

const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <div className="card pizza-card">
      <img src={img} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        
        <div className="ingredients-section">
          <p className="ingredients-label">Ingredientes:</p>
          <p className="ingredients-list">
            🍕 {ingredients.join(', ')}
          </p>
        </div>
        
        <div className="price-section">
          <h6 className="price">Precio: ${formatPrice(price)}</h6>
        </div>
        
        <div className="button-group">
          <button className="btn btn-outline-dark btn-sm">Ver Más 👀</button>
          <button className="btn btn-dark btn-sm">Añadir 🛒</button>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;
