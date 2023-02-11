import { Outlet } from "react-router-dom"; 'react-router-dom';

const AuthLayouth = () => {
  return (
    <>
        <main className="container text-center mx-auto mt-5 md:mt-20 p-5 md:flex md:justify-center">
            <div className="md:w-2/3 lg:w-2/5">
              <Outlet />  
            </div>
        </main>
    </>
  )
}

export default AuthLayouth;