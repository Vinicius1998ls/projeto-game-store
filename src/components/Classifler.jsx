export default function Classifler(value, list) {

    // ordena a lista onforme o valor recebido
    if (value === 'relevance') {
        list.sort((a, b) => b.relevance - a.relevance);
    } else if (value === 'lowest') {
        list.sort((a, b) => a.price - b.price);
    } else if (value === 'biggest') {
        list.sort((a, b) => b.price - a.price);
    }
     
    return list    
}