import Router from "./Router";
import JobsContext from "./components/context/JobsContext";
import SelectedJobContext from "./components/context/SelectedJob";

function App() {
  return (
    <div className='App'>
      <JobsContext>
        <SelectedJobContext>
          <Router />
        </SelectedJobContext>
      </JobsContext>
    </div>
  );
}

export default App;
