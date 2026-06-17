import { useNavigate } from 'react-router-dom'

function CadastroForms(){
    
        const navigate = useNavigate()

    return(
        <div className="text-center">

            <h2 className="text-4xl font-bold leading-tight mb-10 text-white">Realize seu cadastro
            </h2>
            <form className="flex flex-col gap-4 items-center">
            
            <input type="text" placeholder="Nome" className=" bg-white w-72 p-3 text-black" />

            <input type="text" placeholder="E-mail" className="w-72 p-3 bg-white text-black" />
            
            <input type="text" placeholder="Senha" className="w-72 p-3  bg-white text-black" />

            <button type="submit" className=" bg-black text-red-500 px-10 py-3 rounded-full mt-4 ">Cadastrar</button>

            <p className="text-white mt-2"> Já possui uma conta?{" "}
            <span onClick={() => navigate('/login')} className="text-red-500 cursor-pointer hover:underline">Fazer login
            </span>
            </p>

            </form>
            </div>
    )
}
export default CadastroForms
