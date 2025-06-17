from django.shortcuts import render
from empApp.models import Employee
from empApp.serializers import EmployeeSerializer
from rest_framework.viewsets import ModelViewSet

# Create your views here.

class EmpView(ModelViewSet):
    serializer_class=EmployeeSerializer
    queryset=Employee.objects.all()

