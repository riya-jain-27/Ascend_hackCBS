from xml.etree.ElementInclude import include
from django.urls import path, include
from .views import *

urlpatterns = [
    path('', StudentHomePage, name="student_homepage"),
    path('studentNewuser/', studentNewuser, name="studentNewuser"),
    # path('getLawyers/<int:val>', GetLawyers, name="getLawyers"),
    path('<int:id>/<slug:slug>/', StudentPage, name="StudentPage"),
    # path('<int:id>/<slug:slug>/addArticle/', include("Article.urls")),
]
