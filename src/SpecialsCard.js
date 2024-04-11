export default function SpecialsCard({img,text}){
return (
    <article className='card'>
    <img 
    src={img.src} 
    alt={img.name}/>
    <h2>{img.name}</h2>
   <p>{text} </p>
</article>
)
}