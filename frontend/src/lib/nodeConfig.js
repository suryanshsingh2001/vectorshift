

import { ChevronsLeftRight, Brain, ChevronsLeftRightEllipsis, Type, Image, Braces, Timer, Mic, SquareActivity } from 'lucide-react';
import { ActionNode, AudioNode, ImageNode, InputNode, JSONNode, LLMNode, OutputNode, TextNode, TimerNode } from '../components/nodes';



/**
 * Node configuration array
 * 
 * @description
 * This array contains the configuration for different types of nodes used in the application.
 * Each node configuration object includes the following properties:
 * 
 * @property {string} type - The unique type identifier for the node.
 * @property {string} label - The label for the node.
 * @property {React.Component} icon - The icon component to display for the node.
 * @property {React.Component} component - The React component representing the node.
 * @property {string} category - The category of the node (e.g., "main", "custom").
 * @property {string} description - The description of the node, used as a tooltip.
 */
export const nodeConfig = [
    { type: 'customInput', label: 'Input', icon: ChevronsLeftRight, component: InputNode, category: "main", description: "Input node for the pipeline" },
    { type: 'llm', label: 'LLM', icon: Brain, component: LLMNode, category: "main", description: "LLM node for the pipeline" },
    { type: 'customOutput', label: 'Output', icon: ChevronsLeftRightEllipsis, component: OutputNode, category: "main", description: "Output node for the pipeline" },
    { type: 'text', label: 'Text', icon: Type, component: TextNode, category: "main", description: "Text node for the pipeline" },
    { type: 'action', label: 'Action', icon: SquareActivity, component: ActionNode, category: "custom", description: "Action node for the pipeline" },
    { type: 'image', label: 'Image', icon: Image, component: ImageNode, category: "custom", description: "Image node for the pipeline" },
    { type: 'json', label: 'JSON', icon: Braces, component: JSONNode, category: "custom", description: "JSON node for the pipeline" },
    { type: 'timer', label: 'Timer', icon: Timer, component: TimerNode, category: "custom", description: "Timer node for the pipeline" },
    { type: 'audio', label: 'Audio', icon: Mic, component: AudioNode, category: "custom", description: "Audio node for the pipeline" },

];