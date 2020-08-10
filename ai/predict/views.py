from rest_framework import viewsets, status
from .models import Predict
from .serializer import PredictSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from predict import *
import joblib

class PredictView(APIView):
    queryset = Predict.objects.all()
    serializer_class = PredictSerializer

    def get(self, request):
        return Response(request.data, status=200)

    def post(self, request):
        def string_to_list(string1):
            f=open("./col_list.txt","r",encoding="utf-8")
            # f=open(col_list,"rt",encoding="utf-8")
            lines=[]
            for line in f.readlines():
                lines.append(line.replace("\n",""))
            lines=lines[1:]
            # print(lines)
            length=len(lines)
            result=[0]*length
            for i in range(length):
                if lines[i] in string1:
                    result[i]+=1
                    if lines[i] == "ㅂㅅ":
                        print("!!")
            # print(sum(result))
            return result
            pass


        classifier1 = joblib.load('./nb_classifier.pkl')
        predictData = classifier1.predict([string_to_list(request.data['checktext'])])

        # return Response(request.data, status=200)
        return Response(data={"Result": predictData[0]}, status=status.HTTP_200_OK)