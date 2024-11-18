import * as S from './Skeleton.style'

const Skeleton = () => {
    return (
        <S.Container>
            <S.Main/>
            <S.TextWrapper>
                <S.TitleBox/>
                <S.DescriptionBox/>
            </S.TextWrapper>
        </S.Container>
    );
};

export default Skeleton;