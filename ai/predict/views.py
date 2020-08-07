from rest_framework import viewsets, status
from .models import Predict
from .serializer import PredictSerializer
from rest_framework.views import APIView
from rest_framework.response import Response

class PredictView(APIView):
    queryset = Predict.objects.all()
    serializer_class = PredictSerializer

    def get(self, request):
        return Response(request.data, status=200)

    def post(self, request):
        return Response(request.data, status=200)