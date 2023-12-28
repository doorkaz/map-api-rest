from django.db import models

# Create your models here.
class Point(models.Model):
    lat = models.FloatField()
    long = models.FloatField()
    tiempo = models.DateField()