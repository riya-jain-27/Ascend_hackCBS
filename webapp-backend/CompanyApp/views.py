from email.headerregistry import Address
from tkinter.font import nametofont
from django.shortcuts import render, redirect
from django.http import HttpResponse
from .models import *
# from LawyerApp.models import *
from django.utils.text import slugify
from django.core.exceptions import ObjectDoesNotExist

from django.contrib import messages, auth
from django.core.exceptions import ObjectDoesNotExist
from django.contrib.auth.decorators import login_required

from django.contrib.sites.shortcuts import get_current_site
from django.template.loader import render_to_string
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from django.utils.encoding import force_bytes
from django.contrib.auth.tokens import default_token_generator
from django.core.mail import EmailMessage

from StudentApp.models import *
from accounts.models import *

def CompanyHomePage(request):
    if(request.method == "GET"):
        return render(request, "ClientApp/clientHome.html")
    else:
        email = request.POST['email']
        password = request.POST['password']

        user = auth.authenticate(email=email, password=password)

        if user is not None:
            auth.login(request, user)
            # print("Hellooooooooooooooooooooooooooooooooooooooooo")
            return redirect('homepage')

        else:
            # print('12315456465456465456')
            return redirect('CompanyPage')


def companyNewuser(request):
    if(request.method == "GET"):
        return render(request, "ClientApp/ClientNewuser.html")
    else:
        print("ok")
        name = request.POST.get('name', 0)
        phone_number = request.POST.get('phonenumber', 0)
        password = request.POST.get('password', 0)
        email = request.POST.get('email', 0)
        # interest = request.POST.get('interest', 0)
        # max_loan = request.POST.get('max_loan', 0)

        try:
            print("yes")
            value = Account.objects.get(email = email)
            return redirect('company_homepage')
        except ObjectDoesNotExist:
            pass
        user = Account.objects.create_user(name=name, email=email, phone_number=phone_number, password=password)
        user.is_active = True
        user.save()

        return redirect('company_homepage')



@login_required(login_url = 'company_homepage')
def CompanyPage(request):
    Accepted_students = []
    progress_students = []
    if(request.method == "GET"):
        all_students = StudentDetails.objects.all().order_by('-CreditScore')
        for student in all_students:
            print(student.ApplicationProgress)

            if (student.ApplicationProgress == True):
                Accepted_students.append(student)
            else:
                progress_students.append(student)
        return render(request, "ClientApp/clientLawyerInterface.html", {
            "AStudents": Accepted_students, "Students": progress_students
        })
    else:
        Location = request.POST.get('location', 0)
        amount = request.POST.get('amount', 0)
        name = request.POST.get('name',0)

        if(name):
            all_students = StudentDetails.objects.filter(Name__icontains=name)
            for student in all_students:
                print(student.ApplicationProgress)

                # if (student.ApplicationProgress == True):
                #     Accepted_students.append(student)
                # else:
                #     progress_students.append(student)
        else:

            all_students = StudentDetails.objects.filter(City__iexact=Location, Amount__iexact=amount)
            for student in all_students:
                print(student.ApplicationProgress)

                if(student.ApplicationProgress==True):
                    Accepted_students.append(student)
                else:
                    progress_students.append(student)

        return render(request, "ClientApp/clientLawyerInterface.html", {
            "AStudents": Accepted_students, "Students": progress_students
        })

@login_required(login_url = 'client_homepage')
def StudentProfileToCompany(request, id, slug):
    student_details = StudentDetails.objects.get(pk=id, Slug=slug)
    student_details.save()
    context = {
        'student': student_details,
    }
    return render(request, "ClientApp/LawyerProfileToClient.html", context)

def update(request, id, slug):
    student = StudentDetails.objects.get(pk = id, Slug=slug)
    student.ApplicationProgress = True
    mail = student.Email
    student.save()
    print(student.ApplicationProgress)
    print(mail)


    return redirect('CompanyPage')


@login_required(login_url = 'company_homepage')
def logout(request):
    auth.logout(request)
    messages.success(request, 'You are logged out.')
    return redirect('client_homepage')
#
