// rafce => crea un componente directo
import '../styles/desarrolladores.css';

const DevConteiner = (props) => {
    return (
        <section>
            <div class="div__title-game-conteiner">
                <h1 class="h1__title-game">EL PERSONAJE QUE SALTA</h1>
            </div>
            <h2 class="h2__title-section">Pagina de desarrolladores</h2>
            <h2 className="h2__desarrolladores">Desarrolladores</h2>
            <h3 className="h3__numeroGrupo">GRUPO 5</h3>
            <div>
                {props.children}
            </div>
            <div className="div__button-conteiner">
                <a className='a__return' href="/"><button className="button__return">Home</button></a>
                <a className='a__return' href="/Juego"><button className="button__return">Game</button></a>
            </div>
        </section>
    )
}

export default DevConteiner