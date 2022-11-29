import React from "react";
import "./styles/main.css"

export default function Home() {
  return (
    <>
      <header className="menu-principal">
        <main>
          <div className="header-1" />
          <div className="logo">
            <img src="./img/logoHorizontal (1).png" />
          </div>
        </main>
      </header>
      <div className="col-100">
        <div className="slider-principal">
          <img src="./img/tela de carregamento oficial.png" />
          <img src="./img/banner1.png" />
          <img src="./img/pq.png" />
          <img src="./img/significado (1).png" />
          <img src="./img/perso.png" />
        </div>
      </div>
      <div className="col-100">
        <div className="content texto-destaque">
          <h1>
            O projeto tem como <strong> OBJETIVO:</strong>{" "}
          </h1>
          <p>
            {" "}
            Desenvolver um software em realidade virtual viabilizando o
            conhecimento acerca dos patrimônios materiais existentes em Manaus,
            por meio de uma gamificação que possa ser aplicada em escolas para
            estudantes do ensino fundamental de nível 2, crianças de 12 a 14
            anos, com o intuito de expandir, desde cedo, o conhecimento cultural
            e regional amazonense. .
          </p>

          <div className="col-3 bloco-texto">
            <img src="./img/inter.png" />
            <h3>
              <b>Problema</b>{" "}
            </h3>
            <p>
              Qual a contribuição das escolas de Manaus para a preservação do
              conhecimento regional e cultural da cidade?
            </p>
          </div>
          <div className="col-3 bloco-texto">
            <img src="./img/btcancelar.png" />
            <h3>
              <b> Causa</b>
            </h3>
            <p>
              A falta de investimento de ensino cultural e desvalorização da
              produção local.
            </p>
          </div>
          <div className="col-3 bloco-texto">
            <img src="./img/bteditar.png" />
            <h3>
              <b> Consequência</b>
            </h3>
            <p>
              Escassez de conhecimento sobre o contexto regional da cidade e de
              identidade cultural.
            </p>
          </div>
        </div>
      </div>
      <div className="col-100 bloco-imagens-texto">
        <div className="h1">
          <h1>
            <center>
              <strong> Tecnologias </strong> utilizadas:
            </center>
          </h1>
        </div>
        <div className="content">
          <div className="col-3 bloco-texto bloco-imagem">
            <img src="./img/unity.png" />
            <p>
              <b>Unity</b>
            </p>
            <p>
              O Unity é um dos mais conhecidos motores de desenvolvimento de
              videojogos, assim, tanto iniciantes quanto profissionais conseguem
              aproveitar todos os recursos oferecidos para o seu aprendizado.
            </p>
          </div>
          <div className="col-3 bloco-texto bloco-imagem">
            <img src="./img/vscode.png" />
            <p>
              <b>VScode</b>
            </p>
            <p>
              Visual Studio Code (VS Code) é um editor de código de código
              aberto desenvolvido pela Microsoft. A saber, ele está disponível
              para Windows, Mac e Linux.
            </p>
          </div>
        </div>

        <div className="content">
          <div className="col-3 bloco-texto bloco-imagem">
            <img src="./img/blender.png" />
            <p>
              <b>Blender</b>
            </p>
            <p>
              O Blender é um software de criação em 3D. Gratuita, de código
              aberto e disponível para Windows, Mac e Linux, a ferramenta
              oferece funcionalidades completas para modelagem, animação,
              criação e visualização de conteúdo 3D interativo, renderização e
              pós-produção
            </p>
          </div>
          <div className="col-3 bloco-texto bloco-imagem">
            <img src="./img/audacity.png" />
            <p>
              <b>Audacity</b>
            </p>
            <p>
              Audacity: É um software livre e de código aberto, muito famoso por
              ser democrático e intuitivo. É usado para gravações de áudio e
              edições de faixas sonoras.
            </p>
          </div>
        </div>
      </div>

      <div className="col-100 bloco-logos">
        <div className="content">
          <div className="col-4">
            <img alt="designer" title="designer" src="img/designer.jpg" />
          </div>
          <div className="col-4">
            <img
              alt="analista"
              title="analista"
              src="img/analista.jpg"
            />
          </div>
          <div className="col-4">
            <img
              alt="programador"
              title="programador"
              src="img/programador.jpg"
            />
          </div>
        </div>
      </div>
      <br />
      <footer>
        <div className="col-100 footer">
          <div className="content">
            <h3>
              <b>Autores:</b>
            </h3>
            <p style={{font: 18 }}>
              - Karina Christine Ferrão Martins Rocha <br />
              - Maria Eduarda Santana da Costa <br />- Vitor Bruno Souza da
              Silva
            </p>
          </div>
          <br />
          <div className="content">
            <div className="h1">
              <h1>
                <b>
                  <strong>
                    <center>Suporte - Novos Pontos Turísticos</center>
                  </strong>
                </b>
              </h1>
            </div>
            <p>
              É a aréa de cadastro, caso você queira adicionar a url ou link da
              imagem de um ponto turístico que lhe agrade. Não esqueça de
              adicionar infomações sobre o local e a sua localidadade.
            </p>
          </div>

          <div className="button">
            <form method="get" action="forms.html" style={{ position: "center" }}>
              <button type="submit">Ir para o Suporte</button>
            </form>
          </div>
        </div>
      </footer>
    </>
  );
}
