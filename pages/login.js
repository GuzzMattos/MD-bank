import Link from "next/link"
import { useState } from "react"
import Global from "../utils/global"

export default function Login() {
    const [user, setUser] = useState({
        email: "",
        senha: "",
    })
    const [erros, setErro] = useState({
        erroe: "",
        errose: ""
    })
    async function logar(e) {
        e.preventDefault()
        //verifica erros




        let users = localStorage.getItem('usuarios')

        // VERIFICA SE OS CAMPOS TAO PREENCHIDOS

        if (users == null) {
            // NENHUM USUARIO CADASTRADO. DA UM ERRO
            console.log("Nenhum usuário cadastrado banco!")
        } else {
            let usuarios = JSON.parse(users);
            let usuario = usuarios.find((u) => u.email == user.email);
            let atual = JSON.stringify(usuario)


            if (usuario == undefined) {
                // EMAIL NAO CADASTRADO
                setErro({ ...erros, erroe: true })

            } else if (usuario.senha == user.senha) {
                // LOGADO
                localStorage.setItem("atual", atual)
                location.assign('/main')
            } else {
                // SENHA ERRADA
                setErro({ ...erros, errose: true })

            }
        }
    }
    return (
        <>
            <div id="homecontainer">
                <img className='logop' src="./pilotto.png" alt="pilotto logo" />
                <div>
                    <form onSubmit={(e) => logar(e)}>
                        <label htmlFor="login">Email</label>
                        <input
                            value={user.email}
                            onChange={(e) => { setUser({ ...user, email: e.target.value }); setErro({ ...erros, erroe: false }) }}
                            placeholder="Digite seu email"
                            className="inputlogin"
                            type="email"
                            name="login"
                            id="login"
                        />
                        <label htmlFor="password">Senha</label>
                        <input
                            value={user.senha}
                            onChange={(e) => { setUser({ ...user, senha: e.target.value }); setErro({ ...erros, errose: false }) }}
                            placeholder="Digite sua senha"
                            className="inputlogin"
                            type="password"
                            name="password"
                            id="password" />


                        <span className="red">{erros.erroe && "Email não cadastrado"}</span>
                        <span className="red">{erros.errose && "Senha incorreta"}</span>
                        <input
                            className='buttonshome'
                            id="btn-submit"
                            type="submit"
                            value="Entrar"
                        />

                    </form>
                </div>

            </div>
        </>
    )
}
