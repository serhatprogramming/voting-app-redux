import { useSelector } from "react-redux/es/hooks/useSelector";

const ResultDisplay = () => {
  const votes = useSelector((state) => state.votes);
  return (
    <div>
      <hr />
      <div>
        Yay: {votes.yay} Nay: {votes.nay} Neutral: {votes.neutral}
      </div>
    </div>
  );
};

export default ResultDisplay;
