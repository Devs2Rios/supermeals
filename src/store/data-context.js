import { useState, useCallback, createContext, useEffect } from "react";

const { REACT_APP_DB_URL } = process.env;

export const DataContext = createContext({
    meals: [],
    loading: false,
    errorMessage: ''
});

export default function DataContextProvider(props) {
    const [meals, setMeals] = useState([]),
        [loading, setLoading] = useState(false),
        [errorMessage, setErrorMessage] = useState(null),
        getMeals = useCallback(async () => {
            const errMsg = 'There was an error fetching the data, please reload the page and try again!';
            setLoading(true);
            try {
                const response = await fetch(`${REACT_APP_DB_URL}/meals.json`);
                if (!response.ok) {
                    throw new Error(errMsg);
                }
                const data = await response.json();
                setMeals(Object.values(data));
            } catch (_) {
                setErrorMessage(errMsg);
            }
            setLoading(false);
        }, []);

    useEffect(() => {
        getMeals();
    }, [getMeals])

    return (
        <DataContext.Provider value={{ meals, loading, errorMessage }}>
            {props.children}
        </DataContext.Provider>
    );
};