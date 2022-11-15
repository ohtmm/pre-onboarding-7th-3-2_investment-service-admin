export default function ContentLayout({ children }) {
  return (
    <main className='w-full h-4/5 bg-myGray overflow-y-scroll absolute top-20'>
      {children}{' '}
    </main>
  );
}
