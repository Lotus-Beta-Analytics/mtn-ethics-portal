export const isChecked = (responses, index, option) => {
  const answer = responses?.filter(({ answer }, i) => answer == option);
  return answer?.length > 0 && answer[0]?.answer;
};
