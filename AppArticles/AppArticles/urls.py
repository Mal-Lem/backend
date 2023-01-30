
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from api.views import AnnonceView, UserView
from rest_framework import routers
from rest_framework.authtoken.views import obtain_auth_token

route = routers.DefaultRouter()
route.register("",AnnonceView,basename= 'annonceview')
route.register("",UserView,basename= 'userview')


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(route.urls)),
    path('auth/', obtain_auth_token),
]+static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
