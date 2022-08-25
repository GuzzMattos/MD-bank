import { useState } from "react"
export default function Extrato() {
    const [extract, setExtract] = useState(0)
    function verextrato(e) {
        let atual = localStorage.getItem('atual')
        let atuals = JSON.parse(atual)
        let users = localStorage.getItem('usuarios')
        let usuarios = JSON.parse(users)
        let usuario = usuarios.find((u) => u.email == atuals.email)
        setExtract(usuario.extrato)
    }
    return (
        <>
            <div id="homecontainer">
                <div className="cartaotexto">
                    <img className='logop' src="./pilotto.png" alt="pilotto logo" />
                    <div className='buttonshome'>
                        <button onClick={(e) => verextrato(e)} >Ver Extrato</button>
                    </div>
                    <h1>{extract}</h1>
                </div>
            </div>
        </>
    )
}