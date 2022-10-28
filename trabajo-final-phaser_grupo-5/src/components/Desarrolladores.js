import '../styles/desarrolladores.css';

export default function Desarrolladores(props) {
    return (
        <section className='section__desarrolladores-conteiner'>
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
        </section>
    )
}