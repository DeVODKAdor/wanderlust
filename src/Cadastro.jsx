import { addDoc, collection } from "firebase/firestore";
import React, { useRef, useState } from "react";
import { db } from "./firebase";
import "./styles/cadastro.css"

export default function Cadastro() {

    const nome = useRef()
    const sobrenome = useRef()
    const email = useRef()
    const [contato, setContato] = useState("")
    const estado = useRef()
    const arquivo = useRef()
    const local = useRef()

    const usersRef = collection(db, "Users")

    const handleSubmit = async (e) => {
        e.preventDefault();
        await addDoc(usersRef, {
            nome: nome.current.value,
            sobrenome: sobrenome.current.value,
            email: email.current.value,
            contato: contato,
            estado: estado.current.value,
            arquivo: arquivo.current.value,
            local: local.current.value
        }).then(() => {
            nome.current.value = ""
            sobrenome.current.value = ""
            email.current.value = ""
            estado.current.value = ""
            arquivo.current.value = ""
            local.current.value = ""
        }).catch(err => alert(err))

    }
    return (
        <>
            <div>
                <h1 id="titulo">Cadastro dos Locais</h1>
                <p id="subtitulo">Complete com suas informações</p>
                <br />
            </div>

            <form>
                <fieldset className="grupo">
                    <div className="campo">
                        <label htmlFor="nome">
                            <strong>Nome</strong>
                        </label>
                        <input type="text" name="nome" id="nome" ref={nome} required />
                    </div>

                    <div className="campo">
                        <label htmlFor="sobrenome">
                            <strong>Sobrenome</strong>
                        </label>
                        <input type="text" name="sobrenome" id="sobrenome" ref={sobrenome} required />
                    </div>
                </fieldset>

                <div className="campo">
                    <label htmlFor="email">
                        <strong>Email</strong>
                    </label>
                    <input type="email" name="email" id="email" ref={email} required />
                </div>

                <div className="campo">
                    <label id="contato">
                        <strong>
                            Durante o ensino escolar alguma, teve algum contato com <br /> a
                            sua cultura local?
                        </strong>
                    </label>
                    <label>
                        <input type="radio" name="op" value="sim" onClick={() => setContato("sim")} />
                        Sim
                    </label>
                    <label>
                        <input type="radio" name="op" value="nao" onClick={() => setContato("não")} />
                        Não
                    </label>
                </div>

                <div className="campo">
                    <label htmlFor="estado">
                        <strong>Estado</strong>
                    </label>
                    <select id="estado" ref={estado} required>
                        <option defaultValue disabled value="">
                            Selecione
                        </option>
                        <option>Acre (AC)</option>
                        <option>Alagoas (AL)</option>
                        <option>Amapá (AP)</option>
                        <option>Amazonas (AM)</option>
                        <option>Bahia (BA)</option>
                        <option>Ceará (CE)</option>
                        <option>Distrito Federal (DF)</option>
                        <option>Espírito Santo (ES)</option>
                        <option>Goiás (GO)</option>
                        <option>Maranhão (MA)</option>
                        <option>Mato Grosso (MT)</option>
                        <option>Mato Grosso do Sul (MS)</option>
                        <option>Minas Gerais (MG)</option>
                        <option>Minas Gerais (MG)</option>
                        <option>Pará (PA)</option>
                        <option>Paraíba (PB)</option>
                        <option>Paraná (PR)</option>
                        <option>Pernambuco (PE)</option>
                        <option>Piauí (PI)</option>
                        <option>Rio de Janeiro (RJ)</option>
                        <option>Rio Grande do Norte (RN)</option>
                        <option>Rio Grande do Sul (RS)</option>
                        <option>Rondônia (RO)</option>
                        <option>Roraima (RR)</option>
                        <option>Santa Catarina (SC)</option>
                        <option>São Paulo (SP)</option>
                        <option>Sergipe (SE)</option>
                        <option>Tocantins (TO)</option>
                    </select>
                </div>

                <label htmlFor="url">
                    <strong>URL da Imagem</strong>
                </label>
                <input type="url" name="arquivo" id="arquivo" ref={arquivo} required />

                <div className="campo">
                    <br />
                    <label htmlFor="experiencia">
                        <strong>
                            Diga o nome e conte um pouco sobre a história do ponto turístico:
                        </strong>
                    </label>
                    <textarea
                        rows="6"
                        style={{ width: "26em" }}
                        id="local"
                        name="local"
                        ref={local}
                    ></textarea>
                </div>

                <button className="botao" type="submit" onClick={handleSubmit}>
                    {" "}
                    Concluído
                </button>
                <br />
            </form>
        </>
    );
}
