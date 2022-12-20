import NavBar from "../Nav/Navbar";
import { PAGES } from '../../utilities/main_pages';
import { SUBPAGES } from "../../utilities/sub_pages";


export default function Layout(props){
    const { children } =  props;
    return(
        <div className="layout_container">
            <NavBar pages={PAGES} subpages={SUBPAGES}/>
            {children}
            {/* <Footer /> */}

        </div>
    );
    
}