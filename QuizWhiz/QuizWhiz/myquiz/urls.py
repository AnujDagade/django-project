
from django.urls import path, include
from django.contrib import admin
from myquiz import views as index_views


urlpatterns = [
	path('', index_views.index),
	path('login/', index_views.login),
	path('questions/', include('quiz.urls')),

    path('admin/', admin.site.urls),
]

