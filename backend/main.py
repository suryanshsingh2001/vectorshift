from fastapi import FastAPI, Form
from models import Node, Edge, Pipeline
from middleware import add_middlewares

app = FastAPI()


add_middlewares(app)

@app.get('/')
def read_root():
    return {'Ping': 'Pong'}

@app.post('/pipelines/parse')
async def parse_pipeline(pipeline: Pipeline):
    num_nodes = len(pipeline.nodes)
    num_edges = len(pipeline.edges)

    if num_nodes == 0:
        return {'num_nodes': num_nodes, 'num_edges': num_edges, 'is_dag': True, 'message': 'The graph is empty.'}

    # Check if the graph is a DAG
    from collections import defaultdict, deque

    graph = defaultdict(list)
    in_degree = defaultdict(int)

    # Initialize all nodes in in_degree
    for node in pipeline.nodes:
        in_degree[node.id] = 0

    for edge in pipeline.edges:
        graph[edge.source].append(edge.target)
        in_degree[edge.target] += 1

    # Kahn's algorithm for checking DAG
    queue = deque([node.id for node in pipeline.nodes if in_degree[node.id] == 0])
    visited_count = 0

    while queue:
        node = queue.popleft()
        visited_count += 1
        for neighbor in graph[node]:
            in_degree[neighbor] -= 1
            if in_degree[neighbor] == 0:
                queue.append(neighbor)

    is_dag = visited_count == num_nodes
    message = 'The graph is a DAG.' if is_dag else 'The graph is not a DAG.'

    return {'num_nodes': num_nodes, 'num_edges': num_edges, 'is_dag': is_dag, 'message': message}
