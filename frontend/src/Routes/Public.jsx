import { Route, Routes } from "react-router-dom"

import NotFound from '../Pages/NotFound';
import Home from '../Pages/Home';
import Detalle from "../Pages/Detalle";
import Items from "../Pages/Items";

const Public = ({search}) => {
  return(
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/items' element={<Items search={search} />} />
      <Route path='/producto/:id' element={<Detalle />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default Public;