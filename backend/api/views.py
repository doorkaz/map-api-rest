from django.shortcuts import render
from rest_framework import viewsets
from .serializers import PointSerializer
from .models import Point

# Create your views here.

class PointViewSet(viewsets.ModelViewSet):
    queryset = Point.objects.all()
    serializer_class = PointSerializer