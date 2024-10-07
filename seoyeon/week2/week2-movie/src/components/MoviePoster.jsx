const IMAGE_BASE_URL="https://image.tmdb.org/t/p/w500"

const MoviePoster=(props)=>{
    
    return(
        <div key={props.id} className='moviecard'>
            <div className="overlay"/>
            <img 
              src={`${IMAGE_BASE_URL}${props.poster_path}`}
              style={{
                width:'160px',
                height:'100%',
                borderRadius:'10px',
                display:'inline',
                alt:props.title
              }}
            />
        </div>
    )
}
export default MoviePoster;