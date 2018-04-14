import React, { Component } from 'react';
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Container from "./components/Container";
import cards from "./cards.json"


class App extends Component {
  state = {
    score: 0,
    top: 0,
    correct: "Click an image to begin!",
    cards: cards,
    guesses: cards,
  }

  //if the card hasn't already been clicked 
  correctGuess = id => {
    //change the state
    this.setState({
      //increase the score by 1
      score: this.state.score + 1,
      //display correct message
      correct: "You Guessed Correctly!",
      //filter out the guesses from the cards.json and save back to the guesses property in the state
      guesses: this.state.guesses.filter(guessed => id !== guessed.id)
    })
  }
  //if the card has already been clicked
  badGuess = id => {
    //change the state
    this.setState({
      //set score back to 0
      score: 0,
      //display incorrect message
      correct: "You Guessed Incorrectly!",
      //clear out the guesses
      guesses: cards,
      //if score is greater than top score, update top score
      top: (this.state.score > this.state.top) ? this.state.score : this.state.top
    })
  }

  check = id => {
    if (this.state.guesses.find(guessed => id === guessed.id)) {
      this.correctGuess(id);
    }
    else {
      this.badGuess(id);
    }
    this.shuffle(cards);
  }

  shuffle = cards => {
    let currentIndex = cards.length, temporaryValue, randomIndex;

    //while there remain elements to shuffle...
    while (0 !== currentIndex) {
      //Pick a ramaining element...currentIndex
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      //And swap it with the current element.
      temporaryValue = cards[currentIndex];
      cards[currentIndex] = cards[randomIndex];
      cards[randomIndex] = temporaryValue;
    }
    return cards;

  }

  render() {
    return (
      <div>
        <Wrapper>
          <Navbar
            correct={this.state.correct}
            score={this.state.score}
            top={this.state.top}
          />
          <Header />
          <Container>
            {this.state.cards.map(card => (
              <Cards
                key={card.id}
                check={this.check}
                id={card.id}
                image={card.image}
                
              />
            ))}
          </Container>
          <Footer />
        </Wrapper>
      </div>
    )
  };
}

export default App;





