from django.shortcuts import render
from .models import Annonce 
from .serializers import AnnonceSerializer, UserSerializer
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth.models import User
from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from .models import Announcement, Favorite

class AnnonceView(viewsets.ModelViewSet):
    queryset = Annonce.objects.all()
    serializer_class = AnnonceSerializer
    permission_classes = [IsAuthenticated]

class UserView(viewsets.ModelViewSet):
     queryset = User.objects.all()
     serializer_class = UserSerializer