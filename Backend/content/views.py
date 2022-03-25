from django.shortcuts import get_object_or_404
from content.models import Ads, University
from .serializers import AdsSerializer, UniversitySerializer
from django.shortcuts import render

from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger

from rest_framework import status
from rest_framework.parsers import MultiPartParser, FormParser
# Display Posts
@api_view(['GET'])
def getAds(request):
    ads = Ads.objects.all()
    serializer = AdsSerializer(ads, many=True)
    return Response(serializer.data)
    
 
@api_view(['GET'])
def getUniversities(request):
    university = University.objects.all()
    serializer = UniversitySerializer(university, many=True)
    return Response(serializer.data)
 

@api_view(['GET'])
def getUniversityAds(request, pk):
    university = University.objects.get(_id=pk)
    ads = university.ads_set.all()
    serializer = AdsSerializer(ads, many=True)
    return Response(serializer.data)



@api_view(['GET'])
def getAd(request, pk):
    ads = Ads.objects.get(_id=pk)
    serializer = AdsSerializer(ads, many=False)
    return Response(serializer.data)


# class PostDetail(generics.RetrieveAPIView):
    # serializer_class = PostSerializer
    # queryset = Post.objects.all()
    # lookup_field = 'slug'
    

# class PostFeaturedView(generics.ListAPIView):
    # queryset = Post.objects.all().filter(featured=True)
    # serializer_class = PostSerializer
    # lookup_field = 'slug'
    # permission_classes = (permissions.AllowAny, )

# class PostCategoryView(APIView):
    # serializer_class = PostSerializer
    # permission_classes = (permissions.AllowAny, )

    # def post(self, request, format=None):
        # data = self.request.data
        # categories = data['categories']
        # queryset = Post.objects.all().filter(category__iexact=categories)

        # serializer = PostSerializer(queryset, many=True)

        # return Response(serializer.data)


# # class PostList(generics.ListAPIView):
    
    # # serializer_class = PostSerializer
    # # queryset = Post.objects.all()


# # class PostDetail(generics.RetrieveAPIView):

    # # serializer_class = PostSerializer

    # # def get_object(self, queryset=None, **kwargs):
        # # item = self.kwargs.get('pk')
        # # return get_object_or_404(Post, slug=item)

# # Post Admin

# class CreatePost(generics.CreateAPIView):
    # permission_classes = [permissions.IsAuthenticated]
    # queryset = Post.objects.all()
    # serializer_class = PostSerializer

# class AdminPostDetail(generics.RetrieveAPIView):
    # permission_classes = [permissions.IsAuthenticated]
    # queryset = Post.objects.all()
    # serializer_class = PostSerializer

# class EditPost(generics.UpdateAPIView):
    # permission_classes = [permissions.IsAuthenticated]
    # serializer_class = PostSerializer
    # queryset = Post.objects.all()

# class DeletePost(generics.RetrieveDestroyAPIView):
    # permission_classes = [permissions.IsAuthenticated]
    # serializer_class = PostSerializer
    # queryset = Post.objects.all()
    
# # Post Search


# class PostListDetailfilter(generics.ListAPIView):

    # queryset = Post.objects.all()
    # serializer_class = PostSerializer
    # filter_backends = [filters.SearchFilter]
    # # '^' Starts-with search.
    # # '=' Exact matches.
    # search_fields = ['^slug']
    
    
# # from rest_framework.response import Response
# # from rest_framework import permissions
# # from rest_framework.views import APIView
# # from rest_framework.generics import ListAPIView, RetrieveAPIView
# # from content.models import BlogPost
# # from content.serializers import PostSerializer

# # class PostList(generics.ListAPIView):
    # # serializer_class = PostSerializer
    # # queryset = Post.objects.all()
    # # lookup_field = 'slug'
    # # permission_classes = (permissions.AllowAny, )

# # class PostDetail(generics.RetrieveAPIView):
    # # serializer_class = PostSerializer
    # # queryset = Post.objects.all()
    # # lookup_field = 'slug'
    # # permission_classes = (permissions.AllowAny, )

# # class PostFeaturedView(generics.ListAPIView):
    # # queryset = Post.objects.all().filter(featured=True)
    # # serializer_class = PostSerializer
    # # lookup_field = 'slug'
    # # permission_classes = (permissions.AllowAny, )

# # class PostCategoryView(APIView):
    # # serializer_class = PostSerializer
    # # permission_classes = (permissions.AllowAny, )

    # # def post(self, request, format=None):
        # # data = self.request.data
        # # category = data['category']
        # # queryset = BlogPost.objects.all().filter(category__iexact=category)

        # # serializer = PostSerializer(queryset, many=True)

        # # return Response(serializer.data)