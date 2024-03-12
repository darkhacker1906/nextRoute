"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const page = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then(response => {
        setItems(response.data.products);
      })
      .catch(error => {
        console.error('Error fetching items:', error);
      });
  }, []);
  console.log(items)
  return (
    <div>
      <h2>Items</h2>
      <ul className='ml-3'>
        {items.map(item => (
          <li key={item.id} className='flex gap-10'><div>{item.title}</div><div>{item.category}</div></li>
        ))}
      </ul>
    </div>
  );
};

export default page;
