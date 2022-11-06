from django.contrib import admin
from django.urls import path, include
from .views import *

urlpatterns = [
    path('', HomePage, name="homepage"),
    path('About_us/', About_us, name="about_us"),
    path('Contact_us/', Contact_us, name="Contact_us"),
    # path('corporate_page/', Corporate_page, name="corporate_page"),
    # path('Article', include('Article.urls')),
    path('student/', include("StudentApp.urls"), name="studentPage"),
    path('company/', include("CompanyApp.urls"), name="companyPage"),
    # path('video/', include("VideoApp.urls"), name="videoPage"),
]
