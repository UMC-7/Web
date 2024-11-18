import * as S from './Skeleton_credit.style'

const SkeletonCredit = () => {
    return (
        <S.Container>
            <S.IMG/>
            <S.TextWrapper>
                <S.TitleBox/>
                <S.DescriptionBox/>
            </S.TextWrapper>
        </S.Container>
    );
};

export default SkeletonCredit;