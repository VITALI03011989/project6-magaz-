import React from 'react'

const Header = (props) => {
    return (<header>
        <div className='headerleft'>
            <img src='/comp.png' className='comp' alt='1' />
            <div className='headerinfo'>
                <h3>React shop</h3>
                <p>Компьютерный магазин</p>
            </div>
        </div>
        <ul className='hederLight'>
            <li onClick={props.onClickCart}><img src='/corzina.png' className='c' alt='1' /><span className='s'>  1205 $ </span></li>
            <li><img src='/avtorizacia.png' className='a' alt='1' /></li>
        </ul>
    </header>
    )}
export default Header