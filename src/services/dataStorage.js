export const dataStorage = {
    getData(key) {
        try {
            const savedData = localStorage.getItem(key);
            const parsedData = JSON.parse(savedData);

            return parsedData;
        } catch (error) {
            console.log(error);
        }
    },

    setData(key, data) {
        const strigifiedData = JSON.stringify(data);
        localStorage.setItem(key, strigifiedData);
    },
};
