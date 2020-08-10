from rest_framework import viewsets, status
from .models import Predict2
from .serializer import Predict2Serializer
from rest_framework.views import APIView
from rest_framework.response import Response
from predict2 import *
import joblib

class Predict2View(APIView):
    queryset = Predict2.objects.all()
    serializer_class = Predict2Serializer
    
    def get(self, request):
        return Response(request.data, status=200)

    def post(self, request):
        def string_to_list(string1):
            f=open("col_list_final2.txt","r")
            lines=f.readlines()[0].split()
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


        classifier1 = joblib.load('./nb_classifier4.pkl')
        predictData = classifier1.predict([string_to_list(request.data['checktext'])])

        # return Response(request.data, status=200)
        return Response(data={"Result": predictData[0]}, status=status.HTTP_200_OK)