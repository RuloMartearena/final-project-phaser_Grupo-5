import '../styles/recordatorio.css';

export default function Recordatorio(props) {
    return (
        <section>
            <div className='div__recordatorio'>
                <p>{props.recordatorio}</p>
            </div>
        </section>
    )
}
