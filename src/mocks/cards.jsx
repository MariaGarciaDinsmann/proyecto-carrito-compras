import Cards from '../catalogo/catalogo.json'

const getData = () => {
    return new Promise((resolve, reject) => {
        if (!Cards.length) {
            reject(new Error('No existen items'));
        }
        setTimeout(() => {
            resolve(Cards);
        }, 2000);
    });
}

export default getData;