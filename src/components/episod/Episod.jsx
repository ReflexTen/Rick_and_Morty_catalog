import React from 'react'

const Episod = ({ nameSeries, airDate, seriesNumber }) => {
  return (
    <div>
      <h1>{nameSeries}</h1>
      <h2>{airDate}</h2>
      <div>{seriesNumber}</div>
    </div>
  )
}

export default Episod
