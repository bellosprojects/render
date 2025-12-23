from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles

app = FastAPI()

@app.get("/api/status")
async def read_status():
    return {"status": "ok"}

app.mount("/", StaticFiles(directory="static", html=True), name="static")