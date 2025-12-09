export type Riddle = {
    id: string;
    contents: string;
    answers: {
        id: string;
        text: string;
    }[];
};

export const getRandomRiddle = (riddles: Riddle[], excludedId?: string) => {
    const filteredRiddles = excludedId
        ? riddles.filter((riddle) => riddle.id !== excludedId)
        : riddles;
    return filteredRiddles[Math.floor(Math.random() * filteredRiddles.length)];
};
