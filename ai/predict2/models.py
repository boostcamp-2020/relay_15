from django.db import models

# Create your models here.

class Predict2(models.Model):
    # id = models.AutoField(primary_key=True)
    checktext = models.TextField()