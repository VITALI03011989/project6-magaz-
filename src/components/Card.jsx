import React from 'react'


function Card ({image,title,price,onPlus})  {
const[isAdded,setIsAdded] = React.useState(false)

    const onClickPlus = () => {
         setIsAdded(!isAdded)
         onPlus()
    }
    return (
        <div className='card'>
        <img width={130} height={110} src={image} alt='1' />
        <p className='p'>{title}</p>
        <span>Цена:</span>
        <b>{price} $</b>
        <button   onClick={onClickPlus } className={isAdded ? 'button': 'button3'}>+</button>
    </div>
    )
}
export default Card

