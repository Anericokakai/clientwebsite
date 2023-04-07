

import { useRoutes } from "react-router-dom";
import routings from "./components/routes/routings";



function App() {
    const route=useRoutes(routings)
    return route

 
}

export default App;
