import instance from "../Config/axios"

export function getAllProductos(q){
    return instance.get(`items?q=${q}`)
}

export function getByIdProductos(id){
    return instance.get(`items/${id}`)
}
