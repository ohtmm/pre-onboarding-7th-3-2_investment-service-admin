const formatMoney = (paymentsData) => {
  return parseInt(paymentsData).toLocaleString('ko-KR');
};

export default formatMoney;
