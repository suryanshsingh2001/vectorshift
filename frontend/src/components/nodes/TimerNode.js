import { BaseNode } from './BaseNode';
import { useState, useEffect } from 'react';
import { Position } from 'reactflow';
import { Play, Pause, RotateCcw } from 'lucide-react';

export const TimerNode = ({ id, data }) => {
    const [timer, setTimer] = useState(data?.timer || 10); // Default timer value is 10 seconds
    const [inputValue, setInputValue] = useState(data?.timer || 10);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let countdown;
        if (isRunning && timer > 0) {
            countdown = setInterval(() => {
                setTimer((prevTimer) => prevTimer - 1);
            }, 1000);
        }

        return () => clearInterval(countdown);
    }, [isRunning, timer]);

    const handles = [
        { type: 'source', position: Position.Right, id: `${id}-output`, style: { background: 'red', width: '10px', height: '10px' } },
        { type: 'target', position: Position.Left, id: `${id}-input`, style: { background: 'green', width: '10px', height: '10px' } }
    ];

    const inputFields = [
        {
            name: 'text',
            label: 'Timer',
            type: 'text',
            onChange: setInputValue,
        }
    ];

    const toggleTimer = () => {
        if (isRunning) {
            setIsRunning(false);
        } else {
            setTimer(inputValue);
            setIsRunning(true);
        }
    };

    const restartTimer = () => {
        setTimer(inputValue);
        setIsRunning(true);
    };

    const styles = "bg-yellow-100 rounded-lg border border-yellow-300";

    return (
        <BaseNode
            id={id}
            data={{ ...data, timer }}
            type="Timer"
            handles={handles}
            inputFields={inputFields}
            showNameInput={false}
            styles={styles}
        >
            <div className="flex flex-col items-center">
                <div className="flex space-x-2 mt-2">
                    <button onClick={toggleTimer} className={`btn ${isRunning ? 'btn-secondary' : 'btn-primary'} flex items-center`}>
                        {isRunning ? <Pause className="mr-2" /> : <Play className="mr-2" />}
                        {isRunning ? 'Stop' : 'Start'}
                    </button>
                    <button onClick={restartTimer} className="btn btn-warning flex items-center">
                        <RotateCcw className="mr-2" /> Restart
                    </button>
                </div>
                <div className="text-center text-lg font-bold mt-2">{timer}</div>
            </div>
        </BaseNode>
    );
};