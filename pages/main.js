import Link from "next/link"
import Global from "../utils/global"
import { useEffect } from "react"
import { useState } from "react"
export default function main() {
    const [saldo, setSaldo] = useState()
    useEffect(() => {
        let atual = localStorage.getItem('atual')
        let atuals = JSON.parse(atual)
        let users = localStorage.getItem('usuarios')
        let usuarios = JSON.parse(users)
        let usuario = usuarios.find((u) => u.email == atuals.email)
        let saldo = JSON.stringify(usuario.saldo)
        setSaldo(usuario.saldo)
    }, [])
    return (
        < div id="mainbox" >
            <img className="logomain" src="/pilotto.png" alt="pilotto" />
            <div className="saldo-extrato">
                <div className="saldo">
                    <p>Saldo</p>
                    <div className="saldovalor">
                        <h6>R$</h6>
                        <span>{saldo}</span>
                    </div>
                </div>
                <div className="extrato">
                    <img src="/icon-extract.png" alt="" />
                    <Link href="/extrato"><a>Ver extrato</a></Link>
                </div>
            </div>
            <div className="functions">
                <div className="functions1">
                    <Link href="/deposito">
                        <div className="bloco">
                            <img src="/deposit.png" alt="" />
                            <h4>Depositar</h4>
                        </div>
                    </Link>
                    <Link href="/transferencia">
                        <div className="bloco">
                            <img src="transfer.png" alt="" />
                            <h4>Transferir</h4>
                        </div>
                    </Link>
                    <Link href="/recarga">
                        <div className="bloco">
                            <img src="recharge.png" alt="" />
                            <h4>Recarga</h4>
                        </div>
                    </Link>
                </div>
                <div className="functions2">
                    <Link href="/cartao">
                        <div className="bloco">
                            <img src="card.png" alt="" />
                            <p>Solicitar<br></br> Cartão</p>
                        </div>
                    </Link>
                    <Link href="/investir">
                        <div className="bloco">
                            <img src="invest.png" alt="" />
                            <h4>Investir</h4>
                        </div>
                    </Link>
                    <Link href="/suporte">
                        <div className="bloco">
                            <img src="suport.png" alt="" />
                            <h4>Suporte</h4>
                        </div>
                    </Link>
                </div>
            </div>
        </div >
    )
}