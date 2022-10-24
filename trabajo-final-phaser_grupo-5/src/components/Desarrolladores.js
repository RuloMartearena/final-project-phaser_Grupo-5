import '../styles/desarrolladores.css';

export default function Desarrolladores() {
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
                    <img className="img__photo" src="../img/photo_oso.png" alt="Ignacio Beguier"></img>
                </div>
                <div className="div__desarrolladores-info">
                    <p className="p__desarrolladores">
                        <b>Beguier Ignacio Martin</b><br />
                        Le decimos Internet Exporer por que tarda en captar las indirectas<br />
                        El alivio comico del grupo
                    </p>
                    <div className="div__button-desarrolladores">
                        <a className='a__return' href="https://github.com/TitiBeguier" target="_blank" rel="noreferrer">
                            <button className="button__return">GITHUB</button>
                        </a>
                    </div>
                </div>
            </div>
            <div className="div__desarrolladores-conteiner">
                <div className="div__desarrolladores-img">
                    <img className="img__photo" src="../img/photo_chris.png" alt="Christian Gianiechini"></img>
                </div>
                <div className="div__desarrolladores-info">
                    <p className="p__desarrolladores">
                        <b>Gianechini Christian Emanuel</b><br />
                        El mas puntual de todos, parece que vive en discord<br />
                        El emo del grupo
                    </p>
                    <div className="div__button-desarrolladores">
                        <a className='a__return' href="https://github.com/Bastyon" target="_blank" rel="noreferrer">
                            <button className="button__return">GITHUB</button>
                        </a>
                    </div>
                </div>
            </div>
            <div className="div__desarrolladores-conteiner">
                <div className="div__desarrolladores-img">
                    <img className="img__photo" src="../img/photo_abuelo.png" alt="Christian Gutierrez"></img>
                </div>
                <div className="div__desarrolladores-info">
                    <p className="p__desarrolladores">
                        <b>Gutiérrez Christian Andrés</b><br />
                        El mas grande del grupo, uno pernsaría que tambien el que tiene mas experiencia<br />
                        El abuelo del grupo
                    </p>
                    <div className="div__button-desarrolladores">
                        <a className='a__return' href="https://github.com/Bleidersito" target="_blank" rel="noreferrer">
                            <button className="button__return">GITHUB</button>
                        </a>
                    </div>
                </div>
            </div>
            <div className="div__desarrolladores-conteiner">
                <div className="div__desarrolladores-img">
                    <img className="img__photo" src="../img/photo_rulo.png" alt="Matias Martearena"></img>
                </div>
                <div className="div__desarrolladores-info">
                    <p className="p__desarrolladores">
                        <b>Martearena Matías</b><br />
                        El supuesto líder del grupo y el que más sabe sobre css<br />
                        El ruludo del grupo
                    </p>
                    <div className="div__button-desarrolladores">
                        <a className='a__return' href="https://github.com/RuloMartearena" target="_blank" rel="noreferrer">
                            <button className="button__return">GITHUB</button>
                        </a>
                    </div>
                </div>
            </div>
            <div className="div__desarrolladores-conteiner">
                <div className="div__desarrolladores-img">
                    <img className="img__photo" src="../img/photo_axel.png" alt="Axel Robles"></img>
                </div>
                <div className="div__desarrolladores-info">
                    <p className="p__desarrolladores">
                        <b>Robles Axel Iván Lautaro</b><br />
                        Le dicen roblox no se por que, el mas copado del grupo<br />
                        El hincha de river del grupo
                    </p>
                    <div className="div__button-desarrolladores">
                        <a className='a__return' href="https://github.com/axelrobles17" target="_blank" rel="noreferrer">
                            <button className="button__return">GITHUB</button>
                        </a>
                    </div>
                </div>
            </div>
            <div className="div__desarrolladores-conteiner">
                <div className="div__desarrolladores-img">
                    <img className="img__photo" src="../img/photo_esteban.png" alt="Esteban Vera"></img>
                </div>
                <div className="div__desarrolladores-info">
                    <p className="p__desarrolladores">
                        <b>Vera Esteban Sergio</b><br />
                        Le líder 100% real hasta la muerte del grupo, sabe mucho sobre react<br />
                        El verdadero líder del grupo
                    </p>
                    <div className="div__button-desarrolladores">
                        <a className='a__return' href="https://github.com/Akenajy1209" target="_blank" rel="noreferrer">
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