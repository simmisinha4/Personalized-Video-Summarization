from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
import uvicorn

app = FastAPI()

# Mount static files (e.g., CSS, JS)
app.mount("/static", StaticFiles(directory="home"), name="static")

# Load HTML templates
templates = Jinja2Templates(directory="home")

@app.get("/", response_class=HTMLResponse)
async def read_root(request: Request):
    return templates.TemplateResponse("home.html", {"request": request})

# Optional: add more routes as needed
