import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Episod from './components/episod/Episod'
import './App.css'

const App = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [searchValue, setSearchValue] = useState('')

  const [collectionSeasonOne, setCollectionSeasonOne] = useState([])
  const [collectionSeasonTwo, setCollectionSeasonTwo] = useState([])
  const [collectionSeasonThree, setCollectionSeasonThree] = useState([])
  const [collectionSeasonFour, setCollectionSeasonFour] = useState([])
  const [collectionSeasonFive, setCollectionSeasonFive] = useState([])

  const seasonsList = [
    collectionSeasonOne,
    collectionSeasonTwo,
    collectionSeasonThree,
    collectionSeasonFour,
    collectionSeasonFive,
  ]

  const [allSeries, setAllSeries] = useState([])

  const arr = []

  useEffect(() => {
    setIsLoading(true)

    axios
      .get('https://rickandmortyapi.com/api/episode?episode=S01')
      .then(res => {
        setCollectionSeasonOne(res.data.results)
        arr.push(...res.data.results)
      })

    axios
      .get('https://rickandmortyapi.com/api/episode?episode=S02')
      .then(res => {
        setCollectionSeasonTwo(res.data.results)
        arr.push(...res.data.results)
      })

    axios
      .get('https://rickandmortyapi.com/api/episode?episode=S03')
      .then(res => {
        setCollectionSeasonThree(res.data.results)
        arr.push(...res.data.results)
      })

    axios
      .get('https://rickandmortyapi.com/api/episode?episode=S04')
      .then(res => {
        setCollectionSeasonFour(res.data.results)
        arr.push(...res.data.results)
      })

    axios
      .get('https://rickandmortyapi.com/api/episode?episode=S05')
      .then(res => {
        setCollectionSeasonFive(res.data.results)
        arr.push(...res.data.results)
      })
      .finally(() => {
        setAllSeries([...arr])
        console.log(arr)
        setIsLoading(false)
      })
  }, [])

  // useEffect(() => {
  //   axios
  //     .get(`https://rickandmortyapi.com/api/episode/?name=${searchValue}`)
  //     .then(res => {
  //       console.log(res.data)
  //     })
  // }, [searchValue])

  return (
    <div className="wrapper">
      <input
        value={searchValue}
        onChange={e => setSearchValue(e.target.value)}
        className="search-input"
        placeholder="Поиск по названию..."
      />

      <div>
        {searchValue
          ? allSeries
              .filter(obj => {
                return obj.name
                  .toLowerCase()
                  .includes(searchValue.toLowerCase())
              })
              .map(item => {
                return (
                  <Episod
                    key={item.id}
                    nameSeries={item.name}
                    airDate={item.air_date}
                    seriesNumber={item.episode}
                  />
                )

                // <div key={item.id}>{item.name}</div>
              })
          : seasonsList.map((season, idx) => {
              return (
                <div>
                  Season {idx + 1}
                  <ul>
                    {isLoading ? (
                      <div className="loading">Идет загрузка ...</div>
                    ) : (
                      season.map(item => {
                        return (
                          <Episod
                            key={item.id}
                            nameSeries={item.name}
                            airDate={item.air_date}
                            seriesNumber={item.episode}
                          />
                        )
                      })
                    )}
                  </ul>
                </div>
              )
            })}
      </div>
    </div>
  )
}

export default App
