import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CadastroForms() {
  const navigate = useNavigate();

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  async function handleSubmit(e) {e.preventDefault();

    try {
      const resposta = await fetch('http://localhost:3000/api/usuarios', {
        method: 'POST',
        headers: {'Content-Type': 'application/json',

        },
        body: JSON.stringify({
          nome,
          email,
          senha,
        }),
      });

      if (!resposta.ok) {
        alert('Erro ao cadastrar usuário');
        return;
      }

      alert('Cadastro realizado com sucesso!');
      navigate('/login');

    } catch (erro) {
      console.error(erro);
      alert('Erro ao conectar com o servidor');
    }
  }

  return (
    <div className="text-center">
      <h2 className="text-4xl font-bold leading-tight mb-10 text-white">
        Realize seu cadastro
      </h2>

      <form
        className="flex flex-col gap-4 items-center" onSubmit={handleSubmit}>

    <input type="text" placeholder="Nome" className="bg-white w-72 p-3 text-black" value={nome} onChange={(e) => setNome(e.target.value)} />

    <input type="email"  placeholder="E-mail" className="w-72 p-3 bg-white text-black" value={email} onChange={(e) => setEmail(e.target.value)} />

    <input type="password" placeholder="Senha" className="w-72 p-3 bg-white text-black" value={senha} onChange={(e) => setSenha(e.target.value)} />

    <button type="submit" className="bg-black text-red-500 px-10 py-3 rounded-full mt-4">Cadastrar</button>
    <p className="text-white mt-2"> Já possui uma conta?{' '}<span onClick={() => navigate('/login')} lassName="text-red-500 cursor-pointer hover:underline"> 
        Fazer login </span> </p>
      </form>
    </div>
  );
}

export default CadastroForms;

