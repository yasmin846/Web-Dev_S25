from django.urls import path
# from .views import *
from . import views

urlpatterns = [
    path('universities/', views.university_list),
    path('universities/<int:id>/', views.university_detail),
    path('universities/<int:id>/internships', views.university_internship),
    path('internships/', views.internship_list),
    path('internships/<int:id>/', views.internship_detail),
    path('internships/top_ten/', views.top_ten),
]