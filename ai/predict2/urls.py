from django.urls import path
from . import views

app_name = 'predict2'

urlpatterns = [
    path('predict2/', views.Predict2View.as_view()),
]