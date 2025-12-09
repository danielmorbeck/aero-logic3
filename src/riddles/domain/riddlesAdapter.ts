export const fetchRiddles = async () => {
    const response = await fetch('http://localhost:3000/riddles');
    const data = await response.json();
    return data;
};
