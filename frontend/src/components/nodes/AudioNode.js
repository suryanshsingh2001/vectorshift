
import { BaseNode } from './BaseNode';
import { useState } from 'react';
import { Position } from 'reactflow';

export const AudioNode = ({ id, data }) => {
    const [audioType, setAudioType] = useState(data?.type || 'MP3');

    const handles = [
        { type: 'source', position: Position.Right, id: `${id}-output`, style: { background: 'red', width: '10px', height: '10px' } },
        { type: 'target', position: Position.Left, id: `${id}-input`, style: { background: 'green', width: '10px', height: '10px' } }
    ];

    const inputFields = [
        {
            name: 'type',
            label: 'Audio Type',
            type: 'select',
            options: [
                { value: 'MP3', label: 'MP3' },
                { value: 'WAV', label: 'WAV' },
                { value: 'AAC', label: 'AAC' }
            ],
            onChange: setAudioType
        },
        {
            name: 'volume',
            label: 'Volume',
            type: 'range',
            min: 0,
            max: 100,
            onChange: (value) => console.log(`Volume set to ${value}`)
        }
    ];

    const styles = "bg-orange-100 rounded-lg border border-blue-300";

    return (
        <BaseNode
            id={id}
            data={{ ...data, type: audioType }}
            type="Audio"
            handles={handles}
            inputFields={inputFields}
            styles={styles}
        />
    );
};

