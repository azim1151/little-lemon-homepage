export default function PersonCard({img,text}){
    return (
        <article className='card'>
            <h3>Rating *****</h3>
        <img 
        className="avatar"
        src={img.src} 
        alt={img.name}/>
        <h2>{img.name}</h2>
       <p>{text} </p>
    </article>
    )
    }