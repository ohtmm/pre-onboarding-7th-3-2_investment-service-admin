const accountStatus = {
  관리자확인필요: 9999,
  입금대기: 1,
  운용중: 2,
  투자중지: 3,
  해지: 4,
};

const accountStatusKeys = Object.keys(accountStatus);

export default function formatAccountStatus(statusNum) {
  return accountStatusKeys.find((key) => accountStatus[key] === statusNum);
}
