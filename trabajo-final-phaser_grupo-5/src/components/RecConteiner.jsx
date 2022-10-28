import '../styles/recordatorio.css';

const RecConteiner = (props) => {
    return (
        <section>
            <div class="div__title-game-conteiner">
                <h1 class="h1__title-game">EL PERSONAJE QUE SALTA</h1>
            </div>
            <h2 class="h2__title-section">Pagina de recordatorios</h2>
            <div className="div__recordatorio-conteiner">
                <h2 className="h2__title-recordatorios">RECORDATORIOS</h2>
            </div>
            <div>
                <p>{props.children}</p>
            </div>
            <div className="div__button-conteiner">
                <a className='a__return' href="/"><button className="button__return">Home</button></a>
                <a className='a__return' href="/Juego"><button className="button__return">Game</button></a>
            </div>
        </section>
    )
}

export default RecConteiner