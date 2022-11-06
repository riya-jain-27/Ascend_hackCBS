from django.shortcuts import render
# from Article.models import *

def HomePage(request):
    # articles = LawyerArticles.objects.all()[:2]
    # context = {
    #     "articles":articles
    # }
    return render(request, "HomeApp/home.html")

def About_us(request):
    return render(request, "HomeApp/About_us.html")

def Contact_us(request):
    return render(request, "HomeApp/Contact_us.html")

def Corporate_page(request):
    return render(request, "HomeApp/Corporate_page.html")