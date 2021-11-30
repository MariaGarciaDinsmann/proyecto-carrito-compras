import Cards from '../catalogo/catalogo.json'

const getData = ({id = undefined, filterType, filterData = 'oferta'}) => {
    return new Promise((resolve, reject) => {
        if (!Cards.length) {
            reject(new Error('No existen items'));
        }
        setTimeout(() => {
            if (!id) 
                resolve(filterDataByType(Cards, filterType, filterData))
            else
                resolve(findDataById(Cards, id));
        }, 2000);
    });
}

const findDataById = (data, id) => {
    return data.find(element => element.id === id)   
}

const filterDataByType = (data, filterType, filterData) => {
    return data.filter(element => element[filterType] === filterData);
}



export default getData;