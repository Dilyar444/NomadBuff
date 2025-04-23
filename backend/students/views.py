from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Student
from .serializers import StudentSerializer
from rest_framework import generics


class StudentListView(APIView):
    def get(self, request):
        course = request.GET.get("course")
        students = Student.objects.filter(course=course).order_by("-score")
        data = [{
            "id": s.id,
            "first_name": s.first_name,
            "last_name": s.last_name,
            "group": s.group,
            "score": s.score,
            "faculty": s.faculty,
        } for s in students]
        return Response(data)
    
class StudentListView(generics.ListAPIView):
    serializer_class = StudentSerializer

    def get_queryset(self):
        queryset = Student.objects.all()
        course = self.request.query_params.get('course')
        faculty = self.request.query_params.get('faculty')

        if course:
            queryset = queryset.filter(course=course)
        if faculty:
            queryset = queryset.filter(faculty=faculty)

        return queryset.order_by('-score')