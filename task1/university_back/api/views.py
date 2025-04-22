# from django.shortcuts import render
# from .models import University, Internship
# from .serializers import UniversitySerializer, InternshipSerializer

# def university_list(request):
#     universities = University.objects.all()


#from rest_framework import generics
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import University, Internship
from .serializers import UniversitySerializer, InternshipSerializer

@api_view(['GET'])
def university_list(request):
    universities= University.objects.all()
    serializer = UniversitySerializer(universities, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def university_detail(request, id):
    try:
        university = University.objects.get(id=id)
    except University.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    serializer = UniversitySerializer(university)
    return Response(serializer.data)

@api_view(['GET'])
def university_internship(request, id):
    try:
        university = University.objects.get(id=id)
    except University.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    internships = university.internships.all()
    serializer = InternshipSerializer(internships, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def internship_list(request):
    internships = Internship.objects.all()
    serializer = InternshipSerializer(internships, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def internship_detail(request, id):
    try:
        internship = Internship.objects.get(id=id)
    except Internship.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    serializer = InternshipSerializer(internship)
    return Response(serializer.data)

@api_view(['GET'])
def top_ten(request):
    internships = Internship.objects.order_by('-stipend')[:10]
    serializer = InternshipSerializer(internships, many=True)
    return Response(serializer.data)