import '../styles/desarrolladores.css';

export default function Desarrolladores(props) {
    return (
        <section className='section__desarrolladores-conteiner'>
            <div class="div__title-game-conteiner">
                <h1 class="h1__title-game">EL PERSONAJE QUE SALTA</h1>
            </div>
            <h2 class="h2__title-section">Pagina de desarrolladores</h2>
            <h2 className="h2__desarrolladores">Desarrolladores</h2>
            <h3 className="h3__numeroGrupo">GRUPO 5</h3>
            <div className="div__desarrolladores-conteiner">
                <div className="div__desarrolladores-img">
                    <img className="img__photo" src={props.srcImg} alt="Ignacio Beguier"></img>
                </div>
                <div className="div__desarrolladores-info">
                    <p className="p__desarrolladores">
                        <b>{props.name}</b><br />
                        {props.description}<br />
                        {props.group}
                    </p>
                    <div className="div__button-desarrolladores">
                        <a className='a__return' href={props.gitHub} target="_blank" rel="noreferrer">
                            <button className="button__return">GITHUB</button>
                        </a>
                    </div>
                </div>
            </div>
            <div className="div__button-conteiner">
                <a className='a__return' href="/"><button className="button__return">Home</button></a>
                <a className='a__return' href="/Juego"><button className="button__return">Game</button></a>
            </div>
        </section>
    )
}