import React, { Component } from "react";
import PokeCard from "./components/PokeCard";
import Nav from "./components/Nav";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Container from "./Container";
import Row from "./Row";
import Column from "./Column";
import pokemon from "./pokemon.json";
import "./App.css";

class App extends Component {
  state = {
    pokemon,
    currentScore: 0,
    topScore: 0,
    rightWrong: "",
    clicked: []
  };

  render() {
    return (
      <Wrapper>
        <Nav title="POKEMON CLICKY" score="1" topScore="1" rightWrong="1" />

        <Title>Click on all the caracters without duplicating</Title>

        <Container>
          <Row>
            {this.state.pokemon.map(pokemon => (
              <Column size="md-3 sm-6">
                <PokeCard
                  key={pokemon}
                  handleClick={pokemon}
                  handleIncrement={pokemon}
                  handleReset={pokemon}
                  handleShuffle={pokemon}
                  id={pokemon}
                  image={pokemon.image}
                />
              </Column>
            ))}
          </Row>
        </Container>
      </Wrapper>
    );
  }
}

export default App;
