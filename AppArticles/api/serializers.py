from rest_framework import serializers
from .models import Annonce
from .models import User
from rest_framework.authtoken.views import Token

class AnnonceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Annonce
        fields = '__all__'

class UserSerializer(serializers.ModelSerializer):
     class Meta:
         model = User       
         fields = '__all__'
         extra_kwarg = {'password':
         {
            'write_only':True,
            'required':True
         }
         }
     def create(self,validated_data):
         user = User.objects.create_user(**validated_data)    
         Token.objects.create(user=user)
         return user