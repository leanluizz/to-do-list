//UI
import 'bootstrap/dist/css/bootstrap.min.css';

//Components
import Introducao from '../Main/Introducao/intro';
import Explicacao from '../Main/Explicacao/explicar';
import Exemplo from '../Main/Explicacao/exemplo';
import Duvidas from '../Main/Duvidas/duvidas';
import Sobre from '../Main/Sobre/sobre';

export default function Main(){
    return (
        <main>
        <Introducao />
        <Explicacao />
        <Exemplo />
        <Sobre />
        <Duvidas />
        </main>
    )
}