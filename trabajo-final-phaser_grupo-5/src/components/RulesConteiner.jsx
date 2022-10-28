import '../styles/reglas.css';

const RulesConteiner = (props) => {
    return (
        <section>
            <div class="div__title-game-conteiner">
                <h1 class="h1__title-game">EL PERSONAJE QUE SALTA</h1>
            </div>
            <h2 class="h2__title-section">Pagina de reglas</h2>
            <div className="div__rules-conteiner">
                <h2 className='h2__title-rules'>REGLAS</h2>
                <div>
                    {props.children}
                </div>
            </div>
            <div className="div__button-conteiner">
                <a className='a__return' href="/"><button className="button__return">Home</button></a>
                <a className='a__return' href="/Juego"><button className="button__return">Game</button></a>
            </div>
        </section>
    )
}

export default RulesConteiner