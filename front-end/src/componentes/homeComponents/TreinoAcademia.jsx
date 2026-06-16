import treinoAcademia from '../../img/homeImg/treinoAcademia.png'

function TreinoAcademia(){
    return(
        // h-full é para ocupar todo o espaço que sobrou da tela tirando o aside o header e o footer
        // overflow-y-auto overflow = excesso de conteudo com o espaço que sobrou| y = espaço quebra no eixo y = vertical
        // auto = aparece o scroll apenas na parte da tela que sobrou, so tem scroll na section principal do proprio conteudo
        <div className="h-full overflow-y-auto p-5 flex-1 flex flex-col items-center bg-black gap-5">
            <img src={treinoAcademia} alt="" className='rounded-2xl '/>
        </div>
    )
}

export default TreinoAcademia