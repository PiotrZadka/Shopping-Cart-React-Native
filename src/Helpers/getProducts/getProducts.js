import { getAxiosSingleton } from '../axiosSingleton'

const getProducts = async () => {
    let data = []
    try{
        await getAxiosSingleton().get('https://my-json-server.typicode.com/benirvingplt/products/products')
        .then(res =>{
            data = res.data
        })
    }catch(err){
        console.log(err)
    }
    return data
}

export default getProducts