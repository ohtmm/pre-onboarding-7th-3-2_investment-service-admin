import { dehydrate, QueryClient } from '@tanstack/react-query';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import ContentLayout from '../../components/Layout/ContentLayout';
import Sider from '../../components/Sider';
import fetchData from '../../src/lib/api/api';
import useGetAccounts, { MAX_PAGE } from '../../src/lib/hooks/useGetAccounts';
import formatDate from '../../src/lib/utils/formatDate';
import formatBroker from '../../src/lib/utils/formatBroker';
import formatAccountStatus from '../../src/lib/utils/formatAccountStatus';
import formatMoney from '../../src/lib/utils/formatMoney';

export default function Accounts(props) {
  const { accountsPerPage: accounts, setPageNum, pageNum } = useGetAccounts();

  const handleNextBtn = () => {
    if (pageNum === MAX_PAGE) {
      return;
    }
    setPageNum((prev) => prev + 1);
  };
  const handlePrevBtn = () => {
    if (pageNum === 1) {
      return;
    }
    setPageNum((prev) => prev - 1);
  };
  return (
    <div className='flex w-full'>
      <Sider />
      <div className='flex flex-1 items-stretch flex-wrap bg-myGray relative '>
        <Header title='투자계좌' />
        <ContentLayout>
          <button
            className='block w-8 h-8 absolute top-0 right-20 border-1 bg-myBlue text-white rounded-md'
            onClick={handlePrevBtn}
          >
            &lt;
          </button>
          <button
            className='block w-8 h-8 absolute top-0 right-10 border-1 bg-myBlue text-white rounded-md'
            onClick={handleNextBtn}
          >
            &gt;
          </button>
          <table className='bg-white font-normal text-sm'>
            <thead className='bg-myBeige'>
              <tr>
                <th>고객명</th>
                <th>브로커명</th>
                <th>계좌번호</th>
                <th>계좌상태</th>
                <th>계좌명</th>
                <th>평가금액</th>
                <th>입금금액</th>
                <th>계좌활성화</th>
                <th>계좌개설일</th>
              </tr>
            </thead>
            <tbody>
              {accounts?.map((account) => {
                return (
                  // TODO: 고객명, 계좌번호, 컴포넌트 분리
                  <tr key={account.uuid}>
                    <td>{account.user_id}</td>
                    <td>{formatBroker(account.broker_id)}</td>
                    <td>{account.number}</td>
                    <td>{formatAccountStatus(account.status)}</td>
                    <td>{account.name}</td>
                    <td>{formatMoney(account.assets)}</td>
                    <td>{formatMoney(account.payments)}</td>
                    <td>{account.is_active ? 'yes' : 'no'}</td>
                    <td>{formatDate(account.created_at)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </ContentLayout>
        <Footer />
      </div>
      <style jsx>
        {`
          table {
            border-collapse: collapse;
            border: 1px solid #f0f0f0;
            width: 95%;
            margin: 2.5rem auto;
          }
          th{
              border-collapse: collapse;
              border: 1px solid #f0f0f0;
              text-align: center;
              height: 2.5rem;
              color: #222;
            }
          tr,
          td {
              border-collapse: collapse;
              border: 1px solid #f0f0f0;
              text-align: right;
              height: 2.5rem;
              padding-right: 1rem;
            }
          }
        `}
      </style>
    </div>
  );
}

export async function getServerSideProps(context) {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(
    ['accounts', 1],
    async () => await fetchData('accounts', 1)
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
