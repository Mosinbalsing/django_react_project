from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static
urlpatterns = [
    path('', views.getRoutes, name='routes'),
    path('products/', views.getProducts, name='products'),
    path('necklaces/', views.getNecklaces, name='Necklace'),
    path('product/<str:pk>/', views.getProduct, name='product'),
    path('necklace/<str:pk>/', views.getNecklace, name='necklace'),
]
urlpatterns += static(settings.STATIC_URL, document_root=settings.STATICFILES_DIRS[0])