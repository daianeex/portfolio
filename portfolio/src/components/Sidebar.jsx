import Avatar from "../img/1.jpeg";

import "../styles/components/sidebar.sass";
import InformationContainer from "./informationContainer";
import SocialNetworks from "./SocialNetworks";

const Sidebar = () => {
  return <aside id="sidebar">
    <img src={Avatar} alt="Daiane Gonçalves" srcset="" />
    <p className="title">Desenvolvedor</p>
    <SocialNetworks />
    <InformationContainer />
    <a href="" className="btn">
      Download curriculo
    </a>
  </aside>
};
  
export default Sidebar