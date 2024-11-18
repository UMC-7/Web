import * as S from "./cardskeleton.style"

const CardSkeleton = ()=>{
    return(
        <S.Container>
            <S.CardMain/>
            <S.TextWrapper>
                <S.TitleBox/>
                <S.ContentBox/>
            </S.TextWrapper>
        </S.Container>
    )
}

export default CardSkeleton