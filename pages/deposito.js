import { useState } from "react"

export default function Deposito() {
    const [deposit, setDeposit] = useState(0)
    function depositar(e) {
        let atual = localStorage.getItem('atual')//puxa usuario atual
        let atuals = JSON.parse(atual)// transforma usuario atual
        let users = localStorage.getItem('usuarios')//puxa array de todos os usuarios
        let usuarios = JSON.parse(users)//transforma todos os usuarios
        let usuario = usuarios.find((u) => u.email == atuals.email)//puxa usuario atual do array de usuarios
        let ind = usuarios.findIndex((u) => u.email == atuals.email)//descobre index do usuario atual no array de todos os usuarios
        usuarios.splice(ind, 1)// exclui o usuario atual do usuarios
        usuario.saldo = usuario.saldo + Number(deposit) //muda o saldo do usuario
        let aux = usuario.extrato
        aux.push(`Depositou ${deposit} reais , `)
        usuario.extrato = aux
        usuarios.push(usuario) // adiciona o atual no com o saldo alterado 
        usuarios = JSON.stringify(usuarios)
        localStorage.setItem('usuarios', usuarios)
        console.log(aux)
    }
    return (
        <>
            <div id="homecontainer">
                <img className='logop' src="./pilotto.png" alt="pilotto logo" />
                <div className="deposito">
                    <form>
                        <label htmlFor="deposito">Quanto você gostaria de depositar ?</label>
                        <div className="sifra">
                            <span>R$</span>
                            <input
                                onChange={(e) => { setDeposit(e.target.value) }}
                                placeholder="Digite o valor"
                                className="inputdeposito"
                                type="number"
                                name="deposito"
                                id="deposito"
                            />
                        </div>
                    </form>
                </div>
                <div className='buttonshome'>
                    <button onClick={(e) => depositar(e)} >Depositar</button>
                </div>
            </div>
        </>
    )
}