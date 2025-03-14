async function productosApi(params) {
    
    try {
        const respuestaApi = await fetch('https://fakestoreapi.com/products');
        const data = await respuestaApi.json();
        return data
    }catch(error){
        console.error("Error:", error)
    }
    
}


export { productosApi }