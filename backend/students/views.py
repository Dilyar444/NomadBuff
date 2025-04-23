from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Student

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
        } for s in students]
        return Response(data)