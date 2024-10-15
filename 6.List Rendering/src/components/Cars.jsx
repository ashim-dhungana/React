import React from 'react'

const Cars = () => {
    const cars = [
        {
            name: 'Audi R8',
            price: '300000'
        },
        {
            name: 'BMW M8',
            price: '100000'
        }
    ]

  return (
    <ul>
        {cars.map(item => (
            <li key={item.name}>
                {item.name} - ${item.price}
            </li>
        ))}
    </ul>
  )
}

export default Cars