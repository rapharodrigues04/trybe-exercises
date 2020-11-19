import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
    };
    this.fetchDog = this.fetchDog.bind(this);
  }

  componentDidMount() {
    this.fetchDog();
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.data.message.includes("terrier")) {
      return false;
    }
    return true;
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.data !== this.state.data) {
      const dogBreed = this.state.data.message.split("/")[4];
      return alert(dogBreed);
    }
    localStorage.setItem("dogURL", JSON.stringify(this.state.array));
  }

  fetchDog() {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((result) => this.setState({ data: result }));
  }

  saveData() {
    const {
      data: { message },
      name,
      array,
    } = this.state;
    const dogData = { message, name };
    const newArray = [...array, dogData];
    this.setState({ array: newArray });
    this.setState({ name: "" });
  }

  render() {
    if (this.state.data === "") return "loading...";
    return (
      <div>
        <p>Imagens de Dogs</p>
        <button onClick={this.fetchDog}>Novo Dog</button>
        <div>
          <input
            type="text"
            value={this.state.name}
            onChange={(e) => this.setState({ name: e.target.value })}
            placeholder="digite o nome do doguinho"
          />
          <button onClick={this.saveData}>Salvar doguinho!</button>
        </div>
        <div>
          <img src={this.state.data.message} />
        </div>
      </div>
    );
  }
}

export default App;

// 1. Crie uma aplicação que consuma a API de fotos aleatórias de cachorros. Observe a estrutura de dados que ela retorna:

//   assim que a página for renderizada, uma primeira requisição deve acontecer, e a imagem deve ser mostrada na tela;
//   enquanto a requisição é feita, o texto 'Loading...' deve ser a única coisa presente na tela;
//   deve existir um botão que, para cada clique, busque mais um doguinho.

// 2. Com o código do exercício anterior, você irá implementar mais algumas funcionalidades:

//   a cada tentativa de atualização do componente, verifique se o campo message tem a string terrier. Se sim, não atualize o     componente;
//   guarde a url da última imagem gerada no localStorage após cada atualização.
//   após a atualização do componente, exiba um alert com a raça do doguinho (verifique o campo message);

// 3. Com o código do exercício anterior, implemente:

//   a cada foto que for baixada, através de um input, dê um nome ao doguinho;
//   crie um botão que guarde os resultados, juntamente com o nome dado ao 'doguinho', em um array;
//   guarde o array no localStorage a cada atualização, e não mais a url da última imagem gerada; 
//   a cada inicialização da aplicação, verifique se existem dados prévios guardados no localStorage. Caso haja, ignore a instrução "assim que a página for renderizada, uma primeira requisição deve acontecer e a imagem deve ser mostrada na tela", e exiba a última imagem guardada.