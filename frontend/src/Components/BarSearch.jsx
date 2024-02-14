import React from 'react';
import LogoML from '../Assets/Logo_ML.png';
import SearchIcon from '../Assets/ic_Search.png';
import { useCallback } from 'react';

import './BarSearch.css';

const BarSearch = ({search}) => {
  const [buscar, setBuscar] = React.useState(search || '');

  const result = ()=>{
    window.location.href = `/items?search=${buscar}`;
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const keyPress = useCallback((e) => {
    if(e.key === 'Enter'){
      result();
    }
  })

  React.useEffect(() => {
    document.addEventListener('keydown', keyPress);
    return () => document.removeEventListener('keydown', keyPress);
  }, [keyPress]) 


  return (
    <div className="search-bar">
      <div onClick={() => {window.location.href = '/'}} style={{marginTop: '5px'}}><img src={LogoML} alt='Logo' className="ml-logo" /></div>
      <div className="search-input">
        <input type="text" placeholder="Nunca dejes de buscar" value={buscar} onChange={(event)=>setBuscar(event.target.value)} />
        <div className="ml-logo-search" onClick={result}><img src={SearchIcon} alt='Search' /></div>
      </div>
    </div>
  );
};

export default BarSearch;
