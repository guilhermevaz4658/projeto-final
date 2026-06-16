import LoginNavbar from '../componentes/loginComponents/LoginNavbar'
import LoginForms from '../componentes/loginComponents/LoginForms'


function Login() {
  return(
    <div className='min-h-screen bg-black'>
      <LoginNavbar/>

      <main className='flex items-center justify-center bg-linear-to-b from-[#050505] to-[#90100B] min-h-[90vh]'>
        <LoginForms/>
      </main>
    </div>


  )
}

export default Login