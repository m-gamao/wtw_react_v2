import Home from "./Home";
import WeatherContainer from "./Pages/Favorites/containers/WeatherContainer";
import SearchContainer from "./Pages/SearchDisplay/containers/SearchContainer";
import { getWeather } from "./Store/middleware/weatherAsync";

class App extends Component {
  componentDidMount() {
    this.props.getWeather();
  }

  render() {
    return (
      <main className="container">
        <Switch>
          <Route exact path="/weather" component={WeatherContainer} />
          <Route exact path="/search" component={SearchContainer} />
          <Route exact path="/outfit" component={OutfitContainer} />
          <Route exact path="/" component={Home} />
        </Switch>
      </main>
    );
  }
}

export default connect(null, { getWeather })(App);
