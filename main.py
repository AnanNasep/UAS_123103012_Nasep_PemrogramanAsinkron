from fastapi import FastAPI, Request, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

# Aktifkan CORS supaya bisa diakses dari file HTML lokal
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Ganti dengan asal tertentu kalau mau lebih aman
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Data(BaseModel):
    message: str

@app.post("/submit")
async def submit_data(request: Request, data: Data):
    token = request.headers.get("Authorization")

    if token != "Bearer rahasiatoken123":
        raise HTTPException(status_code=401, detail="Unauthorized")

    return {"received_message": data.message}
