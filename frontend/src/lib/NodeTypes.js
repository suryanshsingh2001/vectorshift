
import { nodeConfig } from "../lib/nodeConfig";

export const nodeTypes = nodeConfig.reduce((acc, { type, component }) => {
  acc[type] = component;
  return acc;
}, {});