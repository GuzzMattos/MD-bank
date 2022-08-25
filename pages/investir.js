import { useState } from "react"
export default function Investir() {
    const [investimento, setInvestimento] = useState(0)
    function investir(e) {
        let atual = localStorage.getItem('atual')//puxa usuario atual
        let atuals = JSON.parse(atual)// transforma usuario atual
        let users = localStorage.getItem('usuarios')//puxa array de todos os usuarios
        let usuarios = JSON.parse(users)//transforma todos os usuarios
        let usuario = usuarios.find((u) => u.email == atuals.email)//puxa usuario atual do array de usuarios
        let ind = usuarios.findIndex((u) => u.email == atuals.email)//descobre index do usuario atual no array de todos os usuarios
        usuarios.splice(ind, 1)// exclui o usuario atual do usuarios
        usuario.saldo = usuario.saldo - Number(investimento) //muda o saldo do usuario
        let aux = usuario.extrato
        aux.push(`Investiu ${investimento} reais , `)
        usuario.extrato = aux
        usuarios.push(usuario) // adiciona o atual no com o saldo alterado 
        usuarios = JSON.stringify(usuarios)
        localStorage.setItem('usuarios', usuarios)
        console.log(investimento)

    }
    return (
        <>
            <div id="homecontainer">
                <img className='logop' src="./pilotto.png" alt="pilotto logo" />
                <div className="deposito">
                    <form>
                        <label htmlFor="deposito">Quanto você gostaria de investir a 0.08 de lucro mensal?</label>
                        <div className="sifra">
                            <span>R$</span>
                            <input
                                onChange={(e) => setInvestimento(e.target.value)}
                                placeholder="Digite o valor"
                                className="inputinvest"
                                type="number"
                                name="invest"
                                id="invest"
                            />
                        </div>
                    </form>
                </div>
                <div className='buttonshome'>
                    <button onClick={(e) => investir(e)}>Investir</button>
                </div>
            </div>
        </>
    )
}