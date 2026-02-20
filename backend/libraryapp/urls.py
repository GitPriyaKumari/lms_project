from django.urls import path
from . import views

urlpatterns = [
    path("api/admin/login/",admin_login_api),
]
