import React from 'react'

const Episod = ({ nameSeries, airDate, seriesNumber }) => {
  let numFormat = seriesNumber.slice(-2)
  let seasonNumFormat = seriesNumber.slice(2, 3)

  return (
    <li className="episod">
      <h1 className="episod__name">{nameSeries}</h1>
      <h2 className="episod__date">Release date: {airDate}</h2>
      <h2 className="episod__season">Season number: {seasonNumFormat}</h2>
      <div className="episod__num">Serial number: {numFormat}</div>
    </li>
  )
}

export default Episod
