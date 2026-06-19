import { useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

import Navbar from '../componentes/homeComponents/Navbar'
import Aside from '../componentes/homeComponents/Aside'
import Progresso from '../componentes/homeComponents/Progresso'
import TreinoCasa from '../componentes/homeComponents/TreinoCasa'
import TreinoAcademia from '../componentes/homeComponents/TreinoAcademia'
import Corrida from '../componentes/homeComponents/Corrida'
import Cronograma from '../componentes/homeComponents/Cronograma'

function Home() {

  const navigate = useNavigate()

  const token = localStorage.getItem('token')

  if (!token) {
    navigate('/login', { replace: true })
    return null
  }

  const [telaAtual, setTelaAtual] = useState('progresso')
  const [menuAberto, setMenuAberto] = useState(true)

  function renderizarConteudo() {
    switch (telaAtual) {
      case 'progresso':
        return <Progresso />
      case 'cronograma':
        return <Cronograma />
      case 'casa':
        return <TreinoCasa />
      case 'corrida':
        return <Corrida />
      case 'academia':
        return <TreinoAcademia />
      default:
        return <Progresso />
    }
  }

  return (
    <div className='h-screen flex flex-col overflow-hidden'>

      <Navbar setMenuAberto={setMenuAberto} /> 

      <div className='flex flex-1 overflow-hidden'>

        <Aside
          telaAtual={telaAtual}
          setTelaAtual={setTelaAtual}
          menuAberto={menuAberto}
        />

        <motion.div
          key={telaAtual}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='flex-1 bg-black h-full flex justify-center'
        >
          {renderizarConteudo()}
        </motion.div>

      </div>
    </div>
  )
}

export default Home