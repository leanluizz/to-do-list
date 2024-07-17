//Ui
import 'bootstrap/dist/css/bootstrap.min.css';

//Component
import Header from '../Header/header';
import Overlay from '../Overlay/overlay';

//Images
import Center from './images-icons/alinhamento-center.png';
import Start from './images-icons/alinhamento-start.png';
import End from './images-icons/alinhamento-end.png';

//React
import { useContext, useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

//JSPDF
import jsPDF from 'jspdf';

export default function CriarListas(){
    const [values, setValues] = useState('');
    const [items, setItems] = useState([]);
    const [editingIndex, setEditingIndex] = useState(null);
    const [themeColor] = useState('bg-success');
    const [textColor, setTextColor] = useState('text-dark');
    const [show, setShow] = useState(false);
    const [alignText, setAlignText] = useState('text-start');
    const [FontText, setFontText] = useState('');
    const [background, setbackground] = useState('');
    const [textSize, setTextSize] = useState(20);
    const [align, setAlign] = useState(20);
    const [title, setTitle] = useState('');
    const [reference, setreference] = useState(false)
    const [valueTitle, setValueTitle] = useState('')

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleInput = (e) => {
        setValues(e.target.value);
    }

    useEffect(() => {
        const handleKeyPress = (e) => {
            if (e.code === 'Enter') {
                if (editingIndex !== null) {
                    saveEdit();
                } else {
                    Insert();
                }
            }
        };

        window.addEventListener('keypress', handleKeyPress);
        return () => {
            window.removeEventListener('keypress', handleKeyPress);
        };
    }, [values, editingIndex]);


    const gerarPDF = () => {
        const doc = new jsPDF();
        const pageWidth = doc.internal.pageSize.width;
      //Adicionar imagem ao PDF
      doc.addImage(background, 'JPEG' || 'PNG', 0, 0, doc.internal.pageSize.getWidth(), doc.internal.pageSize.getHeight());
        // Função para definir o alinhamento do texto com base na escolha do usuário
        function setAlign(align) {
          switch (alignText) {
            case 'text-center':
              return pageWidth / 2 - 20; // Centraliza na largura da página
            case 'text-start':
              return 20; // Alinha à esquerda
            case 'text-end':
              return pageWidth - 20; // Alinha à direita
            default:
              return 20; // Centraliza por padrão
          }
        }
      
        // Função para adicionar texto ao PDF com alinhamento
        function addText(item, index) {
          const alignX = setAlign(alignText); // Obtém a posição X com base no alinhamento escolhido
          const yPos = 20 + (textSize < 50 ? index * 30 : index * 50); // Posição Y, ajustável conforme necessário
          doc.text(`${item}`, alignX, yPos);
        }
      
        // Define a cor do texto com base na escolha do usuário
        switch (textColor) {
          case 'text-danger':
            doc.setTextColor(255, 0, 0); // Vermelho
            break;
          case 'text-success':
            doc.setTextColor(0, 255, 0); // Verde
            break;
          case 'text-warning':
            doc.setTextColor(255, 255, 0); // Amarelo
            break;
          case 'text-primary':
            doc.setTextColor(0, 0, 139); // Azul escuro
            break;
          case 'text-purple':
            doc.setTextColor(128, 0, 128); // Roxo
            break;
          default:
            doc.setTextColor(0, 0, 0); // Preto
            break;
        }
      
        // Configurações de fonte e tamanho
        doc.setFontSize(textSize);
      
        // Adiciona cada item da lista ao PDF
        doc.text(title, pageWidth / 2 - 20, 10)
        items.forEach((item, index) => {
          addText(item, index);
        });
        
        // Salva o documento PDF com o nome especificado
        doc.save('lista-de-itens.pdf');
      };
      

    const changeColor = (color)  => {
        setTextColor(color)
      }
    const changeAlign = (align) => {
        setAlignText(align)
    }
    const changeFont = (font) => {
        setFontText(font)
    }
    const changeSize = (event) => {
        if (event.target.value <= 40) {
            setTextSize(event.target.value)
        }else{
            return null
        }
        
    }
    const changeBackground = (event) => {
        const file = event.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = (e) => {
            const imageUrl = e.target.result;
            setbackground(imageUrl);
            console.log(imageUrl);
          };
          reader.readAsDataURL(file);
        }
      };
    const Insert = () => {
        if (values.trim()) {
            setItems([...items, values]);
            setValues('');
        }
    }

    const Delete = (indexToDelete) => {
        setItems(items.filter((_, index) => index !== indexToDelete));
    }

    const startEdit = (index) => {
        setEditingIndex(index);
        setValues(items[index]);
    }

    const saveEdit = () => {
        const updatedItems = items.map((item, index) => 
            index === editingIndex ? values : item
        );
        setItems(updatedItems);
        setEditingIndex(null);
        setValues('');
    }
    return(
        <>
        <Header />
        <hr />
        <section>
        <div className={`d-none d-lg-flex align-items-center justify-content-around bg-gradient border border-1 border-success mb-5`}>
        <Overlay 
        title={'Alterar cor da lista'}
        svg={
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="green" className="bi bi-paint-bucket" viewBox="0 0 16 16">
            <path d="M6.192 2.78c-.458-.677-.927-1.248-1.35-1.643a3 3 0 0 0-.71-.515c-.217-.104-.56-.205-.882-.02-.367.213-.427.63-.43.896-.003.304.064.664.173 1.044.196.687.556 1.528 1.035 2.402L.752 8.22c-.277.277-.269.656-.218.918.055.283.187.593.36.903.348.627.92 1.361 1.626 2.068.707.707 1.441 1.278 2.068 1.626.31.173.62.305.903.36.262.05.64.059.918-.218l5.615-5.615c.118.257.092.512.05.939-.03.292-.068.665-.073 1.176v.123h.003a1 1 0 0 0 1.993 0H14v-.057a1 1 0 0 0-.004-.117c-.055-1.25-.7-2.738-1.86-3.494a4 4 0 0 0-.211-.434c-.349-.626-.92-1.36-1.627-2.067S8.857 3.052 8.23 2.704c-.31-.172-.62-.304-.903-.36-.262-.05-.64-.058-.918.219zM4.16 1.867c.381.356.844.922 1.311 1.632l-.704.705c-.382-.727-.66-1.402-.813-1.938a3.3 3.3 0 0 1-.131-.673q.137.09.337.274m.394 3.965c.54.852 1.107 1.567 1.607 2.033a.5.5 0 1 0 .682-.732c-.453-.422-1.017-1.136-1.564-2.027l1.088-1.088q.081.181.183.365c.349.627.92 1.361 1.627 2.068.706.707 1.44 1.278 2.068 1.626q.183.103.365.183l-4.861 4.862-.068-.01c-.137-.027-.342-.104-.608-.252-.524-.292-1.186-.8-1.846-1.46s-1.168-1.32-1.46-1.846c-.147-.265-.225-.47-.251-.607l-.01-.068zm2.87-1.935a2.4 2.4 0 0 1-.241-.561c.135.033.324.11.562.241.524.292 1.186.8 1.846 1.46.45.45.83.901 1.118 1.31a3.5 3.5 0 0 0-1.066.091 11 11 0 0 1-.76-.694c-.66-.66-1.167-1.322-1.458-1.847z"/>
            </svg>
        }
        content={
            <>
            <div>
                <div onClick={() => changeColor('text-danger')} className='cursor-pointer p-3 text-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" className="bi bi-circle-fill" viewBox="0 0 16 16">
                <circle cx="8" cy="8" r="8"/>
                </svg>
                </div>

                 <div onClick={() => changeColor('text-success')} className='cursor-pointer p-3 text-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="green" className="bi bi-circle-fill" viewBox="0 0 16 16">
                <circle cx="8" cy="8" r="8"/>
                </svg>
                </div>

                 <div onClick={() => changeColor('text-primary')} className='cursor-pointer p-3 text-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="darkblue" className="bi bi-circle-fill" viewBox="0 0 16 16">
                <circle cx="8" cy="8" r="8"/>
                </svg>
                </div>

                 <div onClick={() => changeColor('text-purple')} className='cursor-pointer p-3 text-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="purple" className="bi bi-circle-fill" viewBox="0 0 16 16">
                <circle cx="8" cy="8" r="8"/>
                </svg>
                </div>

                 <div onClick={() => changeColor('text-warning')} className='cursor-pointer p-3 text-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="yellow" className="bi bi-circle-fill" viewBox="0 0 16 16">
                <circle cx="8" cy="8" r="8"/>
                </svg>
                </div>
            </div>
            </>
        }
        />
        <Overlay 
        title={'Alterar tamanho'}
        svg={
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="green" className="bi bi-alphabet-uppercase" viewBox="0 0 16 16">
  <path d="M1.226 10.88H0l2.056-6.26h1.42l2.047 6.26h-1.29l-.48-1.61H1.707l-.48 1.61ZM2.76 5.818h-.054l-.75 2.532H3.51zm3.217 5.062V4.62h2.56c1.09 0 1.808.582 1.808 1.54 0 .762-.444 1.22-1.05 1.372v.055c.736.074 1.365.587 1.365 1.528 0 1.119-.89 1.766-2.133 1.766zM7.18 5.55v1.675h.8c.812 0 1.171-.308 1.171-.853 0-.51-.328-.822-.898-.822zm0 2.537V9.95h.903c.951 0 1.342-.312 1.342-.909 0-.591-.382-.954-1.095-.954zm5.089-.711v.775c0 1.156.49 1.803 1.347 1.803.705 0 1.163-.454 1.212-1.096H16v.12C15.942 10.173 14.95 11 13.607 11c-1.648 0-2.573-1.073-2.573-2.849v-.78c0-1.775.934-2.871 2.573-2.871 1.347 0 2.34.849 2.393 2.087v.115h-1.172c-.05-.665-.516-1.156-1.212-1.156-.849 0-1.347.67-1.347 1.83"/>
</svg>
        }
        content={
            <div>
                <input onChange={changeSize} placeholder='0' type="number" />
            </div>
        }
        />
        <Overlay 
        title={'Alterar fonte'}
        svg={
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="green" className="bi bi-alphabet" viewBox="0 0 16 16">
            <path d="M2.204 11.078c.767 0 1.201-.356 1.406-.737h.059V11h1.216V7.519c0-1.314-.947-1.783-2.11-1.783C1.355 5.736.75 6.42.69 7.27h1.216c.064-.323.313-.552.84-.552s.864.249.864.771v.464H2.346C1.145 7.953.5 8.568.5 9.496c0 .977.693 1.582 1.704 1.582m.42-.947c-.44 0-.845-.235-.845-.718 0-.395.269-.684.84-.684h.991v.538c0 .503-.444.864-.986.864m5.593.937c1.216 0 1.948-.869 1.948-2.31v-.702c0-1.44-.727-2.305-1.929-2.305-.742 0-1.328.347-1.499.889h-.063V3.983h-1.29V11h1.27v-.791h.064c.21.532.776.86 1.499.86Zm-.43-1.025c-.66 0-1.113-.518-1.113-1.28V8.12c0-.825.42-1.343 1.098-1.343.684 0 1.075.518 1.075 1.416v.45c0 .888-.386 1.401-1.06 1.401Zm2.834-1.328c0 1.47.87 2.378 2.305 2.378 1.416 0 2.139-.777 2.158-1.763h-1.186c-.06.425-.313.732-.933.732-.66 0-1.05-.512-1.05-1.352v-.625c0-.81.371-1.328 1.045-1.328.635 0 .879.425.918.776h1.187c-.02-.986-.787-1.806-2.14-1.806-1.41 0-2.304.918-2.304 2.338z"/>
            </svg>
        }
        content={
            <>
            <div>
            <div className='d-flex align-items-center'>
                <input onClick={() => changeFont('cursive')} type="radio" name="exampleRadio" id="exampleRadio1" />
                <p className="mb-0 ms-2" style={{fontFamily:'cursive'}}>Cursive</p>
            </div>
            <div className='d-flex align-items-center'>
                <input onClick={() => changeFont('fantasy')} type="radio" name="exampleRadio" id="exampleRadio2" />
                <p className="mb-0 ms-2" style={{fontFamily:'fantasy'}}>Fantasy</p>
            </div>
            <div className='d-flex align-items-center'>
                <input onClick={() => changeFont('monospace')} type="radio" name="exampleRadio" id="exampleRadio3" />
                <p className="mb-0 ms-2" style={{fontFamily:'monospace'}}>Monospace</p>
            </div>
            <div className='d-flex align-items-center'>
                <input onClick={() => changeFont('sans-serif')} type="radio" name="exampleRadio" id="exampleRadio4" />
                <p className="mb-0 ms-2" style={{fontFamily:'sans-serif'}}>Sans-Serif</p>
            </div>
            <div className='d-flex align-items-center'>
                <input onClick={() => changeFont('serif')} type="radio" name="exampleRadio" id="exampleRadio5" />
                <p className="mb-0 ms-2" style={{fontFamily:'serif'}}>Serif</p>
            </div>
            <div className='d-flex align-items-center'>
                <input onClick={() => changeFont('italic')} type="radio" name="exampleRadio" id="exampleRadio6" />
                <p className="mb-0 ms-2" style={{fontStyle:'italic'}}>Italic</p>
            </div>
            </div>
            </>
        }
        />
            <svg onClick={gerarPDF} xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="green" className="cursor-pointer bi bi-filetype-pdf" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5zM1.6 11.85H0v3.999h.791v-1.342h.803q.43 0 .732-.173.305-.175.463-.474a1.4 1.4 0 0 0 .161-.677q0-.375-.158-.677a1.2 1.2 0 0 0-.46-.477q-.3-.18-.732-.179m.545 1.333a.8.8 0 0 1-.085.38.57.57 0 0 1-.238.241.8.8 0 0 1-.375.082H.788V12.48h.66q.327 0 .512.181.185.183.185.522m1.217-1.333v3.999h1.46q.602 0 .998-.237a1.45 1.45 0 0 0 .595-.689q.196-.45.196-1.084 0-.63-.196-1.075a1.43 1.43 0 0 0-.589-.68q-.396-.234-1.005-.234zm.791.645h.563q.371 0 .609.152a.9.9 0 0 1 .354.454q.118.302.118.753a2.3 2.3 0 0 1-.068.592 1.1 1.1 0 0 1-.196.422.8.8 0 0 1-.334.252 1.3 1.3 0 0 1-.483.082h-.563zm3.743 1.763v1.591h-.79V11.85h2.548v.653H7.896v1.117h1.606v.638z"/>
          </svg>
        <Overlay 
        title={'Alinhamento'}
        svg={
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="green" className="bi bi-list-columns" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M0 .5A.5.5 0 0 1 .5 0h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 0 .5m13 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5m-13 2A.5.5 0 0 1 .5 2h8a.5.5 0 0 1 0 1h-8a.5.5 0 0 1-.5-.5m13 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5m-13 2A.5.5 0 0 1 .5 4h10a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5m13 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5m-13 2A.5.5 0 0 1 .5 6h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m13 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5m-13 2A.5.5 0 0 1 .5 8h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m13 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5m-13 2a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m13 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5m-13 2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m13 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5m-13 2a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5m13 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5"/>
        </svg>
        }
        content={
            <div className='d-flex'>
                <img onClick={() => changeAlign('text-start')} className='border border-dark rounded-1 m-2 p-1' width={50} src={Start} />
                <img onClick={() => changeAlign('text-center')} className='border border-dark rounded-1 m-2 p-1' width={50} src={Center} />
                <img onClick={() => changeAlign('text-end')} className='border border-dark rounded-1 m-2 p-1' width={50} src={End} />
            </div>
        }   
        />
        <input onChange={changeBackground} type='file' name='wallpaper' id ='wallpaper' className='d-none' />
        <label htmlFor="wallpaper">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="green" className="cursor-pointer bi bi-card-image" viewBox="0 0 16 16">
            <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
            <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2zm13 1a.5.5 0 0 1 .5.5v6l-3.775-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12v.54L1 12.5v-9a.5.5 0 0 1 .5-.5z"/>
            </svg>
        </label>
        </div>
        </section>
        <section className="p-2">
            <>
            <Button variant="default" onClick={handleShow}>
      <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="green" className="d-lg-none p-2 bi bi-list" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
        </svg>
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <Header />
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <section>
        <div className={`d-flex flex-column align-items-center justify-content-center bg-gradient mb-5`}>
        <Overlay 
        title={'Alterar cor da lista'}
        svg={
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="green" className="bi bi-paint-bucket" viewBox="0 0 16 16">
            <path d="M6.192 2.78c-.458-.677-.927-1.248-1.35-1.643a3 3 0 0 0-.71-.515c-.217-.104-.56-.205-.882-.02-.367.213-.427.63-.43.896-.003.304.064.664.173 1.044.196.687.556 1.528 1.035 2.402L.752 8.22c-.277.277-.269.656-.218.918.055.283.187.593.36.903.348.627.92 1.361 1.626 2.068.707.707 1.441 1.278 2.068 1.626.31.173.62.305.903.36.262.05.64.059.918-.218l5.615-5.615c.118.257.092.512.05.939-.03.292-.068.665-.073 1.176v.123h.003a1 1 0 0 0 1.993 0H14v-.057a1 1 0 0 0-.004-.117c-.055-1.25-.7-2.738-1.86-3.494a4 4 0 0 0-.211-.434c-.349-.626-.92-1.36-1.627-2.067S8.857 3.052 8.23 2.704c-.31-.172-.62-.304-.903-.36-.262-.05-.64-.058-.918.219zM4.16 1.867c.381.356.844.922 1.311 1.632l-.704.705c-.382-.727-.66-1.402-.813-1.938a3.3 3.3 0 0 1-.131-.673q.137.09.337.274m.394 3.965c.54.852 1.107 1.567 1.607 2.033a.5.5 0 1 0 .682-.732c-.453-.422-1.017-1.136-1.564-2.027l1.088-1.088q.081.181.183.365c.349.627.92 1.361 1.627 2.068.706.707 1.44 1.278 2.068 1.626q.183.103.365.183l-4.861 4.862-.068-.01c-.137-.027-.342-.104-.608-.252-.524-.292-1.186-.8-1.846-1.46s-1.168-1.32-1.46-1.846c-.147-.265-.225-.47-.251-.607l-.01-.068zm2.87-1.935a2.4 2.4 0 0 1-.241-.561c.135.033.324.11.562.241.524.292 1.186.8 1.846 1.46.45.45.83.901 1.118 1.31a3.5 3.5 0 0 0-1.066.091 11 11 0 0 1-.76-.694c-.66-.66-1.167-1.322-1.458-1.847z"/>
            </svg>
        }
        content={
            <>
            <div>
                <div onClick={() => changeColor('text-danger')} className='cursor-pointer p-3 text-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" className="bi bi-circle-fill" viewBox="0 0 16 16">
                <circle cx="8" cy="8" r="8"/>
                </svg>
                </div>

                 <div onClick={() => changeColor('text-success')} className='cursor-pointer p-3 text-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="green" className="bi bi-circle-fill" viewBox="0 0 16 16">
                <circle cx="8" cy="8" r="8"/>
                </svg>
                </div>

                 <div onClick={() => changeColor('text-primary')} className='cursor-pointer p-3 text-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="darkblue" className="bi bi-circle-fill" viewBox="0 0 16 16">
                <circle cx="8" cy="8" r="8"/>
                </svg>
                </div>

                 <div onClick={() => changeColor('text-purple')} className='cursor-pointer p-3 text-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="purple" className="bi bi-circle-fill" viewBox="0 0 16 16">
                <circle cx="8" cy="8" r="8"/>
                </svg>
                </div>

                 <div onClick={() => changeColor('text-warning')} className='cursor-pointer p-3 text-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="yellow" className="bi bi-circle-fill" viewBox="0 0 16 16">
                <circle cx="8" cy="8" r="8"/>
                </svg>
                </div>
            </div>
            </>
        }
        />
       <Overlay 
        title={'Alterar tamanho'}
        svg={
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="green" className="bi bi-alphabet-uppercase" viewBox="0 0 16 16">
  <path d="M1.226 10.88H0l2.056-6.26h1.42l2.047 6.26h-1.29l-.48-1.61H1.707l-.48 1.61ZM2.76 5.818h-.054l-.75 2.532H3.51zm3.217 5.062V4.62h2.56c1.09 0 1.808.582 1.808 1.54 0 .762-.444 1.22-1.05 1.372v.055c.736.074 1.365.587 1.365 1.528 0 1.119-.89 1.766-2.133 1.766zM7.18 5.55v1.675h.8c.812 0 1.171-.308 1.171-.853 0-.51-.328-.822-.898-.822zm0 2.537V9.95h.903c.951 0 1.342-.312 1.342-.909 0-.591-.382-.954-1.095-.954zm5.089-.711v.775c0 1.156.49 1.803 1.347 1.803.705 0 1.163-.454 1.212-1.096H16v.12C15.942 10.173 14.95 11 13.607 11c-1.648 0-2.573-1.073-2.573-2.849v-.78c0-1.775.934-2.871 2.573-2.871 1.347 0 2.34.849 2.393 2.087v.115h-1.172c-.05-.665-.516-1.156-1.212-1.156-.849 0-1.347.67-1.347 1.83"/>
</svg>
        }
        content={
            <>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px' }}>
      {[...Array(10)].map((_, index) => {
        const size = (index + 1) * 10;
        return (
          <div key={size}>
            <input onClick={() => setTextSize(size)} type="radio" name="radioTextSize" />
            <p>{size}</p>
          </div>
        );
      })}
    </div>
            </>
        }
        />
        <Overlay 
        title={'Alterar fonte'}
        svg={
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="green" className="bi bi-alphabet" viewBox="0 0 16 16">
            <path d="M2.204 11.078c.767 0 1.201-.356 1.406-.737h.059V11h1.216V7.519c0-1.314-.947-1.783-2.11-1.783C1.355 5.736.75 6.42.69 7.27h1.216c.064-.323.313-.552.84-.552s.864.249.864.771v.464H2.346C1.145 7.953.5 8.568.5 9.496c0 .977.693 1.582 1.704 1.582m.42-.947c-.44 0-.845-.235-.845-.718 0-.395.269-.684.84-.684h.991v.538c0 .503-.444.864-.986.864m5.593.937c1.216 0 1.948-.869 1.948-2.31v-.702c0-1.44-.727-2.305-1.929-2.305-.742 0-1.328.347-1.499.889h-.063V3.983h-1.29V11h1.27v-.791h.064c.21.532.776.86 1.499.86Zm-.43-1.025c-.66 0-1.113-.518-1.113-1.28V8.12c0-.825.42-1.343 1.098-1.343.684 0 1.075.518 1.075 1.416v.45c0 .888-.386 1.401-1.06 1.401Zm2.834-1.328c0 1.47.87 2.378 2.305 2.378 1.416 0 2.139-.777 2.158-1.763h-1.186c-.06.425-.313.732-.933.732-.66 0-1.05-.512-1.05-1.352v-.625c0-.81.371-1.328 1.045-1.328.635 0 .879.425.918.776h1.187c-.02-.986-.787-1.806-2.14-1.806-1.41 0-2.304.918-2.304 2.338z"/>
            </svg>
        }
        content={
            <>
            <div>
            <div className='d-flex align-items-center'>
                <input onClick={() => changeFont('cursive')} type="radio" name="exampleRadio" id="exampleRadio1" />
                <p className="mb-0 ms-2" style={{fontFamily:'cursive'}}>Cursive</p>
            </div>
            <div className='d-flex align-items-center'>
                <input onClick={() => changeFont('fantasy')} type="radio" name="exampleRadio" id="exampleRadio2" />
                <p className="mb-0 ms-2" style={{fontFamily:'fantasy'}}>Fantasy</p>
            </div>
            <div className='d-flex align-items-center'>
                <input onClick={() => changeFont('monospace')} type="radio" name="exampleRadio" id="exampleRadio3" />
                <p className="mb-0 ms-2" style={{fontFamily:'monospace'}}>Monospace</p>
            </div>
            <div className='d-flex align-items-center'>
                <input onClick={() => changeFont('sans-serif')} type="radio" name="exampleRadio" id="exampleRadio4" />
                <p className="mb-0 ms-2" style={{fontFamily:'sans-serif'}}>Sans-Serif</p>
            </div>
            <div className='d-flex align-items-center'>
                <input onClick={() => changeFont('serif')} type="radio" name="exampleRadio" id="exampleRadio5" />
                <p className="mb-0 ms-2" style={{fontFamily:'serif'}}>Serif</p>
            </div>
            <div className='d-flex align-items-center'>
                <input onClick={() => changeFont('italic')} type="radio" name="exampleRadio" id="exampleRadio6" />
                <p className="mb-0 ms-2" style={{fontStyle:'italic'}}>Italic</p>
            </div>

            </div>
            </>
        }
        />
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="green" className="cursor-pointer bi bi-filetype-pdf" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5zM1.6 11.85H0v3.999h.791v-1.342h.803q.43 0 .732-.173.305-.175.463-.474a1.4 1.4 0 0 0 .161-.677q0-.375-.158-.677a1.2 1.2 0 0 0-.46-.477q-.3-.18-.732-.179m.545 1.333a.8.8 0 0 1-.085.38.57.57 0 0 1-.238.241.8.8 0 0 1-.375.082H.788V12.48h.66q.327 0 .512.181.185.183.185.522m1.217-1.333v3.999h1.46q.602 0 .998-.237a1.45 1.45 0 0 0 .595-.689q.196-.45.196-1.084 0-.63-.196-1.075a1.43 1.43 0 0 0-.589-.68q-.396-.234-1.005-.234zm.791.645h.563q.371 0 .609.152a.9.9 0 0 1 .354.454q.118.302.118.753a2.3 2.3 0 0 1-.068.592 1.1 1.1 0 0 1-.196.422.8.8 0 0 1-.334.252 1.3 1.3 0 0 1-.483.082h-.563zm3.743 1.763v1.591h-.79V11.85h2.548v.653H7.896v1.117h1.606v.638z"/>
          </svg>
        <Overlay 
        title={'Alinhamento'}
        svg={
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="green" className="bi bi-list-columns" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M0 .5A.5.5 0 0 1 .5 0h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 0 .5m13 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5m-13 2A.5.5 0 0 1 .5 2h8a.5.5 0 0 1 0 1h-8a.5.5 0 0 1-.5-.5m13 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5m-13 2A.5.5 0 0 1 .5 4h10a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5m13 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5m-13 2A.5.5 0 0 1 .5 6h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m13 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5m-13 2A.5.5 0 0 1 .5 8h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m13 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5m-13 2a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m13 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5m-13 2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m13 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5m-13 2a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5m13 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5"/>
        </svg>
        }
        content={
            <div className='d-flex'>
                <img onClick={() => changeAlign('text-start')}  className='border border-dark rounded-1 m-2 p-1' width={50} src={Start} />
                <img onClick={() => changeAlign('text-center')} className='border border-dark rounded-1 m-2 p-1' width={50} src={Center} />
                <img onClick={() => changeAlign('text-end')} className='border border-dark rounded-1 m-2 p-1' width={50} src={End} />
            </div>
        }   
        />
        <input onChange={changeBackground} type='file' name='wallpaper' id ='wallpaper' className='d-none' />
        <label htmlFor="wallpaper">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="green" className="cursor-pointer bi bi-card-image" viewBox="0 0 16 16">
            <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
            <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2zm13 1a.5.5 0 0 1 .5.5v6l-3.775-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12v.54L1 12.5v-9a.5.5 0 0 1 .5-.5z"/>
            </svg>
        </label>
        </div>
        </section>
        </Offcanvas.Body>
      </Offcanvas>
            </>
            <div style={{ backgroundImage: `url(${background})`, backgroundRepeat:'no-repeat', backgroundSize:'cover'}} className={`overflow-auto rounded-3 m-auto w-10 alturaSeis`}>
                <ul className="p-5">
                    {
                        !reference ? 
                        <form onSubmit={(e) => {
                            e.preventDefault()
                            setTitle(valueTitle)
                            if (title != '') {
                                setreference(true)   
                            }
                        }} className='d-flex'>
                            <input onChange={(e) => setValueTitle(e.target.value)} className='form-control' type="text" placeholder='Novo título de 2 letras no mínimo' />
                            <button className='btn btn-success'>Enviar</button>
                        </form>
                        :
                        <div className='d-lg-flex justify-content-around align-items-center mb-5'>
                        <h1 className={`${textColor}`} >{title}</h1>
                        <button onClick={() => setreference(false)} className='btn btn-primary'>Edit</button>
                        </div>
                    }
                    {items.map((item, index) => (
                        <li
                            className={`p-2 d-flex justify-content-between border-bottom`}
                            key={index}
                        >
                            {editingIndex === index ? (
                                <input
                                    value={values}
                                    onChange={handleInput}
                                    className="me-1 form-control"
                                />
                            ) : (
                                <p style={{fontFamily:FontText, fontStyle:FontText, fontSize:`${textSize}px`}} className={`${textColor} ${alignText} flex-grow-1 ms-3 item`}>{item}</p>
                            )}

                            <div className="d-flex align-items-center">
                                {editingIndex === index ? (
                                    <button
                                        onClick={saveEdit}
                                        className={`${themeColor} box bg-transparent rounded-1 border-0 outline-0`}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="30"
                                            height="30"
                                            fill="green"
                                            className="func bi bi-check-circle-fill"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.5 11.5L3 8l1.4-1.4L6.5 8.7l5.1-5.1L13 5l-6.5 6.5z" />
                                        </svg>
                                    </button>
                                ) : (
                                    <>
                                        <button
                                            onClick={() => Delete(index)}
                                            className={`${themeColor} box bg-transparent rounded-1 border-0 outline-0`}
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="30"
                                                height="30"
                                                fill="red"
                                                className={`func bi bi-trash3-fill rounded-2`}
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5" />
                                            </svg>
                                        </button>
                                        <button
                                            onClick={() => startEdit(index)}
                                            className={`${themeColor} box bg-transparent rounded-1 border-0 outline-0`}
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="30"
                                                height="30"
                                                fill="white"
                                                className={`${themeColor} func bi bi-pencil-square rounded-2`}
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                                <path
                                                    fillRule="evenodd"
                                                    d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
                                                />
                                            </svg>
                                        </button>
                                    </>
                                )}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="input-group mb-3 m-auto p-5">
                <input 
                    onChange={handleInput} 
                    value={values} 
                    type="text" 
                    className="me-1 form-control" 
                    placeholder="Insert..." 
                    aria-label="Insert..." 
                    aria-describedby="button-addon2" 
                />
                <button onClick={Insert} type="submit" className={`${themeColor} bg-gradient rounded-1 border-0 outline-0`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" className="p-1 func bi bi-send-arrow-up-fill" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M15.854.146a.5.5 0 0 1 .11.54L13.026 8.03A4.5 4.5 0 0 0 8 12.5c0 .5 0 1.5-.773.36l-1.59-2.498L.644 7.184l-.002-.001-.41-.261a.5.5 0 0 1 .083-.886l.452-.18.001-.001L15.314.035a.5.5 0 0 1 .54.111M6.637 10.07l7.494-7.494.471-1.178-1.178.471L5.93 9.363l.338.215a.5.5 0 0 1 .154.154z"/>
                        <path fillRule="evenodd" d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.354-5.354a.5.5 0 0 0-.722.016l-1.149 1.25a.5.5 0 1 0 .737.676l.28-.305V14a.5.5 0 0 0 1 0v-1.793l.396.397a.5.5 0 0 0 .708-.708z"/>
                    </svg>
                </button>
            </div>
        </section>
        </>
    )
}