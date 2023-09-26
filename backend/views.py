from django.shortcuts import render
from django.http import HttpResponse
import requests
from django.http import JsonResponse
import json
from django.views.decorators.csrf import csrf_exempt


def index(request):
    return render(request, 'index.html')

def my_view(request):
    return HttpResponse("Hello, Django World!")

@csrf_exempt
def weather_view(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        location = data.get('location')

        # Fetch weather data from OpenWeatherMap API
        api_key = 'ebb8afa4770b82b5724c5b2eac16345a'
        base_url = f"http://api.openweathermap.org/data/2.5/weather?q={location}&appid={api_key}"
        response = requests.get(base_url)
        weather_data = response.json()

        return JsonResponse(weather_data)
    else:
        return JsonResponse({'error': 'Invalid request method'}, status=405)

