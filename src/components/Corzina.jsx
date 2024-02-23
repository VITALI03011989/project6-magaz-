import React from "react";

function Corzina({ items = [], onRemove, onClose }) {
  return (
    <div className="overlay">
      <div className="draiver">
        <div className="cor">
          <h2>Корзина</h2>
          <button className='button' onClick={onClose}>X</button>
        </div>
        <div className="cartItem">
          {items.map((item,index) => {
            return (
              <div key={index} className="cartcenter">
                <img width={120} height={110} src={item.image} alt="1" />
                <div className="r">
                  <p>{item.title}</p>
                  <b>{item.price}</b>
                </div>
                <div className="x">
                  <button className="button2" onClick={() => onRemove(item.id)}>x</button>
                </div>
              </div>
            );
          })}
        </div>
        <ul>
          <li>
            <span>Итого:</span>
            <div></div>
            <b> {items.price} $</b>
          </li>
          <li>
            <span> Налог 20%</span>
            <div></div>
            <b>142 $</b>
          </li>
        </ul>
        <button className="grenbutton">Оформить заказ</button>
      </div>
    </div>
  );
}
export default Corzina;
