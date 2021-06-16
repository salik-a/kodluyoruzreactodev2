import React, { Component } from "react";
import Coin from "../Coin/Coin";
import "./CoinFlipper.css";

class CoinFlipper extends Component {
  constructor(props) {
    super(props);
    
    // State üzerinde paranın başlangıçtaki durumunu veriyoruz, başlangıçta "tura" olsun.
    // Daha sonra şu anda paranın dönüp dönmeme durumunu da veriyoruz, başlangıçta para atılmamış olduğundan "false" olarak verdik.
    this.state = {
      side: "tura",
      flipping: false,
      clicked:0,
      tura:0,
      yazi:0

    };
  }
  handleClick = () => {
    // "At!" butonuna tıkladığımızda paranın dönmesini istiyoruz, bu yüzden "flipping" durumunu "true" yapıyoruz.
    this.setState({ flipping: true });
    // 1 saniye kadar dönmesi yeterli, bu yüzden 1 saniye sonra "flipping" durmunu tekrar "false" yapıyoruz.
    var rand = Math.floor(Math.random()*(2))
    console.log(rand)
    if(rand == 0){
      setTimeout(() => this.setState({ flipping: false, side: "yazi",clicked:this.state.clicked+1,tura:this.state.tura+1 }), 1000);
    }else{
      setTimeout(() => this.setState({ flipping: false, side: "tura",clicked:this.state.clicked+1,yazi:this.state.yazi+1 }), 1000);
    }
    console.log(this.value);
  };
  delete = () => {
    this.setState({ flipping: false, clicked:0,tura:0,yazi:0 })
  };

  render() {
    return (
      <div className="CoinFlipper">
        <h1>Yazı mı Tura mı?</h1>
        <Coin side={this.state.side} flipping={this.state.flipping} />
        <button onClick={this.handleClick}>At!</button>
        <p>
          Toplam
          <strong> {this.state.clicked} </strong>
          atıştan
          <strong> {this.state.tura} </strong>ü tura
          <strong> {this.state.yazi} </strong>
          si yazı geldi.
        </p>
        <button onClick={this.delete}>Sıfırla</button>
      </div>
    );
  }
}

export default CoinFlipper;
