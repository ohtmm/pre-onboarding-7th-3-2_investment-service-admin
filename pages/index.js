import Image from 'next/image';
import Footer from './../components/Footer';
import { AiOutlineUser, AiOutlineLogout, AiOutlineLock } from 'react-icons/ai';

export default function Login() {
  return (
    <div className='flex flex-wrap w-2/5 h-3/5 mx-auto relative top-20'>
      <h1 className='flex justify-evenly w-4/5 mx-auto justify-center items-center text-4xl font-bold text-myDarkBlue'>
        <Image
          src='/logo.png'
          alt='PREFACE Logo'
          width={50}
          height={50}
          className='rounded-md'
        />
        PREFACE
      </h1>

      <div className='flex justify-center flex-wrap w-full h-72 mt-12 bg-white shadow-md rounded-md'>
        <h2 className='flex items-center pl-4 w-full h-12 bg-myBeige border-b-2 border-myLightGray'>
          <AiOutlineUser className='mr-3' />
          로그인
        </h2>
        <form>
          <label htmlFor='id' className='inline-block ml-4'>
            <AiOutlineUser className='mr-3' />
          </label>
          <input
            type='text'
            id='id'
            placeholder='아이디를 입력하세요'
            className='w-4/5 h-8 mb-2 pl-4 border-2 border-myLightGray'
          />
          <label htmlFor='password' className='inline-block ml-4'>
            <AiOutlineLock className='mr-3' />
          </label>
          <input
            type='password'
            id='password'
            placeholder='비밀번호를 입력하세요'
            className='w-4/5 h-8 mt-2 mb-4 pl-4 border-2 border-myLightGray'
          />
          <button className='flex w-4/5 h-12 mx-auto mt-4 justify-center items-center bg-myBeigeGray border-2 border-myLightGray cursor-pointer'>
            <AiOutlineLogout className='mr-3' />
            로그인
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}
