import { createRandomRiddleAccessViewModel } from './accessRandomRiddleService';
import { useRiddlesCollection } from '../domain/useRiddlesCollection';
import { useMemo } from 'react';
import { getRandomRiddle } from '../domain/riddlesService';

export const useAccessRandomRiddle = () => {
    const riddles = useRiddlesCollection();
    const { timestamp, workInterval } = createRandomRiddleAccessViewModel();

    const randomRiddle = useMemo(() => {
        if (!riddles || riddles.length === 0) return undefined;
        return getRandomRiddle(riddles);
    }, [riddles]);

    return {
        timestamp,
        workInterval,
        riddle: randomRiddle,
    };
};
