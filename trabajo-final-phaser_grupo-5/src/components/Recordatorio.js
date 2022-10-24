import '../styles/recordatorio.css';

export default function Recordatorio() {
    return (
        <section>
            <div class="div__title-game-conteiner">
                <h1 class="h1__title-game">EL PERSONAJE QUE SALTA</h1>
            </div>
            <h2 class="h2__title-section">Pagina de recordatorios</h2>
            <div className="div__recordatorio-conteiner">
                <h2 className="h2__title-recordatorios">RECORDATORIOS</h2>
                <div>
                    <p>1. El personaje tiene que llegar a la cima</p>
                    <p>2. No debes caer</p>
                    <p>3. Supera todas las plataformas para obtener el premio</p>
                </div>
            </div>
            <div className="div__button-conteiner">
                <a className='a__return' href="/"><button className="button__return">Home</button></a>
                <a className='a__return' href="/Juego"><button className="button__return">Game</button></a>
            </div>
        </section>
    )
}
