# ¡Bienvenido a mi proyecto!
Construyo una API REST que devuelve un listado de "puntos", que luego es consumida por una aplicación en HTML, CSS y JavaScript, en el que se pinta cada punto en un mapa con la API de Google Maps Platform.

El punto sigue la estructura:
> const punto = {
    lat: 45.17,
    long: 55.75,
    tiempo: "1 de agosto 2018",
}

Realizado con Django REST Framework, Django, Python, HTML, CSS, JS.

### Pasos a seguir

1. Crear el entorno virtual
> virtualenv "{nombre_del_entorno}"

2. Activar el entorno virtual.
> .\venv\Scripts\activate

3. Instalar los requerimientos
> pip install -r requirements.txt

4. Entrar en la carpeta 'backend'
> cd .\backend\

5. Activar el servidor.
> python manage.py runserver

6. Abrir otra consola y activar el entorno virtual:
> .\venv\Scripts\activate

7. Ejecutar el siguiente comando en consola:
> python -m http.server 8000

8. Entrar en la página web:
> "http://localhost:8000/html/index.html"
