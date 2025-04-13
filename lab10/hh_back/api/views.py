from django.shortcuts import get_object_or_404

from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from .serializers import CompanySerializer, VacancySerializer
from .models import Company, Vacancy

# Create your views here.
@api_view(['GET', 'POST'])
def company_list(request):
    if request.method == 'GET':
        companies = Company.objects.all()
        serializer = CompanySerializer(companies, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = CompanySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)
        return Response(status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'DELETE'])
def company_detail(request, id):
    company = get_object_or_404(Company, id=id)
    if request.method == 'GET':
        serializer = CompanySerializer(company)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = CompanySerializer(company, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400)
    elif request.method == 'DELETE':
        company.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    # try:
    #     company = Company.objects.get(id=id)
    # except Company.DoesNotExist:
    #     return Response(status=status.HTTP_404_NOT_FOUND)
    # serializer = CompanySerializer(company)
    # return Response(serializer.data)

@api_view(['GET'])
def company_vacancies(request, id):
    try:
        company = Company.objects.get(id=id)
    except Company.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    vacancies = company.vacancies.all()
    serializer = VacancySerializer(vacancies, many=True)
    return Response(serializer.data)

class VacancyList(APIView):
    def get(self, request):
        vacancies = Vacancy.objects.all()
        serializer = VacancySerializer(vacancies, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = VacancySerializer(data=request.data)
        if serializer.is_valid():
            vacancy = serializer.save()
            return Response(VacancySerializer(vacancy).data, status=201)
        return Response(status=status.HTTP_400_BAD_REQUEST)
    
class VacancyDetail(APIView):
    def get_object(self, id):
        return get_object_or_404(Vacancy, id=id)

    def get(self, request, id):
        vacancy = self.get_object(id)
        serializer = VacancySerializer(vacancy)
        return Response(serializer.data)

    def put(self, request, id):
        vacancy = self.get_object(id)
        serializer = VacancySerializer(vacancy, data=request.data)
        if serializer.is_valid():
            updated_vacancy = serializer.save()
            return Response(VacancySerializer(updated_vacancy).data)
        return Response(status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, id):
        vacancy = self.get_object(id)
        vacancy.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    
# @api_view(['GET'])
# def vacancy_list(request):
#     vacancies = Vacancy.objects.all()
#     serializer = VacancySerializer(vacancies, many=True)
#     return Response(serializer.data)

# @api_view(['GET'])
# def vacancy_detail(request, id):
#     try:
#         vacancy = Vacancy.objects.get(id=id)
#     except Vacancy.DoesNotExist:
#         return Response(status=status.HTTP_404_NOT_FOUND)
#     serializer = VacancySerializer(vacancy)
#     return Response(serializer.data)

@api_view(['GET'])
def top_ten(request):
    vacancies = Vacancy.objects.order_by('-salary')[:10]
    serializer = VacancySerializer(vacancies, many=True)
    return Response(serializer.data)