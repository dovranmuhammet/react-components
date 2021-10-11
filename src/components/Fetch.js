import { React, useState, useEffect } from 'react'
import axios from 'axios'

const Fetch = () => {
  const [pics, setPics] = useState([])

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/photos')
      .then((response) => {
        console.log(response)
        setPics(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])
  return (
    <div>
      {pics.map((item) => (
        <img src={item.url} alt='pics' key={item.id} />
      ))}
    </div>
  )
}

export default Fetch
