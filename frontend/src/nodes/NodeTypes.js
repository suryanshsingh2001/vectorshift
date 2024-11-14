import { InputNode } from "./inputNode";
import { LLMNode } from "./llmNode";
import { OutputNode } from "./outputNode";
import { TextNode } from "./textNode";
import { CustomNode } from "./customNode";
import { ImageNode } from "./ImageNode";
import { JSONNode } from "./JSONNode";



export const nodeTypes = {
    customInput: InputNode,
    llm: LLMNode,
    customOutput: OutputNode,
    text: TextNode,
    custom: CustomNode,
    image: ImageNode,
    json : JSONNode
  };