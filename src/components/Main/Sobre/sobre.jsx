//UI
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Sobre () {
    return (
        <>
        <div className='overflow-hidden justify-content-around d-lg-flex bg-success mt-5'>
            <div className='p-5'>
            <h2 className='fw-bold mb-5 text-start'>Este projeto é open-source ou seja de código aberto se caso você se interessou pela ideia ou encontrou algum possível bug.</h2>
            <h2 className='fw-bold mb-5 text-start'>Entre em contato comigo ou faça uma PR (pull request) pro projeto.</h2>
            <div className='d-flex align-items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="black" className="me-2 bi bi-envelope-arrow-up-fill" viewBox="0 0 16 16">
            <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zm.192 8.159 6.57-4.027L8 9.586l1.239-.757.367.225A4.49 4.49 0 0 0 8 12.5c0 .526.09 1.03.256 1.5H2a2 2 0 0 1-1.808-1.144M16 4.697v4.974A4.5 4.5 0 0 0 12.5 8a4.5 4.5 0 0 0-1.965.45l-.338-.207z"/>
            <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.354-5.354 1.25 1.25a.5.5 0 0 1-.708.708L13 12.207V14a.5.5 0 0 1-1 0v-1.717l-.28.305a.5.5 0 0 1-.737-.676l1.149-1.25a.5.5 0 0 1 .722-.016"/>
            </svg>
            <a target='__blank' href='mailto:luizzleandro827@gmail.com' className='text-dark'>Enviar um email</a>
            </div>
            <div className='d-flex align-items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="black" className="me-2 bi bi-git" viewBox="0 0 16 16">
            <path d="M15.698 7.287 8.712.302a1.03 1.03 0 0 0-1.457 0l-1.45 1.45 1.84 1.84a1.223 1.223 0 0 1 1.55 1.56l1.773 1.774a1.224 1.224 0 0 1 1.267 2.025 1.226 1.226 0 0 1-2.002-1.334L8.58 5.963v4.353a1.226 1.226 0 1 1-1.008-.036V5.887a1.226 1.226 0 0 1-.666-1.608L5.093 2.465l-4.79 4.79a1.03 1.03 0 0 0 0 1.457l6.986 6.986a1.03 1.03 0 0 0 1.457 0l6.953-6.953a1.03 1.03 0 0 0 0-1.457"/>
            </svg>
            <a target='__blank' href='https://github.com/leanluizz/to-do-list-download-pdf' className='text-dark'>Projeto</a>
            </div>
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="black" className="me-2 bi bi-link-45deg" viewBox="0 0 16 16">
        <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1 1 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4 4 0 0 1-.128-1.287z"/>
        <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z"/>
        </svg>
                <a target='__blank' className='text-dark text-start' href='https://docs.github.com/pt/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests'>O que é uma pull request (PR)?</a>
            </div>
            </div>
        </div>
        </>
    )
}