import { useState } from "react";
import users from "../utils/Users";
import Link from "next/link";


const Cadastro = () => {
  const [form, setForm] = useState({
    email: "",
    nome: "",
    cpf: "",
    senha: "",
    confirmarSenha: "",
    checkbox: false,
    saldo: 0,
    extrato: [""]
  })
  const [erros, setErro] = useState({
    erroe: "",
    erron: "",
    erroc: "",
    errose: "",
    erroco: "",
  })

  async function register(e) {
    e.preventDefault();
    console.table(form)
    console.log(form.nome.length)
    // Nao deixa reiniciar a pagina
    // Procurando erros
    if (form.email.length < 6 || form.email.length > 30) {
      setErro({ ...erros, erroe: true })
    }
    else if (form.nome.length < 3 || form.nome.length > 30) {
      setErro({ ...erros, erron: true })
    }
    else if (form.cpf < 10000000000 || form.cpf > 100000000000) {
      setErro({ ...erros, erroc: true })
    }
    else if (form.senha.length < 6 || form.senha.length > 30) {
      setErro({ ...erros, errose: true })
    }
    else if (form.confirmarSenha !== form.senha) {
      setErro({ ...erros, erroco: true })
    }
    else {

      let users = localStorage.getItem("usuarios")

      if (users != null) {
        // JA EXITE USUARIOS CADASTRADOS
        let array = JSON.parse(users);
        array.push(form);
        localStorage.setItem("usuarios", JSON.stringify(array))
      } else {
        // PRIMEIRO USUARIO A SER CADASTRADO
        let array = [form];
        localStorage.setItem("usuarios", JSON.stringify(array));
      }

      // REDIRECIONA PARA LOGIN
      location.assign('/login')
    }
  }

  return (
    <>
      <div id="main-container">
        <h1>Crie sua conta</h1>
        <form onSubmit={(e) => register(e)} id="register-form">
          <div className="full-box">
            <label htmlFor="email">E-mail</label>
            <input
              value={form.email}
              onChange={(e) => { setForm({ ...form, email: e.target.value }); setErro({ ...erros, erroe: false }) }}
              type="email"
              name="email"
              id="email"
              placeholder="Digite seu e-mail"
            />
          </div>
          <div className="half-box spacing">
            <label htmlFor="name">Nome completo</label>
            <input
              value={form.nome}
              onChange={(e) => { setForm({ ...form, nome: e.target.value }); setErro({ ...erros, erron: false }) }}
              type="text"
              name="name"
              id="name"
              placeholder="Digite seu nome completo"
            />
          </div>
          <div className="half-box">
            <label htmlFor="cpf">CPF</label>
            <input
              value={form.cpf}
              onChange={(e) => { setForm({ ...form, cpf: e.target.value, erroc: false }); setErro({ ...erros, erroc: false }) }}
              type="number"
              name="cpf"
              id="cpf"
              placeholder="Digite seu CPF"
            />
          </div>
          <div className="half-box spacing">
            <label htmlFor="lastname">Senha</label>
            <input
              value={form.senha}
              onChange={(e) => { setForm({ ...form, senha: e.target.value, erros: false }); setErro({ ...erros, errose: false }) }}
              type="password"
              name="password"
              id="password"
              placeholder="Digite sua senha"
            />
          </div>
          <div className="half-box">
            <label htmlFor="passconfirmation">Confirmação de senha</label>
            <input
              value={form.confirmarSenha}
              onChange={(e) => { setForm({ ...form, confirmarSenha: e.target.value, erroco: false }); setErro({ ...erros, erroco: false }) }
              }
              type="password"
              name="passconfirmation"
              id="passwordconfirmation"
              placeholder="Digite novamente sua senha"
            />
          </div>
          <div>
            <input
              type="checkbox"
              checked={form.checkbox}
              onChange={(e) => setForm({ ...form, checkbox: e.target.checked })}
              name="agreement"
              id="agreement"
            />
            <label htmlFor="agreement" id="agreement-label">
              Eu li e aceito os <a href="https://www.youtube.com/watch?v=VMZo3MaYMSQ">termos de uso</a>
            </label>
          </div>
          <div className="full-box">
            <span className="red">{erros.erroe && "Preencha seu email corretamente!"}</span>
            <span className="red">{erros.erron && "Preencha nome corretamente!"}</span>
            <span className="red">{erros.erroc && "Preencha seu cpf corretamente!"}</span>
            <span className="red">{erros.errose && "Sua senha deve ter mais de 6 caracteres!"}</span>
            <span className="red">{erros.erroco && "A confirmação de senha deve ser igual a senha!"}</span>
            <input
              disabled={!form.checkbox}
              className="btn-submit"
              type="submit"
              value="Registrar"
            />
          </div>
        </form>
      </div>
      <p className="error-validation template"></p>
    </>
  );
};

export default Cadastro;
