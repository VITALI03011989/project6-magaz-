import React from 'react'

const Search = ({searchValue,setSearchValue}) => {
 
  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value)
   }

  return (
    <div className='content'>
        <h1>{searchValue ? `Поиск: "${searchValue}"` : 'Все ноутбуки'} </h1>
        <div >
          <input onChange={onChangeSearchInput} value={searchValue} className='search' placeholder='Поиск...' />
        </div>
      </div>
  )
}
export default Search