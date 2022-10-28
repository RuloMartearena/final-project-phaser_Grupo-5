import '../styles/reglas.css';

export default function Reglas(props) {
    return (
        <section className="section__reglas-conteiner">
            <div className='div__rules'>
                <div>
                    <p className='p__rule'>{props.regla}</p>
                </div>
            </div>
        </section>
    );
}