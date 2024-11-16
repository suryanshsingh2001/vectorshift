# VectorShift Technical Assessment

This document explains how the tasks for the VectorShift frontend technical assessment were completed. It includes detailed explanations for each part of the assessment and the documentation for the `BaseNode` component used in the project.

---

## Task Breakdown

### Part 1: Node Abstraction
- **Approach**:
  - Created a Higher-Order Component (HOC) called `BaseNode` to handle common functionality across all node types.
  - The abstraction includes:
    - **Styling**: Basic Tailwind styling with the ability to extend and merge custom styles.
    - **Input Fields**: Dynamically rendered input fields with different types (e.g., text, select, textarea).
    - **Handles**: Handles for connections with flexible positioning and optional labels.
    - **Children**: Support for injecting custom components into nodes.
  - Implemented a single configuration file for managing all node types. This file centralizes the configuration for toolbar addition, value extraction, and other functionalities.
  - Demonstrated flexibility by creating five new node types using this abstraction.

### Part 2: Styling
- **Approach**:
  - Used `tailwindcss` and `daisyUI` to implement a unified design language.
  - Focused on an intuitive and visually appealing UI.
  - Components are styled with responsiveness and consistent spacing in mind.

### Part 3: Text Node Logic
- **Approach**:
  - Created a custom React hook to dynamically adjust the width and height of the Text node based on user input.
  - Utilized `useEffect` and pattern matching to detect variables enclosed in `{{ }}`.
  - Automatically added corresponding handles for variables detected in the input field, including edge labels for better clarity.

### Part 4: Backend Integration
- **Approach**:
  - Updated the `/pipelines/parse` endpoint in the backend to:
    - Calculate the number of nodes and edges in the pipeline.
    - Check if the pipeline forms a Directed Acyclic Graph (DAG) using Kahn’s algorithm.
    - Return a JSON response: `{num_nodes: int, num_edges: int, is_dag: bool}`.
  - Integrated this backend functionality with the frontend:
    - Added logic to send pipeline data to the backend using the `submit.js` file.
    - Displayed an alert with the number of nodes, edges, and DAG status after receiving the response.
  - Included edge cases to handle invalid pipelines.

---

## BaseNode Component Documentation

The `BaseNode` component is a reusable React component designed to represent nodes in a flowchart or graph. Below is the detailed documentation for its props, functionality, and the structure of associated objects.

### Props

| Prop Name       | Type       | Default       | Description                                                                 |
|------------------|------------|---------------|-----------------------------------------------------------------------------|
| `id`            | `string`   |               | The unique identifier for the node.                                        |
| `data`          | `object`   | `{}`          | The data associated with the node.                                         |
| `type`          | `string`   | `'Node'`      | The type of the node.                                                      |
| `handles`       | `array`    | `[]`          | An array of handle objects for connecting the node.                        |
| `inputFields`   | `array`    | `[]`          | An array of input field objects for the node.                              |
| `showNameInput` | `boolean`  | `true`        | Whether to show the name input field.                                      |
| `message`       | `string`   | `null`        | An optional message to display below the input fields.                     |
| `styles`        | `string`   | `''`          | Additional Tailwind CSS classes to apply to the node.                      |
| `children`      | `ReactNode`|               | Additional children elements to render inside the node.                    |

---

### Handles Structure

Each `handle` object defines a connection point for the node.  

| Property Name | Type       | Required | Description                                                        |
|---------------|------------|----------|--------------------------------------------------------------------|
| `id`          | `string`   | Yes      | Unique identifier for the handle.                                 |
| `type`        | `string`   | Yes      | Type of handle, either `'source'` or `'target'`.                  |
| `position`    | `string`   | Yes      | Position of the handle, e.g., `'top'`, `'left'`, `'right'`, `'bottom'`. |
| `text`        | `string`   | No       | Optional text label displayed next to the handle.                 |
| `style`       | `object`   | No       | Inline styles applied to the handle.                              |

**Example:**
```json
[
  { 
    "id": "input1", 
    "type": "target", 
    "position": "left", 
    "text": "Input", 
    "style": { "top": "10px" } 
  },
  { 
    "id": "output1", 
    "type": "source", 
    "position": "right", 
    "text": "Output", 
    "style": { "top": "50px" } 
  }
]
```

