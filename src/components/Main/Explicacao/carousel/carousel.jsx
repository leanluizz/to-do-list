import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

//Videos
import Titulo from '../videos/titulo.mp4';
import CRUD from '../videos/crud.mp4';
import Cor from '../videos/cor.mp4';
import Tamanho from '../videos/tamanho.mp4';
import Fonte from '../videos/fonte.mp4';
import Alinhamento from '../videos/alinhamento.mp4';
import Wallpaper from '../videos/wallpaper.mp4';
import PDF from '../videos/PDF.mp4';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const titulo = document.querySelector('#tutorial-titulo');
 var nome = 'Como criar um título'
  
function PlayVideo(num) {
          // Cria um elemento de estilo
          var style = document.createElement('style');
        
          var button = document.querySelectorAll('.play-icon');
      
          //Adiciona o atributo controls nos vídeos
          var video = document.querySelectorAll('video')
          video.forEach((videos) => {
              videos.controls = true;

              videos.addEventListener('pause', () => {
                videos.controls = false;
                button.forEach((btn) => {
                    btn.style.display = 'block';
                })
               
                style.innerHTML = `
                video::-webkit-media-controls {
                  background-color: #00000056;
                }
              `;
          
              // Adiciona o elemento de estilo ao documento
              document.head.appendChild(style);

            });
            videos.addEventListener('fullscreenchange', () => {
                style.innerHTML = `
                video::-webkit-media-controls {
                  background-color: #00000056;
                }
              `;
            })
          })
  
          video[num].play()

          //Define o botão de play pra display none
          button.forEach((btn) => {
            btn.style.display = 'none';
          })
    
      
          // Define o conteúdo do estilo para remover o background-color dos controles de mídia
          style.innerHTML = `
            video::-webkit-media-controls {
              background-color: transparent !important;
            }
          `;
      
          // Adiciona o elemento de estilo ao documento
          document.head.appendChild(style);
          
}
  

  return (
    <Carousel interval={null} activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
      <div>
                <div className='m-5 d-flex align-items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="green" className="bi bi-collection-play-fill" viewBox="0 0 16 16">
                <path d="M2.5 3.5a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1zm2-2a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1zM0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6zm6.258-6.437a.5.5 0 0 1 .507.013l4 2.5a.5.5 0 0 1 0 .848l-4 2.5A.5.5 0 0 1 6 12V7a.5.5 0 0 1 .258-.437"/>
                </svg>
                <h4 className='m-2 text-start'>{nome}</h4>
                </div>
                <div className='video-container p-5'>
    <video className='w-100' id='tutorial-titulo'>
        <source src={Titulo} type="video/mp4" />
    </video>
    <svg onClick={() => PlayVideo(0)} xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="black" className="play-icon bi bi-play-circle-fill" viewBox="0 0 16 16">
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z"/>
    </svg>
</div>
            </div>
      </Carousel.Item>
      <Carousel.Item>
      <div>
                <div className='m-5 d-flex align-items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="green" className="bi bi-collection-play-fill" viewBox="0 0 16 16">
                <path d="M2.5 3.5a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1zm2-2a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1zM0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6zm6.258-6.437a.5.5 0 0 1 .507.013l4 2.5a.5.5 0 0 1 0 .848l-4 2.5A.5.5 0 0 1 6 12V7a.5.5 0 0 1 .258-.437"/>
                </svg>
                <h4 className='m-2 text-start'>{nome = 'Inserir, editar e excluir'}</h4>
                </div>
                <div className='video-container p-5'>
    <video className='w-100' id='tutorial-titulo'>
        <source src={CRUD} type="video/mp4" />
    </video>
    <svg onClick={() => PlayVideo(1)} xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="black" className="play-icon bi bi-play-circle-fill" viewBox="0 0 16 16">
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z"/>
    </svg>
</div>
            </div>
      </Carousel.Item>
      <Carousel.Item>
      <div>
                <div className='m-5 d-flex align-items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="green" className="bi bi-collection-play-fill" viewBox="0 0 16 16">
                <path d="M2.5 3.5a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1zm2-2a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1zM0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6zm6.258-6.437a.5.5 0 0 1 .507.013l4 2.5a.5.5 0 0 1 0 .848l-4 2.5A.5.5 0 0 1 6 12V7a.5.5 0 0 1 .258-.437"/>
                </svg>
                <h4 className='m-2 text-start'>{nome = 'Alterando a cor dos textos'}</h4>
                </div>
                <div className='video-container p-5'>
    <video className='w-100' id='tutorial-titulo'>
        <source src={Cor} type="video/mp4" />
    </video>
    <svg onClick={() => PlayVideo(2)} xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="black" className="play-icon bi bi-play-circle-fill" viewBox="0 0 16 16">
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z"/>
    </svg>
</div>
            </div>
      </Carousel.Item>
      <Carousel.Item>
      <div>
                <div className='m-5 d-flex align-items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="green" className="bi bi-collection-play-fill" viewBox="0 0 16 16">
                <path d="M2.5 3.5a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1zm2-2a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1zM0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6zm6.258-6.437a.5.5 0 0 1 .507.013l4 2.5a.5.5 0 0 1 0 .848l-4 2.5A.5.5 0 0 1 6 12V7a.5.5 0 0 1 .258-.437"/>
                </svg>
                <h4 className='m-2 text-start'>{nome = 'Alterando o tamanho dos textos na lista'}</h4>
                </div>
                <div className='video-container p-5'>
    <video className='w-100' id='tutorial-titulo'>
        <source src={Tamanho} type="video/mp4" />
    </video>
    <svg onClick={() => PlayVideo(3)} xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="black" className="play-icon bi bi-play-circle-fill" viewBox="0 0 16 16">
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z"/>
    </svg>
</div>
            </div>
      </Carousel.Item>
      <Carousel.Item>
      <div>
                <div className='m-5 d-flex align-items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="green" className="bi bi-collection-play-fill" viewBox="0 0 16 16">
                <path d="M2.5 3.5a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1zm2-2a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1zM0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6zm6.258-6.437a.5.5 0 0 1 .507.013l4 2.5a.5.5 0 0 1 0 .848l-4 2.5A.5.5 0 0 1 6 12V7a.5.5 0 0 1 .258-.437"/>
                </svg>
                <h4 className='m-2 text-start'>{nome = 'Alterando a fonte dos textos na lista'}</h4>
                </div>
                <div className='video-container p-5'>
    <video className='w-100' id='tutorial-titulo'>
        <source src={Fonte} type="video/mp4" />
    </video>
    <svg onClick={() => PlayVideo(4)} xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="black" className="play-icon bi bi-play-circle-fill" viewBox="0 0 16 16">
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z"/>
    </svg>
</div>
            </div>
      </Carousel.Item>
      <Carousel.Item>
      <div>
                <div className='m-5 d-flex align-items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="green" className="bi bi-collection-play-fill" viewBox="0 0 16 16">
                <path d="M2.5 3.5a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1zm2-2a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1zM0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6zm6.258-6.437a.5.5 0 0 1 .507.013l4 2.5a.5.5 0 0 1 0 .848l-4 2.5A.5.5 0 0 1 6 12V7a.5.5 0 0 1 .258-.437"/>
                </svg>
                <h4 className='m-2 text-start'>{nome = 'Alinhando os textos na lista'}</h4>
                </div>
                <div className='video-container p-5'>
    <video className='w-100' id='tutorial-titulo'>
        <source src={Alinhamento} type="video/mp4" />
    </video>
    <svg onClick={() => PlayVideo(5)} xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="black" className="play-icon bi bi-play-circle-fill" viewBox="0 0 16 16">
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z"/>
    </svg>
</div>
            </div>
      </Carousel.Item>
      <Carousel.Item>
      <div>
                <div className='m-5 d-flex align-items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="green" className="bi bi-collection-play-fill" viewBox="0 0 16 16">
                <path d="M2.5 3.5a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1zm2-2a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1zM0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6zm6.258-6.437a.5.5 0 0 1 .507.013l4 2.5a.5.5 0 0 1 0 .848l-4 2.5A.5.5 0 0 1 6 12V7a.5.5 0 0 1 .258-.437"/>
                </svg>
                <h4 className='m-2 text-start'>{nome = 'Inserindo um wallpaper'}</h4>
                </div>
                <div className='video-container p-5'>
    <video className='w-100' id='tutorial-titulo'>
        <source src={Wallpaper} type="video/mp4" />
    </video>
    <svg onClick={() => PlayVideo(6)} xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="black" className="play-icon bi bi-play-circle-fill" viewBox="0 0 16 16">
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z"/>
    </svg>
</div>
            </div>
      </Carousel.Item>
      <Carousel.Item>
      <div>
                <div className='m-5 d-flex align-items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="green" className="bi bi-collection-play-fill" viewBox="0 0 16 16">
                <path d="M2.5 3.5a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1zm2-2a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1zM0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6zm6.258-6.437a.5.5 0 0 1 .507.013l4 2.5a.5.5 0 0 1 0 .848l-4 2.5A.5.5 0 0 1 6 12V7a.5.5 0 0 1 .258-.437"/>
                </svg>
                <h4 className='m-2 text-start'>{nome = 'Convertendo pra PDF'}</h4>
                </div>
                <div className='video-container p-5'>
    <video className='w-100' id='tutorial-titulo'>
        <source src={PDF} type="video/mp4" />
    </video>
    <svg onClick={() => PlayVideo(7)} xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="black" className="play-icon bi bi-play-circle-fill" viewBox="0 0 16 16">
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z"/>
    </svg>
</div>
            </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;