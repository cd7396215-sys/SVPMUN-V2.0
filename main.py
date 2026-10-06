import os
import uvicorn
from fastapi import FastAPI, HTTPException
from fastapi.responses import FileResponse
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles

app = FastAPI(title="SVPMUN — Bot")
BASE_DIR = os.path.dirname(os.path.abspath(__file__))

# Montar carpetas estáticas
app.mount("/static", StaticFiles(directory=os.path.join(BASE_DIR, "static")), name="static")
app.mount("/staff", StaticFiles(directory=os.path.join(BASE_DIR, "staff")), name="staff")
app.mount("/pdf", StaticFiles(directory=os.path.join(BASE_DIR, "pdf")), name="pdf")


@app.get("/")
async def serve_index():
    # Usar BASE_DIR para asegurar que siempre encuentre el HTML
    html_path = os.path.join(BASE_DIR, "index.html")
    return FileResponse(html_path)

@app.get("/MI6")
async def serve_mi6(): # Nombre de función corregido
    html_path = os.path.join(BASE_DIR, "MI6.html")
    return FileResponse(html_path)

@app.get("/ICE")
async def serve_mi61(): # Nombre de función corregido
    html_path = os.path.join(BASE_DIR, "ICE.html")
    return FileResponse(html_path)

@app.get("/Investigacion")
async def serve_mi62(): # Nombre de función corregido
    html_path = os.path.join(BASE_DIR, "Investigacion.html")
    return FileResponse(html_path)

@app.get("/Senado")
async def serve_mi63(): # Nombre de función corregido
    html_path = os.path.join(BASE_DIR, "SENADO.html")
    return FileResponse(html_path)

@app.get("/AG")
async def serve_mi64(): # Nombre de función corregido
    html_path = os.path.join(BASE_DIR, "AG.html")
    return FileResponse(html_path)
@app.get("/CORTE")
async def serve_mi65(): # Nombre de función corregido
    html_path = os.path.join(BASE_DIR, "CORTE.html")
    return FileResponse(html_path)
@app.get("/APA")
async def serve_mi66(): # Nombre de función corregido
    html_path = os.path.join(BASE_DIR, "APA.html")
    return FileResponse(html_path)

@app.get("/OMC")
async def serve_mi67(): # Nombre de función corregido
    html_path = os.path.join(BASE_DIR, "OMC.html")
    return FileResponse(html_path)

@app.get("/CRISIS")
async def serve_mi68(): # Nombre de función corregido
    html_path = os.path.join(BASE_DIR, "CRISIS.html")
    return FileResponse(html_path)

if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=8000)

    #Exceso de Pensamiento Magico Pendejo EPMD