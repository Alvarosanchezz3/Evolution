import React from 'react'
import './Explore.css'

const Explore = () => {
  return (
    <div className='explore-container'>
      <h1>Nuestros modelos</h1>
      <div className='filter-car-container'>
        <section className='filter-container'>
            <h3>Tipo de combustible</h3>
            <div className='filter'>
                <input type="checkbox" name="" id="" /><label htmlFor="">Hybrid</label>   
            </div>
            <div className='filter'>
                <input type="checkbox" name="" id="" /><label htmlFor="">Gasoline</label>   
            </div>
            <div className='filter'>
                <input type="checkbox" name="" id="" /><label htmlFor="">Electric</label>   
            </div>
        </section>
        <div className="cars-container">
            
        </div>
      </div>
    </div>
  )
}

export default Explore