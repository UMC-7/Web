import styled from "styled-components";
import {StyledOutletLayout,StyledOutletFont} from "../components/OutletStyle";

const MoviesPage=()=>{
    return(
        <StyledOutletLayout>
            <StyledOutletFont>카테고리</StyledOutletFont>
            <MovieCategoryList/>
        </StyledOutletLayout>    )
}
export default MoviesPage

const MovieCategoryList=()=>{
    const categories=[
        {
            name:'현재 상영중인',
            path:'/moives/now-playing',
            url:'https://occ-0-8407-2219.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABaWdl6mqMLEV0Y2jKQGL6yiQ-HwtHJ-BqFJHnakE0MxpQo__to3Su0GtXo25k7nwW4O4TcIvyN78HNF8_qI0PCyoILzT1IXg7AAK.jpg?r=5fb'
        },
        {
            name:'인기있는',
            path:'/moives/popular',
            url:'https://image.tving.com/ntgs/contents/CTC/caip/CAIP1500/ko/20140626/P000141405.png/dims/resize/1280'
        },
        {
            name:'높게 평가받은',
            path:'/moives/top-rated',
            url:'https://occ-0-8407-2219.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABaWdl6mqMLEV0Y2jKQGL6yiQ-HwtHJ-BqFJHnakE0MxpQo__to3Su0GtXo25k7nwW4O4TcIvyN78HNF8_qI0PCyoILzT1IXg7AAK.jpg?r=5fb'
        },
        {
            name:'개봉예정',
            path:'/moives/up-coming',
            url:'https://occ-0-8407-2219.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABaWdl6mqMLEV0Y2jKQGL6yiQ-HwtHJ-BqFJHnakE0MxpQo__to3Su0GtXo25k7nwW4O4TcIvyN78HNF8_qI0PCyoILzT1IXg7AAK.jpg?r=5fb'
        }
    ]
    return(
        <MovieCategoryContainer>
            {categories.map(category=>
                <MovieCategoryCard text={category.name} url={category.url}/>
            )}
        </MovieCategoryContainer>
    )
}
const MovieCategoryContainer=styled.div`
    display: flex;
    width: 100%;
    overflow-x: auto;
    scrollbar-width: none;
`

const MovieCategoryCard=(props)=>{
    return(
    <StyledCategory>
        <StyledCategoryImg url={`${props.url}`}/>
        <StyledCategoryText>{props.text}</StyledCategoryText>
    </StyledCategory>
    )
}
const StyledCategoryImg=styled.img.attrs(props=>
    ({src:props.url})   //src 이미지 url 전달!! 
)`
    width:100%;
    height: 100%;
    position: absolute;
    border-radius:10px;
`

const StyledCategory=styled.div`
    position: relative;
    width: 270px;
    height: 150px;
    margin:10px;
    border-radius: 10px;
`
const StyledCategoryText=styled.div`
    position: absolute;
    font-size: 12px;
    bottom:0;
    color:white;
    background-color: black;
    opacity: 0.5;
    margin:5px;
`