import CadastroNavbar from '../componentes/cadastroComponents/CadastroNavbar'
import CadastroForms from '../componentes/cadastroComponents/CadastroForms'


function Cadastro() {
  return(
    <div className='min-h-screen bg-black'>
      <CadastroNavbar/>

      <main className='flex items-center justify-center bg-linear-to-b from-[#050505] to-[#90100B] min-h-[90vh]'>
        <CadastroForms/>
      </main>
    </div>


  )
}

export default Cadastro