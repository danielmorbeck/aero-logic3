import { Link } from 'react-router-dom';
import { useAccessRandomRiddle } from './riddles/useCases/useAccessRandomRiddle';

export const LandingPage = () => {
    const { timestamp, workInterval, riddle } = useAccessRandomRiddle();

    return (
        <main className="text-lg">
            <div>
                <p>Work Interval: {workInterval}</p>
                <p>Timestamp: {timestamp}</p>
                <div className="p-20 text-center">
                    {riddle?.id && (
                        <Link
                            to={`/riddle/${riddle?.id}`}
                            className="border border-blue-500 p-5"
                        >
                            Resolve random riddle
                        </Link>
                    )}
                </div>
            </div>
        </main>
    );
};
