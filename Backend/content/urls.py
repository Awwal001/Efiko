# from .views import PostList, PostDetail, PostListDetailfilter, CreatePost, EditPost, AdminPostDetail, DeletePost, PostFeaturedView, PostCategoryView
# from django.urls import path
from content import views
from django.urls import path

app_name = 'content'

urlpatterns = [
    # path('', PostList.as_view(), name='listpost'),
    # path('post/<str:pk>/', PostDetail.as_view(), name='detailpost'),
    # path('search/', PostListDetailfilter.as_view(), name='searchpost'),
    
    path('', views.getAds, name="ads"),
    path('universities/', views.getUniversities, name='Universities'),
    path('<str:pk>/universities/', views.getUniversityAds, name="University-ads"),
    path('<str:pk>/', views.getAd, name="Ad"),
    
    
    #path('featured', PostFeaturedView.as_view()),
    #path('<slug>', PostDetail.as_view()),
    # Post Admin URLs
    # path('admin/create/', CreatePost.as_view(), name='createpost'),
    # path('admin/edit/postdetail/<int:pk>/', AdminPostDetail.as_view(), name='admindetailpost'),
    # path('admin/edit/<int:pk>/', EditPost.as_view(), name='editpost'),
    # path('admin/delete/<int:pk>/', DeletePost.as_view(), name='deletepost'),
]

# # urlpatterns = [
    # # path('', PostList.as_view()),
    # # path('featured', PostFeaturedView.as_view()),
    # # path('category', PostCategoryView.as_view()),
    # # path('<slug>', PostDetail.as_view()),
# # ]