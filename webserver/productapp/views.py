from django.shortcuts import render
from rest_framework import viewsets,status
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.permissions import AllowAny,IsAuthenticated
from rest_framework.authtoken.models import Token
from django.shortcuts import get_object_or_404
from .models import *
from .serializers import *

# Create your views here.

class AdminViewSet(viewsets.ViewSet):
    permission_classes=[AllowAny]
    @action(detail=False,methods=['post'])
    def addproduct(self,request):
        product=ProductMaster.objects.create(productname=request.data["productname"],description=request.data["description"],price=request.data["price"])
        return Response({'message':'Product Added Successfully'},status=status.HTTP_201_CREATED)
        