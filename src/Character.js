import React,{useState} from 'react';

let lorem =`Lorem ipsum dolor sit amet consectetur adipisicing elit. 
Laudantium quisquam consectetur placeat debitis est accusantium, ducimus exercitationem, 
natus perferendis ipsam accusamus tempore doloribus! Ipsam et rerum earum sit neque ipsa eligendi 
nam fuga voluptatem doloremque, dolorum corporis, eius alias quidem. At facere doloribus nobis 
dicta fugiat itaque nulla possimus, voluptatem fugit, adipisci, iure dignissimos deserunt. 
Quo, sequi obcaecati! Deleniti voluptates omnis repellat! Vero sequi necessitatibus illum culpa 
doloribus itaque molestias harum ratione. Dignissimos, dolore earum. Repellat obcaecati voluptatibus, 
autem corporis iste reprehenderit adipisci totam laudantium eligendi eius natus dolores fugiat, maxime 
hic ad saepe provident perspiciatis mollitia omnis? Incidunt iste beatae, quo quis nostrum illum ut 
ipsam obcaecati numquam excepturi mollitia deserunt vel alias reiciendis culpa ipsum doloribus dolorem 
ratione tempore minus repellendus quod porro eos fugit. Tenetur doloremque voluptatum eligendi adipisci odio,
necessitatibus dolorum quaerat ducimus dicta aperiam velit repellat maiores repellendus. Assumenda vel 
excepturi saepe autem. Quam sint impedit, aliquid iure non cupiditate possimus inventore velit nostrum deleniti. 
Sequi minima minus architecto obcaecati optio ad quod commodi deleniti omnis debitis libero ullam a nisi 
reprehenderit laudantium voluptatum, error aspernatur eos. Doloremque id aut cumque reiciendis officiis nulla, 
quisquam nihil rerum dolorum voluptatem! Exercitationem modi quae similique ullam numquam ipsa maiores perspiciatis 
reprehenderit natus est atque enim dicta illo at, sint placeat tempore nesciunt quisquam iure quam nihil.
 Aliquid tempora, nulla reprehenderit natus, sit repellat numquam corrupti labore quod recusandae ratione eaque maxime. 
 Nostrum ducimus omnis voluptate optio nam, aliquid blanditiis! Ducimus incidunt, consectetur eaque dolorum id consequatur 
 voluptatum doloremque ipsum autem necessitatibus, ullam saepe ab possimus molestiae blanditiis? Odit sapiente aliquid cumque, 
 doloremque aperiam ducimus repudiandae ut, saepe nobis ullam omnis. Autem corrupti repudiandae nobis similique, non ipsa deserunt
  dolores sit ipsum dolorem totam error alias maxime est odit, dignissimos inventore quibusdam minus id fuga? Ullam, sequi laboriosam.`



const Character = ({image,name,species,status,id,origin,removeCharacter})=>{
    const [readMore,setReadMore] = useState(false)
    return(
        <article className="single-tour">
        <img src={image} alt={name}/>
        <footer>
          <div className="tour-info">
            <h4 style={{color:"red"}}>Status:{status}</h4>
            <h4 style={{textAlign:"center"}}>{origin.name}</h4>
            <h4 className="tour-price">{name}</h4>
          </div>
          <p>
            {readMore?`${lorem}`:`${lorem.substring(0,100)}`}
          <button onClick={()=>setReadMore(!readMore)}>{readMore?`show less`:`read more`}</button>
          </p>
          <button onClick={()=>removeCharacter(id)} className="delete-btn">delete</button>
        </footer>
      </article>
    )
}


export default Character