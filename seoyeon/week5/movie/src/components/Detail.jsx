import styled from "styled-components"

const IMG_BASE_URL = import.meta.env.VITE_IMG_BASE_URL

const Detail=({movie, credits})=>{
    return(
        <>
        <DescriptionContainer name="description_container">
            <PosterContainer >
                <PosterImg poster_path={movie.poster_path}></PosterImg>
            </PosterContainer>
            <MovieDescriptionContainer>
                <MovieDescription style={{fontSize:"40px"}}>{movie.title}</MovieDescription>
                <MovieDescription style={{marginTop:"20px"}}>{movie.tagline}</MovieDescription>
                <MovieDescription style={{marginTop:"20px"}}>{movie.overview}</MovieDescription>
            </MovieDescriptionContainer>
        </DescriptionContainer>
        <h1 style={{position:"relative", color:"white", marginLeft:"25px"}}>출연</h1>
        <Credits list={credits.cast}></Credits>
        <h1 style={{position:"relative", color:"white", marginLeft:"25px", marginTop:"20px"}}>감독</h1>
        <Credits list={credits.crew}></Credits>
        </>
    )
}
export default Detail

const DescriptionContainer=styled.div`
    height: auto;   //컨텐츠의 높이에 맞춤
//    position: relative; ->static
`

const PosterImg=styled.img.attrs(props=>
    ({src:`${IMG_BASE_URL}${props.poster_path}`})
)`
    width:100%;
    height:100%;
    position:relative;
    object-position:center;
    object-fit:cover;
`
const PosterContainer =styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height:350px;
    overflow: hidden;
    max-height: 350px;
    border-radius: 10px;
`
const MovieDescriptionContainer =styled.div`
    height: 350px;
    width: 450px;
    position:relative;  //부모의 높이 설정
    top: 0;
    left: 0;
`
const MovieDescription=styled.text`
    margin-left: 20px;
    position: relative;
    color: white;
    display: block;
`

const Credits=(props)=>{
    //console.log(`cast:${props.list[0].name}`)
    return(
        <CreditContainer>
            {props.list.map((credit)=>
                <CreditItem>
                    <CreditProfileRoundView>
                        <CreditProfileImg profile_path={credit.profile_path}></CreditProfileImg>
                    </CreditProfileRoundView>
                    <text style={{color:"white", margin:"5px", fontSize:"15px", display:"block"}}>{credit.name}</text>
                    <text style={{color:"white", fontSize:"10px"}}>{credit.character}</text>
                </CreditItem>
            )}
        </CreditContainer>
    );
};

const CreditContainer=styled.div`
    margin-left: 25px;
    display: flex;
    flex-wrap: wrap;
    position: relative;
`
const CreditItem=styled.div`
    display: flex;
    flex-direction: column;
    width: 140px;
    position: relative;
    margin-top: 15px;
    align-items: center;
    box-sizing: border-box;
    padding-bottom: 35px;
`
const CreditProfileRoundView=styled.div`
    width: 100px;
    height: 100px;
    border-radius: 70%;
    overflow: hidden;
`
const CreditProfileImg=styled.img.attrs(props=>
({src: `${IMG_BASE_URL}${props.profile_path}`})
)`
    width:100%;
    height:100%;
    object-fit:cover;
`