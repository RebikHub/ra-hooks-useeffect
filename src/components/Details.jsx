import React, { useEffect, useState } from 'react'

export default function Details({info}) {
  const [details, setDetails] = useState()
  const [load, setLoad] = useState(false)

  useEffect(() => {
    setLoad(true)
    console.log(process.env.REACT_APP_ID_URL + `${info.id}.json`);
    fetch(process.env.REACT_APP_ID_URL + `${info.id}.json`)
    .then(response => response.json())
    .then(data => {
      setDetails(data)
      setLoad(false)
    })
  }, [])

  if (load) {
    return <progress/>
  }

  return (
    <div className={`details ${!load && 'none'}`}>
      {/* <img src={details.url} alt={info.name} />
      <div className='name'>{info.name}</div>
      <div className='city'>{details.city}</div>
      <div className='company'>{details.company}</div>
      <div className='position'>{details.position}</div> */}
    </div>
  )
}
