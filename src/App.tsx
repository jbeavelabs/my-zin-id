import {
	BrowserRouter as Router,
	Routes,
	Route
  } from "react-router-dom";
import {ZinID} from "./pages/ZinID";
import {HomeScreen} from "./pages/home-screen";


const App = () => {
	return (
		<>
			
			<Router>
				
				
				<Routes>
					<Route
						
						path="/"
						Component={ZinID}
					/>

					<Route
						
						path="/home-screen"
					Component={HomeScreen}
					/>

				</Routes>

				
			</Router>
			
		</>
	);
}

export default App;
