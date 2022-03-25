from rest_framework import serializers
from content.models import Ads,University
from django.conf import settings


# class PostSerializer(serializers.ModelSerializer):
    # class Meta:
        # model = Post
        # fields = ('category', 'id', 'title', 'image', 'slug',
                  # 'description', 'author', 'status')


# class UserRegisterSerializer(serializers.ModelSerializer):

    # email = serializers.EmailField(required=True)
    # username = serializers.CharField(required=True)
    # password = serializers.CharField(min_length=8, write_only=True)

    # class Meta:
        # model = settings.AUTH_USER_MODEL
        # fields = ('email', 'username', 'first_name')
        # extra_kwargs = {'password': {'write_only': True}}
        
# from rest_framework import serializers
# from .models import BlogPost

# class PostSerializer(serializers.ModelSerializer):
    # class Meta:
        # model = Post
        # fields = '__all__'
        # lookup_field = 'slug'

class AdsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ads
        fields = '__all__'
        
class UniversitySerializer(serializers.ModelSerializer):
    class Meta:
        model = University
        fields = '__all__'