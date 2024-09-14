export const fetchData = async () => {
    try {
        const response = await fetch('https://catfact.ninja/fact').then(res => res.json()).then(res => res);
        const { fact } = response;
        console.log(fact);
        return fact;
    } catch (error) {
        console.log('Error fetching data:', error);
        return null;
    } 
};

