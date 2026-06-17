import { useNavigate } from 'react-router-dom'

function LoginForms(){
    
    const navigate = useNavigate()

    return(
        <div className="text-center">

            <h2 className="text-5xl font-bold leading-tight mb-10 text-white">Less planning
                <br/>
                more progress.
            </h2>
            <form className="flex flex-col gap-4 items-center">

            <input type="text" placeholder="E-mail" className="w-72 p-3 bg-white text-black" />
            
            <input type="text" placeholder="Senha" className="w-72 p-3  bg-white text-black" />

            <button onClick={() => navigate('/home')} className=" bg-black text-red-500 px-10 py-3 rounded-full mt-4 cursor-pointer">Logar</button>

            <button type="button" onClick={() => navigate('/cadastro')} className="text-white hover:text-red-500 cursor-pointer">Não possui uma conta? Cadastre-se</button>
            
            </form>
            </div>
    )
}
export default LoginForms
