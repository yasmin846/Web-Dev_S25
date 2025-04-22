from django.urls import path
from .views import books_detail, books_list

urlpatterns = [
    path('books/', books_list),
    path('books/<int:id>/', books_detail)
]