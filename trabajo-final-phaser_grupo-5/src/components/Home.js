import '../styles/home.css';

export default function home() {
    return (
        <section className="section__inicio-conteiner">
            <div class="div__title-game-conteiner">
                <h1 class="h1__title-game">EL PERSONAJE QUE SALTA</h1>
            </div>
            <h2 class="h2__title-section">Home Page</h2>
            <div className="div__img-conteiner">
                <a href="/Juego">
                    <img className="img-inicio" src="../img/inicio.png" alt="Logo del Juego" />
                </a>
            </div>
            <h2 className='h2__instruccion'>Dar click a la imagen para comenzar</h2>

            
            <div className='div__button-conteiner'>
                <a href="/Recordatorios" className='button_font'><button className='button__return'>Recordatorios</button></a>
                <a href="/Reglas" className='button_font'><button className='button__return'>Reglas</button></a>
                <a href="/Desarrolladores" className='button_font'><button className='button__return'>Desarrolladores</button></a>
            </div>
        </section>
    );
}