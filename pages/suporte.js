export default function Suporte() {
    return (
        <>
            <div id="homecontainer">
                <img className='logop' src="./pilotto.png" alt="pilotto logo" />
                <div className="deposito">
                    <form>
                        <label htmlFor="deposito">Escreva sua mensagem ao suporte e será respondido em breve</label>
                        <input
                            placeholder="Digite sua mensagem"
                            className="inputinvest"
                            type="text"
                            name="suport"
                            id="suport"
                        />
                    </form>
                </div>
                <div className='buttonshome'>
                    <button >Enviar</button>
                </div>
            </div>
        </>
    )
}