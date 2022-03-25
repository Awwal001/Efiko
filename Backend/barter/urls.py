from django.contrib import admin
from django.views.generic import TemplateView
from django.urls import path, include, re_path
from rest_framework.schemas import get_schema_view
from rest_framework.documentation import include_docs_urls
from django.conf import settings
from django.conf.urls.static import static

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
)

urlpatterns = [
   path('admin/', admin.site.urls),
   path('api/', include('content.urls')),
   #path('', TemplateView.as_view(template_name='index.html')),
   path('api/store/', include('accounts.urls.product_urls')),
   path('api/users/', include('accounts.urls.user_urls')),
   path('api/orders/', include('accounts.urls.order_urls')),
]  + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
