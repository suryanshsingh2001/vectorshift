

import { ChevronsLeftRight, Brain, ChevronsLeftRightEllipsis, Type, Hexagon, Image, Braces, Timer, AudioLinesIcon, Mic, SquareActivity } from 'lucide-react';
import { ActionNode, AudioNode, CustomNode, ImageNode, InputNode, JSONNode, LLMNode, OutputNode, TextNode, TimerNode } from '../nodes';


export const nodeConfig = [
    { type: 'customInput', label: 'Input', icon: ChevronsLeftRight, component: InputNode },
    { type: 'llm', label: 'LLM', icon: Brain, component: LLMNode },
    { type: 'customOutput', label: 'Output', icon: ChevronsLeftRightEllipsis, component: OutputNode },
    { type: 'text', label: 'Text', icon: Type, component: TextNode },
    { type: 'action', label: 'Action', icon: SquareActivity, component: ActionNode },
    { type: 'image', label: 'Image', icon: Image, component: ImageNode },
    { type: 'json', label: 'JSON', icon: Braces, component: JSONNode },
    { type: 'timer', label: 'Timer', icon: Timer, component: TimerNode, },
    { type: 'audio', label: 'Audio', icon: Mic, component: AudioNode, },
];