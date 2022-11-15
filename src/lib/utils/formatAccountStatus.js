let ACCOUNT_STATUS = {
  관리자확인필요: 9999,
  입금대기: 1,
  운용중: 2,
  투자중지: 3,
  해지: 4,
};

export default function formatAccountStatus(statusNum) {
  const accountStatusKeys = Object.keys(ACCOUNT_STATUS);
  return accountStatusKeys.find((key) => ACCOUNT_STATUS[key] === statusNum);
}
