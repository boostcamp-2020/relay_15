from django.urls import path
from . import views

app_name = 'bertpredict'

urlpatterns = [
    path('bertpredict/', views.BertPredictView.as_view()),
]