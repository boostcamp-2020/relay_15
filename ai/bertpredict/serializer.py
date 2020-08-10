from .models import BertPredict
from rest_framework import serializers

class BertPredictSerializer(serializers.ModelSerializer):
    class Meta:
        model = BertPredict
        fields = "__all__"