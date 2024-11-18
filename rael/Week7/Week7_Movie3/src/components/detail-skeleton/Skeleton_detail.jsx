import * as S from './Skeleton_detail.style'
import SkeletonListCredit from './SkeletonList_credit';

const Skeleton_detail = () => {
    return (
        <>
            <S.DetailContainer/>
            <S.CreditContailner>
                <h3>감독/출연</h3>
                <h5>감독</h5>
                <SkeletonListCredit number={1}/>
                <h5>출연</h5>
                <S.SkeletonList>
                    <SkeletonListCredit number={10}/>
                </S.SkeletonList>
                <h5>제작진</h5>
                <S.SkeletonList>
                    <SkeletonListCredit number={10}/>
                </S.SkeletonList>
            </S.CreditContailner>
        </>
    );
};

export default Skeleton_detail;