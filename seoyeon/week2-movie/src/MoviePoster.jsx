
const MoviePoster=(props)=>{
    
    return(
        <div key={props.id} >
            <img 
              src={`https://image.tmdb.org/t/p/w500${props.poster_path}`}
              style={{
                width:'200px',
                height:'350px',
                display:'inline'
              }}
            />
          </div>
    )
}
export default MoviePoster;