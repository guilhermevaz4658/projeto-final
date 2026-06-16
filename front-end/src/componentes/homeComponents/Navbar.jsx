import  hamburguer  from '../../img/homeImg/hamburguer.png'
import logoImg from '../../img/homeImg/logoImg.png'
import logoEsc from '../../img/homeImg/logoEsc.png'
import user from '../../img/homeImg/user.png'

function Navbar({setMenuAberto}){
    return(
        <div className='flex justify-between bg-linear-to-r from-black to-32% to-zinc-800 h-[6.25rem] p-10'>
            <div className='flex items-center'>
                <button 
                onClick={() => setMenuAberto(prev => !prev)}
                className='cursor-pointer'><img src={hamburguer} alt="" className='pr-9 h-7' /></button> 
                <img src={logoImg} alt="" />
                <img src={logoEsc} alt="" />
            </div>
            <div className='flex items-center'>
                <button className='cursor-pointer'><img src={user} alt="" className=''/></button>
            </div>
        </div>
    )
}

export default Navbar