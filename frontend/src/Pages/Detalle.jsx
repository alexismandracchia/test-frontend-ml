//import { useEffect, useState } from "react"
import React from 'react';
import { useParams } from "react-router-dom"
import { getByIdProductos } from "../Services/productosServices"
import Detalle from '../Components/Detalle';

const DetallePage = () =>{
    const {id} = useParams()
    
    const [producto,setProducto] = React.useState({})
    const [isLoading,setIsloading] = React.useState(true)

    React.useEffect(()=>{
      const result = async ()=>{
        try{
          const responseData = await getByIdProductos(id)
          if(responseData.data){
            setProducto(responseData.data)
          }
          
          setIsloading(false)
        }catch(e){
          console.log(e)
        }
        
      }
      result()
    }, [id])

    if(isLoading){
        return(
          <div>
            Cargando...
          </div>
        )
     }else{
        return (
          <Detalle producto={producto} />
        )
     } 
    
}

export default DetallePage;