export default function Nav(){
  function scrollToSection(section) {
    var section = document.getElementById(section);
    section.scrollIntoView({ behavior: 'smooth' }); // Rola suavemente até a seção
}

    return(
        <nav>
        <ul className="d-none d-lg-flex items-center" type="none">
          <a onClick={() => scrollToSection('tutorial')} className="link-underline link-underline-opacity-0 cursor-pointer"><li className="gradient-text pe-5">Como usar</li></a>
          <a onClick={() => scrollToSection('duvidas')} className="link-underline link-underline-opacity-0 cursor-pointer"><li className="gradient-text pe-5">Ajuda</li></a>
        </ul>
      </nav>
    )
}