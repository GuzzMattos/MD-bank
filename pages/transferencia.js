import { useState } from "react"

export default function Transferencia() {
    const [transfer, setTransfer] = useState()
    const [receptor, setReceptor] = useState()
    function transferir(e) {
        let atual = localStorage.getItem('atual')//puxa usuario atual
        let atuals = JSON.parse(atual)// transforma usuario atual
        let users = localStorage.getItem('usuarios')//puxa array de todos os usuarios
        let usuarios = JSON.parse(users)//transforma todos os usuarios
        let receptoru = usuarios.find((u) => u.cpf == receptor)// puxa usuario que vai receber dinheiro
        let usuario = usuarios.find((u) => u.email == atuals.email)//puxa usuario atual do array de usuarios
        let ind = usuarios.findIndex((u) => u.email == atuals.email)//descobre index do usuario atual no array de todos os usuarios
        let indrec = usuarios.findIndex((u) => u.cpf == receptor)//descobre index do usuario atual no array de todos os usuarios
        usuarios.splice(indrec, 1)// exclui o usuario atual do usuarios
        usuarios.splice(ind, 1)// exclui o usuario atual do usuarios
        usuario.saldo = usuario.saldo - Number(transfer) //muda o saldo do usuario
        receptoru.saldo = receptoru.saldo + Number(transfer)
        let aux = usuario.extrato
        aux.push(`Transferiu ${transfer} reais para ${receptoru.nome} , `)
        usuario.extrato = aux
        usuarios.push(usuario) // adiciona o atual no com o saldo alterado 
        usuarios.push(receptoru)
        usuarios = JSON.stringify(usuarios)
        localStorage.setItem('usuarios', usuarios)
        console.log(receptoru)
    }
    return (
        <>
            <div id="homecontainer">
                <img className='logop' src="./pilotto.png" alt="pilotto logo" />
                <div>
                    <form>
                        <label htmlFor="remetente">CPF do destinatário</label>
                        <input
                            onChange={(e) => { setReceptor(e.target.value) }}
                            placeholder="Digite o CPF da pessoa para transferir"
                            className="inputremetente"
                            type="text"
                            name="remetente"
                            id="remetente"
                        />
                        <label htmlFor="transferirval">Quanto você gostaria de transferir ?</label>
                        <div className="sifra">
                            <span>R$</span>
                            <input
                                onChange={(e) => { setTransfer(e.target.value) }}
                                placeholder="Digite o valor"
                                className="inputtransferirval"
                                type="number"
                                name="transferirval"
                                id="transferirval"
                            />
                        </div>
                    </form>
                </div>
                <div className='buttonshome'>
                    <button onClick={(e) => transferir(e)} >Transferir</button>
                </div>
            </div>
        </>
    )
}