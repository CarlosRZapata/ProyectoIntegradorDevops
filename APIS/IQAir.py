import requests
import time
import os
from supabase import create_client, Client
from datetime import datetime

#Supabase
SUPABASE_URL = "https://vmjnddokygmgjkwitjeb.supabase.co"
SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZtam5kZG9reWdtZ2prd2l0amViIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA1MjkyODAsImV4cCI6MjA1NjEwNTI4MH0.TVNhl6ZUq5NeFT0uQ91G4NO0cf5sn20L-BscVShTNT4"
supabase: Client = create_client(SUPABASE_URL, SUPABASE_KEY)

# Coordenadas_Camnibiarlas_segun_el_lugar_sea_necesario
lat = 17.9869
lon = -92.9303  
api_key = "a7d96a9f-bdb6-4ca0-8f43-1f8d16ca5472"
url = f"http://api.airvisual.com/v2/nearest_city?lat={lat}&lon={lon}&key={api_key}"

while True:
    try:
        response = requests.get(url, timeout=10)
        response.raise_for_status()
        data = response.json()

        if data.get("status") == "success":
            pollution = data["data"]["current"]["pollution"]
            weather = data["data"]["current"]["weather"]
            city = data["data"]["city"]
            state = data["data"]["state"]
            country = data["data"]["country"]

        
            record = {
                "city": city,
                "state": state,
                "country": country,
                "aqi_us": pollution["aqius"],
                "main_pollutant": pollution["mainus"],
                "temperature": weather["tp"],
                "humidity": weather["hu"],
                "wind_speed": weather["ws"],
                "timestamp": datetime.utcnow().isoformat()
            }

            
            response = supabase.table("air_quality").insert(record).execute()
            print("Datos insertados en Supabase:", record)

        else:
            print("Respuesta inesperada de la API", data)

    except requests.exceptions.RequestException as e:
        print("Error al conectar con la API:", e)
    
    except Exception as e:
        print("Error al insertar en Supabase:", e)

    print("Esperando 1 minuto para la próxima consulta...")
    time.sleep(10)
