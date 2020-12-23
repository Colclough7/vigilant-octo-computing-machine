import React,{useState,useEffect} from 'react'
import Loading from './Loading'
import Characters from "./Characters";


const url = `https://rickandmortyapi.com/api/character?page=`

function App() {
  //useState
  const [isLoading,setLoading] = useState(true)
  const [characters,setCharacters] = useState([])
  
  //removeCharacter
  const removeCharacter = (id)=>{
    const newCharacter = characters.filter((character)=>character.id !== id)
    return setCharacters(newCharacter)
  }
  
  //Promise/Fetch Data/try&catch
  const fetchCharacters = async ()=>{
    setLoading(true)
    let page = 1
    let newCharacter =[]
    let lastResults = []
  do{
    try {
      const response = await fetch(`${url}${page}`)
      const characters = await response.json()
      lastResults = characters
       characters.results.forEach((character)=>{
         const {id,name,image,species,status,origin} = character
         newCharacter.push({id,name,image,species,status,origin})
         setCharacters(newCharacter)
      })
     page++
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
    }while(lastResults.info.next !== null)
    setLoading(false)
  }
  
  
  
  //useEffect
  useEffect(()=>{
    fetchCharacters()
  },[])


  //Multiple returns
  if(isLoading){
    return(
      <main>
      <Loading/>
      </main>
    )
  }
  if(characters.length === 0){
    return(
      <div className="title">
        <h2>No Characters Left</h2>
        <button className="btn" onClick={fetchCharacters}>refresh Tours</button>
      </div>
    )
  }

  return(
    <main>
  <Characters characters={characters} removeCharacter={removeCharacter}/>
    </main>
  )
}

export default App;
