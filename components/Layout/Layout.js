export default function Layout({ children }) {
  return (
    <>
      <div>{children}</div>
      <style jsx>
        {`
          div {
            width: 100%;
            height: 100vh;
            background-color: #eff2f5;
          }
        `}
      </style>
    </>
  );
}
