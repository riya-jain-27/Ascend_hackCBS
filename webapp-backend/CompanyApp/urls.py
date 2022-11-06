from django.urls import path, include
from .views import *

urlpatterns = [
    path('', CompanyHomePage, name="company_homepage"),
    path('logout/', logout, name="logout"),
    path('companyNewuser/', companyNewuser, name="companyNewuser"),
    path('CompanyPage', CompanyPage, name="CompanyPage"),
    path('<int:id>/<slug:slug>', StudentProfileToCompany, name="studentProfileToClient"),
    path('<int:id>/<slug:slug>/update', update, name='update'),

    # path('<int:id>/<slug:slug>/sendDraft', include('Hiring.urls')),
]
