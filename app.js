import { fetchData } from "./module/fetchData.js";
import { renderData } from "./module/renderData.js";
const loadingContainer = document.querySelector('.loading-container');

// console.log(fetchData());

(async () => {
    try {
        loadingContainer.style.display = 'flex';
        const fact = await fetchData();
        renderData(fact);
    } catch (error) {
        alert(error);
    } finally {
        loadingContainer.style.display = 'none'; // Sembunyikan animasi loading
    }
})();



document.querySelector('.refresh-btn').addEventListener('click', async function () {
    try {
        loadingContainer.style.display = 'flex';
        const fact = await fetchData();
        renderData(fact);
    } catch (error) {
        alert(error);
    }   finally {
        loadingContainer.style.display = 'none'; // Sembunyikan animasi loading
    }
    
})



