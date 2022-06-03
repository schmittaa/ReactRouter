import MovieCard from "./MovieCard";

function MoviesList ({Movies, title, rate}) {
    
    return(
            <div style={{marginTop:"20px", marginLeft:"150px"}}>
              {
                Movies.filter(el=>el.title.toLowerCase().includes(title.toLowerCase().trim()) 
              &&  el.rate>=rate).map(el=><MovieCard movie={el} key={el.id}/>)
              }
            </div>
    )}

export default MoviesList;