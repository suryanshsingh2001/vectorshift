

import { ChevronsLeftRight, Brain, ChevronsLeftRightEllipsis, Type, Hexagon, Image, Braces, Timer, AudioLinesIcon, Mic, SquareActivity } from 'lucide-react';
import { ActionNode, AudioNode, CustomNode, ImageNode, InputNode, JSONNode, LLMNode, OutputNode, TextNode, TimerNode } from '../nodes';


export const nodeConfig = [
    { type: 'customInput', label: 'Input', icon: ChevronsLeftRight, component: InputNode, category: "main", description : "Input node for the pipeline" },
    { type: 'llm', label: 'LLM', icon: Brain, component: LLMNode, category: "main", description : "LLM node for the pipeline" },
    { type: 'customOutput', label: 'Output', icon: ChevronsLeftRightEllipsis, component: OutputNode, category: "main", description : "Output node for the pipeline" },
    { type: 'text', label: 'Text', icon: Type, component: TextNode, category: "main" , description : "Text node for the pipeline"},
    { type: 'action', label: 'Action', icon: SquareActivity, component: ActionNode, category: "custom", description : "Action node for the pipeline" },
    { type: 'image', label: 'Image', icon: Image, component: ImageNode, category: "custom", description : "Image node for the pipeline" },
    { type: 'json', label: 'JSON', icon: Braces, component: JSONNode, category: "custom", description : "JSON node for the pipeline" },
    { type: 'timer', label: 'Timer', icon: Timer, component: TimerNode, category: "custom", description : "Timer node for the pipeline" },
    { type: 'audio', label: 'Audio', icon: Mic, component: AudioNode, category: "custom", description : "Audio node for the pipeline" },
   
];