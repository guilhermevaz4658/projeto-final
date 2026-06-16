import treinoCasa from '../../img/homeImg/treinoCasa.png'

function TreinoCasa(){
    return(
        <div className='h-full overflow-y-auto p-5 flex-1 flex flex-col items-center bg-black gap-5'>
            <img src={treinoCasa} alt="" className='rounded-2xl' />
        </div>
    )
}

export default TreinoCasa