import Skeleton from "./Skeleton"

const SkeletonList = ({number}) => {
  return (
    new Array(number).fill(0).map((_, idx) => <Skeleton key={idx}/>)
  )
}

export default SkeletonList;
