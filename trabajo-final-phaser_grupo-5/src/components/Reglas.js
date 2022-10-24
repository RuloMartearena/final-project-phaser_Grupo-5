import '../styles/reglas.css';

export default function Reglas() {
    return (
        <section className="section__reglas-conteiner">
            <div class="div__title-game-conteiner">
                <h1 class="h1__title-game">EL PERSONAJE QUE SALTA</h1>
            </div>
            <h2 class="h2__title-section">Pagina de reglas</h2>
            <div className="div__rules-conteiner">
                <h2 className='h2__title-rules'>REGLAS</h2>
                <div className='div__rules'>
                    <div>
                        <p className='p__rule'>1. De salto en salto superate en lo alto</p>
                        <p className='p__rule'>2. Intenta no caer para no desvanecer</p>
                        <p className='p__rule'>3. Apresurate en llegar o tik tok y para atras</p>
                        <p className='p__rule'>4. Escala hasta la cima demostrando quien domina</p>
                    </div>
                </div>
            </div>
            <div className="div__button-conteiner">
                <a className='a__return' href="/"><button className="button__return">Home</button></a>
                <a className='a__return' href="/Juego"><button className="button__return">Game</button></a>
            </div>
        </section>
    );
}