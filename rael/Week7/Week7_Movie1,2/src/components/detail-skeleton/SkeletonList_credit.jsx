import SkeletonCredit from "./Skeleton_credit"

const SkeletonListCredit = ({number}) => {
  return (
    new Array(number).fill(0).map((_, idx) => <SkeletonCredit key={idx}/>)
  )
}

export default SkeletonListCredit;
