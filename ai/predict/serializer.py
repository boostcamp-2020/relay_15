from .models import Predict
from rest_framework import serializers

class PredictSerializer(serializers.ModelSerializer):
    class Meta:
        model = Predict
        fields = "__all__"