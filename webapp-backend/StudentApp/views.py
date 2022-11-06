from email.headerregistry import Address
from django.shortcuts import render, redirect
from django.http import HttpResponse
from .models import *
from django.utils.text import slugify
from django.core.exceptions import ObjectDoesNotExist
from CompanyApp.urls import *

category_credit = {
    'SC':5,
    'ST':6,
    'General':3,
    'OBS':4
}
location_credit = {
    'delhi':1,
    'uttarpradesh':2,
    'bihar':3,
    'jharkhand':4,
    'karnataka':2,
    'punjab':3
}

def StudentHomePage(request):
    if (request.method == "GET"):
        return render(request, "LawyerApp/lawyerHome.html")
    else:
        email = request.POST.get('email', 0)
        password = request.POST.get('password', 0)
        try:
            student_details = StudentDetails.objects.get(
                Email=email, Password=password)
            return redirect(StudentPage, id=student_details.id, slug=student_details.Slug)
        except ObjectDoesNotExist:
            return render(request, "LawyerApp/noProfile.html")
        pass


def studentNewuser(request):
    if (request.method == "GET"):
        return render(request, "LawyerApp/lawyerNewuser.html")
    else:
        name = request.POST.get('name', 0)
        slug = slugify(name)
        gender = request.POST.get('Mygender', 0)
        about = request.POST.get('about', 0)
        address = request.POST.get('address', 0)
        location = request.POST.get('location', 0)
        city = request.POST.get('city', 0)
        phonenumber = request.POST.get('phonenumber', 0)
        category = request.POST.get('category', 0)
        stream = request.POST.get('stream', 0)
        currentclass = request.POST.get('currentclass', 0)
        marks10th = request.POST.get('marks10', 0)
        marks12th = request.POST.get('marks12', 0)
        marksGPA = request.POST.get('gpa', 0)
        familyincome = request.POST.get('familyincome', 0)
        password = request.POST.get('password', 0)
        email = request.POST.get('email', 0)
        amount = request.POST.get('amount', 0)
        resume = request.FILES["resume"]
        gradegree = request.FILES["gradegree"]
        picture = request.FILES["picture"]
        creditscore = (familyincome/100000)+(marksGPA+marks10th+marks12th)/3 + location_credit[location.lower()]+category_credit[category.lower()]
        student_details = StudentDetails(Name=name, Slug=slug, About=about, Gender=gender,
                                       Picture=picture, Category=category, City=city,
                                       Location=location, FamilyIncome=familyincome, Email=email,
                                       PhoneNumber=phonenumber, Address=address,
                                       Password=password, Stream=stream,
                                       CurrentClass=currentclass, Resume=resume,
                                       SupportingPDF=gradegree, Marks10th=marks10th,
                                         Marks12th=marks12th, MarksGPA=marksGPA, Amount = amount,
                                         CreditScore=creditscore)
        try:
            match = StudentDetails.objects.get(Email=email)
            return HttpResponse(f"{match.Email} already exists.")
        except StudentDetails.DoesNotExist:
            student_details.save()

            context = {
                'lawyer': student_details,
            }
            return render(request, "LawyerApp/lawyerprofile.html", context)
        pass


def StudentPage(request, id, slug):
    student_details = StudentDetails.objects.get(pk=id, Slug=slug)
    context = {
        'student': student_details,
    }
    return render(request, "LawyerApp/lawyerprofile.html", context)
