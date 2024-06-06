import Navbar from './Components/Navbar/Navbar';
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
import { originals,action,comedy,horror,trending,documentaries } from './urls';

const Home = () => {
  return (
    <> <Navbar/>
    <Banner/>
    <RowPost title={"Trending Now"} url={trending}/>
    <RowPost title={"Netfix Originals"} url={originals} isSmall/>
    <RowPost title={"Action"} isSmall url={action}/>
    <RowPost title={"Comedy"} isSmall url={comedy}/>
    <RowPost title={"Horror"} isSmall url={horror}/>
    <RowPost title={"Documentaries"} isSmall url={documentaries}/>
    </>
  )
}

export default Home