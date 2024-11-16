from fastapi.middleware.cors import CORSMiddleware

def add_middlewares(app):
    app.add_middleware(
        CORSMiddleware,
        allow_origins=["http://localhost:3000"],  # Adjust this to your frontend URL
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )