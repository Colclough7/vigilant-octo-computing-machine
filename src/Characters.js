import React from 'react';
import Character from './Character';

const Characters = ({characters,removeCharacter})=>{
    return(
        <section>
            <div className="title">
                <h2>Show Characters</h2>
                <div className="underline"></div>
            </div>
            <div>
                {characters.map((character)=>{
                    return(
                        <Character key={character.id} {...character} removeCharacter={removeCharacter}/>
                    )
                })}
            </div>
        </section>
    )
}





export default Characters