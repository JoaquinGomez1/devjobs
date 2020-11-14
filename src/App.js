import Router from "./Router";
import JobsContext from "./components/context/JobsContext";
import SelectedJobContext from "./components/context/SelectedJob";
import StyleTheme from "./components/context/ThemeContext";

function App() {
  return (
    <div className='App'>
      <JobsContext>
        <SelectedJobContext>
          <StyleTheme>
            <Router />
          </StyleTheme>
        </SelectedJobContext>
      </JobsContext>
    </div>
  );
}

export default App;
