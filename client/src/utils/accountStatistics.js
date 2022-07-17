// total, min, max, avg
const calcTransaction = (arr) => {
  const transArr = arr?.map((data) => data?.amount);

  //sum
  const sumTotal = arr
    ?.map((data) => data?.amount)
    .reduce((acc, curr) => {
      return Number(acc) + Number(curr);
    }, 0);

  const avg = sumTotal / 2;
  const min = Math.min(...transArr);
  const max = Math.max(...transArr);
  console.log(avg, min, max, sumTotal);
  return {
    sumTotal,
    avg,
    min,
    max,
  };
};

export default calcTransaction;