### InputFields Structure

Each `inputField` object defines a form element for the node.

| Property Name | Type       | Required | Description                                                        |
|---------------|------------|----------|--------------------------------------------------------------------|
| `name`        | `string`   | Yes      | Unique name identifier for the input field.                        |
| `label`       | `string`   | Yes      | Display label for the input field.                                 |
| `type`        | `string`   | Yes      | Type of the input field, e.g., 'text', 'select', 'textarea', 'range'. |
| `options`     | `array`    | No       | For select inputs, an array of options with value and label.       |
| `min`         | `number`   | No       | Minimum value for range input.                                     |
| `max`         | `number`   | No       | Maximum value for range input.                                     |
| `onChange`    | `function` | Yes      | Callback triggered when the value changes.                         |
| `ref`         | `React.Ref`| No       | Reference for advanced input behaviors (e.g., resizing).           |

**Example:**
```json
[
  { 
    "name": "input1", 
    "label": "Input 1", 
    "type": "text", 
    "onChange": (value) => console.log(value) 
  },
  { 
    "name": "input2", 
    "label": "Select Input", 
    "type": "select", 
    "options": [
      { "value": "a", "label": "Option A" },
      { "value": "b", "label": "Option B" }
    ], 
    "onChange": (value) => console.log(value) 
  }
]
```

---

## Node Configuration Documentation

The `nodeConfig` array contains the configuration for different types of nodes used in the application. Each node configuration object includes the following properties:

### Node Configuration Structure

| Property Name | Type             | Required | Description                                                        |
|---------------|------------------|----------|--------------------------------------------------------------------|
| `type`        | `string`         | Yes      | The unique type identifier for the node.                           |
| `label`       | `string`         | Yes      | The label for the node.                                            |
| `icon`        | `React.Component`| Yes      | The icon component to display for the node.                        |
| `component`   | `React.Component`| Yes      | The React component representing the node.                         |
| `category`    | `string`         | Yes      | The category of the node (e.g., "main", "custom").                 |
| `description` | `string`         | Yes      | The description of the node, used as a tooltip.                    |

**Example:**
```json
[
  { 
    "type": "customInput", 
    "label": "Input", 
    "icon": ChevronsLeftRight, 
    "component": InputNode, 
    "category": "main", 
    "description": "Input node for the pipeline" 
  },
  { 
    "type": "llm", 
    "label": "LLM", 
    "icon": Brain, 
    "component": LLMNode, 
    "category": "main", 
    "description": "LLM node for the pipeline" 
  },
  { 
    "type": "customOutput", 
    "label": "Output", 
    "icon": ChevronsLeftRightEllipsis, 
    "component": OutputNode, 
    "category": "main", 
    "description": "Output node for the pipeline" 
  },
  { 
    "type": "text", 
    "label": "Text", 
    "icon": Type, 
    "component": TextNode, 
    "category": "main", 
    "description": "Text node for the pipeline" 
  },
  { 
    "type": "action", 
    "label": "Action", 
    "icon": SquareActivity, 
    "component": ActionNode, 
    "category": "custom", 
    "description": "Action node for the pipeline" 
  }
]
```

---

## Folder Structure

The project has the following folder structure:

```
/frontend
    /public
    /src
        /components
            /main
            /nodes
        /lib
        App.js
        index.js
    package.json
    tailwind.config.js
    .gitignore
/backend
    main.py
    models.py
    middleware.py
    requirements.txt
README.md
```

## Setup Instructions

### Prerequisites

- Node.js and npm
- Python 3.x
- FastAPI
- Uvicorn

### Frontend Setup

1. Navigate to the `/frontend` directory:
    ```sh
    cd frontend
    ```
2. Install dependencies:
    ```sh
    npm install
    ```
3. Start the development server:
    ```sh
    npm start
    ```

### Backend Setup

1. Navigate to the `/backend` directory:
    ```sh
    cd backend
    ```
2. Start the backend server:
    ```sh
    uvicorn main:app --reload
    ```
### Running the Application

1. Ensure both frontend and backend servers are running.
2. Open the frontend application in your browser.
3. Create a pipeline using the node editor.
4. Click the submit button to send the pipeline data to the backend.
5. An alert will display the number of nodes, edges, and whether the pipeline is a DAG.
