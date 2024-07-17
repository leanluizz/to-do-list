//UI
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Duvidas(){
    return(
        <>
        <div id='duvidas' className='m-lg-5 text-center text-lg-start'>
        <h2 className='space-mobile'>Dúvidas</h2>
        <div className='m-5'>
        <h4 className='text-start'>O que é o Tasks?</h4>
        <p className='text-start'>Tasks é um site com objetivo de você criar listas de tarefas, rotinas entre outros tipo de listas.</p>
        </div>
        <div className='m-5'>
        <h4 className='text-start'>Quais os tipos de imagens posso utilizar no papel de parede das listas?</h4>
        <p className='text-start'>É aceito qualquer tipo de imagem que o browser reconheça de preferência os mais comuns como o JPEG, JGP e PNG.</p>
        </div>
        <div className='m-5'>
        <h4 className='text-start'>Posso converter pra outros tipos de documentos ou somente PDF?</h4>
        <p className='text-start'>Não, o site converte as listas apenas pra documentos PDF no momento.</p>
        </div>
        </div>
        </>
    )
}