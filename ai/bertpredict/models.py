from django.db import models

# Create your models here.

class BertPredict(models.Model):
    # id = models.AutoField(primary_key=True)
    checktext = models.TextField()