import LogoImg from '../../img/loginImg/Logo.png';
import LogoName from '../../img/loginImg/LogoName.png';

function LoginNavbar(){
    return(
        <header className="flex items-center justify-between bg-[050505] px-6 py-4 border-b border-[#050505] text-white">
           
            <div className="flex items-center gap-3">
               
                    <img src={LogoImg} alt="" className="h-12 w-auto object-contain"/>
                    
                    <img src={LogoName} alt="" className='h-8 w-auto object-contain'/>
             </div>

             <nav className="flex gap-6 text-sm"> 
                <a href="">Ajuda</a>
                <a href="">Início</a>
            </nav>
        </header>
    )
}
export default LoginNavbar