const ResultDisplay = () => {
  const vote = { yay: 0, nay: 0, neutral: 0 };
  return (
    <div>
      <hr />
      <div>
        Yay: {vote.yay} Nay: {vote.nay} Neutral: {vote.neutral}
      </div>
    </div>
  );
};

export default ResultDisplay;
