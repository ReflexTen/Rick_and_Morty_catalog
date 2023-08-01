import React from 'react'
import { useState, useEffect } from 'react'

const App = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [collectionSeasonOne, setCollectionSeasonOne] = useState([])
  const [collectionSeasonTwo, setCollectionSeasonTwo] = useState([])

  useEffect(() => {
    setIsLoading(true)

    fetch(`https://rickandmortyapi.com/api/episode?episode=S01`)
      .then(res => res.json())
      .then(json => {
        console.log(json.results)
        setCollectionSeasonOne(json.results)

        // console.log(collection)
      })
      .catch(err => alert(err))
      .finally(() => {
        setIsLoading(false)
      })

    fetch(`https://rickandmortyapi.com/api/episode?episode=S02`)
      .then(res => res.json())
      .then(json => {
        console.log(json.results)
        setCollectionSeasonTwo(json.results)

        // console.log(collection)
      })
      .catch(err => alert(err))
      .finally(() => {
        setIsLoading(false)
      })
  }, [])

  return (
    <div>
      <div>
        {/* <img
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt=""
        ></img> */}

        <div>
          Season 1
          <ul>
            {isLoading ? (
              <div className="loading">Идет загрузка ...</div>
            ) : (
              collectionSeasonOne.map(item => {
                return <li key={item.id}>{item.name}</li>
              })
            )}
          </ul>
        </div>

        <div>
          Season 2
          <ul>
            {isLoading ? (
              <div className="loading">Идет загрузка ...</div>
            ) : (
              collectionSeasonTwo.map(item => {
                return <li key={item.id}>{item.name}</li>
              })
            )}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App
