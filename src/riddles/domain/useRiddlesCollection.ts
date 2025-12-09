import { useQuery } from '@tanstack/react-query';
import { fetchRiddles } from './riddlesAdapter';

export const useRiddlesCollection = () => {
    const query = useQuery({
        queryKey: ['riddles'],
        queryFn: fetchRiddles,
    });

    return query.data;
};
