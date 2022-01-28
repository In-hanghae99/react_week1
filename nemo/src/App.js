import React from "react";
import Nemo from "./Nemo";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 3, // 숫자넣기!
    };
  }

  componentDidMount() {}

  addNemo = () => {
    // this.setState로 count를 하나 더해줍니다!
    this.setState({ count: this.state.count + 1 });
  };

  removeNemo = () => {
    // 네모 갯수가 0보다 작을 순 없겠죠! if문으로 조건을 걸어줍시다.
    if (this.state.count > 0) {
      // this.setState로 count를 하나 빼줍니다!
      this.setState({ count: this.state.count - 1 });
    } else {
      window.alert("네모가 없어요!");
    }
  };

  render() {
    return (
      <div className="App">
        <Nemo />
      </div>
    );
  }
}

export default App;
