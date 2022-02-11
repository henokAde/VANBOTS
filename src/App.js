import { Switch, Route } from "react-router-dom";

import GlobalStyle from "./globalStyles";
import { ThemeProvider } from "styled-components";
import { lightTheme} from "./components/Themes";
import SoundBar from "./subcomponents/SoundBar";





//Components
import Main from "./components/Main"
import AboutPage from "./components/AboutPage"
import FaqPage from "./components/FaqPage"
import BlogPage from "./components/BlogPage"
import RoadmapPage from "./components/RoadmapPage"
import PowerButton from "./subcomponents/PowerButton";



function App() {
  // const location = useLocation();

  return (
    <>
    <PowerButton />
      <GlobalStyle />
     <ThemeProvider theme={lightTheme}>
     <SoundBar />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/faq" component={FaqPage} />
        <Route exact path="/blog" component={BlogPage} />
        <Route exact path="/roadmap" component={RoadmapPage} />
      </Switch>
      </ThemeProvider>
    </>
  );
}

export default App;