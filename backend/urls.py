
from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('',views.index, name='index'),
    path('my-url/', views.my_view, name='my-view-name'),
    path('weather_view/', views.weather_view, name='weather_view'),
]

