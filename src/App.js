import { BrowserRouter as Navigation } from 'react-router-dom'
import { Router } from './app/views/routers/Router'


function App() {
  return (
    <>
	 	<Navigation>
			<Router />
		</Navigation>
	 </>
  );
}

export default App;
