from django.db import models

# Create your models here.

class Predict(models.Model):
    # id = models.AutoField(primary_key=True)
    checktext = models.TextField()