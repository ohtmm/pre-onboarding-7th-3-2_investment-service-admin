import Header from '../components/Header';
import ContentLayout from '../components/Layout/ContentLayout';
import Sider from '../components/Sider';
import Footer from '../components/Footer';

export default function User() {
  return (
    <div className='flex w-full'>
      <Sider />
      <div className='flex flex-1 items-stretch flex-wrap bg-myGray'>
        <Header title='김핀트님의 계좌 목록' />
        <ContentLayout>
          <h3 className='pl-8 mt-8 text-xl font-semibold'>사용자 정보</h3>
          <table className='bg-white font-normal'>
            <thead className='bg-myBeige'>
              <tr>
                <th>이름</th>
                <th>주소</th>
                <th>혜택정보수신</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>100</td>
                <td>200</td>
                <td>300</td>
              </tr>
            </tbody>
            <thead className='bg-myBeige'>
              <tr>
                <th>성별</th>
                <th>이메일</th>
                <th>가입경로</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>100</td>
                <td>200</td>
                <td>300</td>
              </tr>
            </tbody>
            <thead className='bg-myBeige'>
              <tr>
                <th>생년월일</th>
                <th>핸드폰</th>
                <th>가입 시각</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>100</td>
                <td>200</td>
                <td>300</td>
              </tr>
            </tbody>
          </table>
        </ContentLayout>
        <Footer />
      </div>
      <style jsx>
        {`
      table {
        width: 95%;
        height: 20rem;

        display: flex;
        margin: 1rem auto;
        border-collapse: collapse;
        border: 1px solid #f0f0f0;
      }
      th{
        display: flex;
        align-items: center;
        width: 8rem;
        height: 5rem;
        padding-left: 1rem;
          border-collapse: collapse;
          border: 1px solid #f0f0f0;
          text-align: left;
          color: #222;
        }
      th:nth-of-type(2){
        height: 10rem;
      }
      td {
        display: flex;
        align-items: center;
        justify-content: right;
        width: 11rem;
        height: 5rem;
        padding-right: 1rem;
        border-collapse: collapse;
        border: 1px solid #f0f0f0;
        }
      td:nth-of-type(2){
        height: 10rem;
      }
      }
    `}
      </style>
    </div>
  );
}
