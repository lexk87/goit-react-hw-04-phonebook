import { useState, useEffect } from 'react';
import { dataStorage } from 'services/dataStorage';

export const useLocalStorage = (key, defaultVqalue) => {
    const [state, setState] = useState(() => {
        return dataStorage.getData(key) ?? defaultVqalue;
    });

    useEffect(() => {
        dataStorage.setData(key, state);
    }, [key, state]);

    return [state, setState];
};
