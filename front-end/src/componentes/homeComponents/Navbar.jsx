import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import hamburguer from '../../img/homeImg/hamburguer.png'
import logoImg from '../../img/homeImg/logoImg.png'
import logoEsc from '../../img/homeImg/logoEsc.png'
import userIcon from '../../img/homeImg/user.png'

function Navbar({ setMenuAberto }) {

    const navigate = useNavigate()
    const [menuUser, setMenuUser] = useState(false)

    function handleLogout() {
        localStorage.removeItem('token')
        localStorage.removeItem('usuario')

        navigate('/login', { replace: true })
    }

    return (
        <div className='flex justify-between bg-linear-to-r from-black to-32% to-zinc-800 h-[6.25rem] p-10 relative'>

            {/* ESQUERDA */}
            <div className='flex items-center'>
                <button
                    type="button"
                    onClick={() => setMenuAberto(prev => !prev)}
                    className='cursor-pointer'
                >
                    <img src={hamburguer} alt="" className='pr-9 h-7' />
                </button>

                <img src={logoImg} alt="" />
                <img src={logoEsc} alt="" />
            </div>

            {/* DIREITA */}
            <div className='flex items-center relative'>

                <button
                    type="button"
                    onClick={() => setMenuUser(prev => !prev)}
                    className='cursor-pointer'
                >
                    <img src={userIcon} alt="" />
                </button>

                {/* DROPDOWN */}
                {menuUser && (
                    <div className='absolute right-0 top-12 bg-zinc-900 text-white p-3 rounded-md shadow-lg z-50'>

                        <button
                            type="button"
                            onClick={handleLogout}
                            className='hover:text-red-500 cursor-pointer'
                        >
                            Sair
                        </button>

                    </div>
                )}

            </div>

        </div>
    )
}

export default Navbar