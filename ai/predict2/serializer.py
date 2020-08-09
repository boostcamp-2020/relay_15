from .models import Predict2
from rest_framework import serializers

class Predict2Serializer(serializers.ModelSerializer):
    class Meta:
        model = Predict2
        fields = "__all__"