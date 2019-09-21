import React from 'react';
import ReactDOM from 'react-dom';

// Services
import Home from './services/Home/Home.jsx';
import Photos from './services/Photos/Photos.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isHome: true,
      yAxis: 0,
      photos: {
        home: [],
        livingRoom: [],
        kitchen: [],
        bedroom: [],
        bathroom: [],
        interior: [],
        other: [],
        backyard: [],
        pets: [],
      },
    };
    this.onClick = this.onClick.bind(this);
  }

  componentDidMount() {
    // fetch('http://localhost:3001/retrieve', {
    fetch('http://airbnb-env2.czrmvm8vbv.us-west-1.elasticbeanstalk.com/retrieve', {
      method: 'GET',
      // headers: {
      //   'Content-Type': 'application/json',
      // },
    })
      .then((response) => response.json())
      .then((data) => {
        const home = [];
        const livingRoom = [];
        const kitchen = [];
        const bedroom = [];
        const bathroom = [];
        const interior = [];
        const other = [];
        const backyard = [];
        const pets = [];
        const photoSet = (() => {
          const randomSet = [
            'zero',
            'one',
            'two',
            'three',
            'four',
            'five',
            'six',
            'seven',
            'eight',
            'nine',
          ];
          console.log(randomSet[Math.floor(Math.random() * randomSet.length)]);
          return randomSet[Math.floor(Math.random() * randomSet.length)];
        })();

        for (let i = 0; i < data.length; i++) {
          switch (data[i].tag) {
            case 'home':
              data[i].photo_set === photoSet
              ? home.unshift(data[i])
              : home.push(data[i]);
              continue;
            case 'living room':
              data[i].photo_set === photoSet
              ? livingRoom.unshift(data[i])
              : livingRoom.push(data[i]);
              continue;
            case 'kitchen':
              data[i].photo_set === photoSet
              ? kitchen.unshift(data[i])
              : kitchen.push(data[i]);
              continue;
            case 'bedroom':
              data[i].photo_set === photoSet
              ? bedroom.unshift(data[i])
              : bedroom.push(data[i]);
              continue;
            case 'bathroom':
              data[i].photo_set === photoSet
              ? bathroom.unshift(data[i])
              : bathroom.push(data[i]);
              continue;
            case 'interior':
              data[i].photo_set === photoSet
              ? interior.unshift(data[i])
              : interior.push(data[i]);
              continue;
            case 'other':
              data[i].photo_set === photoSet
              ? other.unshift(data[i])
              : other.push(data[i]);
              continue;
            case 'backyard':
              data[i].photo_set === photoSet
              ? backyard.unshift(data[i])
              : backyard.push(data[i]);
              continue;
            case 'pets':
              data[i].photo_set === photoSet
              ? pets.unshift(data[i])
              : pets.push(data[i]);
              continue;
          }
        }

        function randomize(arr, count) {
          const result = [arr[0]];
          const copyArr = arr.slice(1);
          let i = 0;
          let int;

          while (i < count) {
            int = Math.floor(Math.random() * copyArr.length);
            result.push(copyArr[int]);
            copyArr.splice(int, 1);
            i++;
          }
          return result;
        }

        this.setState({
          photos: {
            home: randomize(home, 1),
            livingRoom: randomize(livingRoom, 5),
            kitchen: randomize(kitchen, 5),
            bedroom: randomize(bedroom, 4),
            bathroom: randomize(bathroom, 3),
            interior: randomize(interior, 4),
            other: randomize(other, 3),
            backyard: randomize(backyard, 3),
            pets: randomize(pets, 3),
          },
        });
      })
      .catch((error) => {
        console.log(`[Error]: ${error}`);
      });
  }

  onClick(room) {
    switch (room) {
      case 'Living room':
        this.setState({
          isHome: !this.state.isHome,
          yAxis: 50,
        });
        break;
      case 'Kitchen':
        this.setState({
          isHome: !this.state.isHome,
          yAxis: 1775,
        });
        break;
      case 'Bedroom':
        this.setState({
          isHome: !this.state.isHome,
          yAxis: 3500,
        });
        break;
      case 'Bathroom':
        this.setState({
          isHome: !this.state.isHome,
          yAxis: 4825,
        });
        break;
      case 'Interior':
        this.setState({
          isHome: !this.state.isHome,
          yAxis: 5900,
        });
        break;
      case 'Other':
        this.setState({
          isHome: !this.state.isHome,
          yAxis: 7225,
        });
        break;
      case 'Backyard':
        this.setState({
          isHome: !this.state.isHome,
          yAxis: 8300,
        });
        break;
      case 'Pets':
        this.setState({
          isHome: !this.state.isHome,
          yAxis: 9375,
        });
        break;
      default:
        this.setState({
          isHome: !this.state.isHome,
          yAxis: 0,
        });
    }
  }

  render() {
    if (this.state.isHome) {
      return <Home callback={this.onClick} photos={this.state.photos} />;
    } else {
      return (
        <Photos
          isCollapsed={false}
          callback={this.onClick}
          photos={this.state.photos}
          yAxis={this.state.yAxis}
        />
      );
    }
  }
}

ReactDOM.render(<App />, document.getElementById('photos'));
