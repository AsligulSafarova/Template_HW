import NavBar from "../NavBar";
import "../../style.sass";
import CardsList from "../CardsList";
import {data} from "../data/info"
import CompanyCards from "../CompanyCards"



function App() {
  return (
    <>
<NavBar/>
<CardsList infos={data}/>
<CompanyCards/>
    </>
  );
}

export default App;
