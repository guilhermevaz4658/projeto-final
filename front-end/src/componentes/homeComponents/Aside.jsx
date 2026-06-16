function Aside({ telaAtual, setTelaAtual, menuAberto }) {

    return(
        <div>

            <aside className={`h-full flex flex-col bg-linear-to-b from-black to-70% to-red-800 text-white w-60 items-center gap-5 pt-5 transition-all duration-300 overflow-hidden
               ${menuAberto ? 'w-60 opacity-100' : 'w-0 opacity-0 pointer-events-none'} `}>

                <button
                    onClick={() => setTelaAtual('progresso')}
                    className={`
                        rounded-2xl
                        h-[3.75rem]
                        w-[12.625rem]
                        cursor-pointer
                        transition-all
                        duration-300

                        ${telaAtual === 'progresso'
                        ? 'bg-red-400 text-white'
                        : 'bg-red-600 text-white'}
                    `}
                >
                    <p>Progresso</p>
                </button>

                <button
                    onClick={() => setTelaAtual('cronograma')}
                    className={`
                        rounded-2xl
                        h-[3.75rem]
                        w-[12.625rem]
                        cursor-pointer
                        transition-all
                        duration-300

                        ${telaAtual === 'cronograma'
                        ? 'bg-red-400 text-white'
                        : 'bg-red-600 text-white'}
                    `}
                >
                    <p>Cronograma de treinos</p>
                </button>

                <button
                    onClick={() => setTelaAtual('casa')}
                    className={`
                        rounded-2xl
                        h-[3.75rem]
                        w-[12.625rem]
                        cursor-pointer
                        transition-all
                        duration-300

                        ${telaAtual === 'casa'
                        ? 'bg-red-400 text-white'
                        : 'bg-red-600 text-white'}
                    `}
                >
                    <p>Treino em casa</p>
                </button>

                <button
                    onClick={() => setTelaAtual('academia')}
                    className={`
                        rounded-2xl
                        h-[3.75rem]
                        w-[12.625rem]
                        cursor-pointer
                        transition-all
                        duration-300

                        ${telaAtual === 'academia'
                        ? 'bg-red-400 text-white'
                        : 'bg-red-600 text-white'}
                    `}
                >
                    <p>Treino na academia</p>
                </button>

                <button
                    onClick={() => setTelaAtual('corrida')}
                    className={`
                        rounded-2xl
                        h-[3.75rem]
                        w-[12.625rem]
                        cursor-pointer
                        transition-all
                        duration-300

                        ${telaAtual === 'corrida'
                        ? 'bg-red-400 text-white'
                        : 'bg-red-600 text-white'}
                    `}
                >
                    <p>Corrida</p>
                </button>

            </aside>

        </div>
    )
}

export default Aside