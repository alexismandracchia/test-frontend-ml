import React, {useState,useEffect} from "react"
import { getAllProductos } from "../Services/productosServices"
import Productos from '../Components/Productos';

const Home = ({search}) => {
  
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isLoading,setIsloading] = useState(true);

  const result = async () => {
    try{
      const responseData = await getAllProductos(search);
      setItems(responseData.data.items);
      setCategories(responseData.data.categories);
      setIsloading(false);
    }catch(e){
      console.log(e);
    }
    
  }

  useEffect(() => {
    result();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if(isLoading){
    return(
      <div style={{marginTop: '30px', textAlign: 'center'}}>
        Cargando...
      </div>
    )
  }else{
    return(
      <>
        <div>
          <Productos items={items} categories={categories} />
        </div>
      </>
    )
  }
  
}

export default Home