from django.http import JsonResponse
from django.shortcuts import render
from api.models import Books
from api.serializer import BooksSerializer

def books_list(request):
    books = Books.objects.all()
    serializer = BooksSerializer(books, many=True)
    # result = []
    # for book in books:
    #     result.append(book.to_json())
    return JsonResponse(serializer.data, safe=False)

def books_detail(request, id):
    book = Books.objects.filter(id=id).first()
    serializer = BooksSerializer(book)
    return JsonResponse(serializer.data, safe=False)
   # return JsonResponse({'error': 'Book not found'})