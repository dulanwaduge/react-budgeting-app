// Local storage -- fetch any data given a key and returns to local storage
// Used to fetch data to dashboard as it loads
export const fetchData = (key) => {
    return JSON.parse(localStorage.getItem(key))
}

// delete item
export const deleteItem = ({key}) => {
    localStorage.removeItem(key)
}