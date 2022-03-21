import React, { useEffect, useState } from 'react'

export default function Details({info}) {
  const [desc, setDesc] = useState({
    details: {
      city: '',
      company: '',
      position: ''
    }
  })
  const [load, setLoad] = useState(false)
  const [id, setId] = useState(0)

  useEffect(() => {
    if (info.id) {
      setId(info.id)
      setLoad(true)
    }
  }, [info])

  async function fetchDetails(url) {
    const response = await fetch(url)
    const data = await response.json()
    setDesc(data)
    setLoad(false)
  }

  useEffect(() => {
    if (id !== 0) {
      fetchDetails(process.env.REACT_APP_ID_URL + `${id}.json`)
    }
  }, [id])

  if (load) {
    return <progress/>
  }

  return (
    <div className={`details ${id === 0 ? 'none' : ''}`}>
      <img src={desc.avatar} alt={desc.name} />
      <div className='description'>{desc.name}</div>
      <div className='description'>{`City: ${desc.details.city}`}</div>
      <div className='description'>{`Company: ${desc.details.company}`}</div>
      <div className='description last'>{`Position: ${desc.details.position}`}</div>
    </div>
  )
}
