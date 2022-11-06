from django.db import models


class StudentDetails(models.Model):
    Name = models.CharField(max_length=100)
    Gender = models.CharField(max_length=100,default="XXX" )
    Slug = models.SlugField(max_length=100, null=True, blank=True)
    CreditScore = models.IntegerField(default=0, null=True)
    Category = models.CharField(max_length=100)
    About = models.TextField()
    FamilyIncome = models.IntegerField(default=0, null=True)
    Location = models.CharField(max_length=50)
    City = models.CharField(max_length=50, default="XXX")
    Stream = models.CharField(max_length=100)
    Email = models.EmailField()
    PhoneNumber = models.IntegerField()
    Address = models.TextField()
    Password = models.CharField(max_length=50)
    CurrentClass = models.CharField(max_length=50)
    Marks10th = models.IntegerField()
    Marks12th = models.IntegerField()
    MarksGPA = models.IntegerField()
    Amount = models.IntegerField(default=0)
    Resume = models.FileField(
        upload_to="Resume/", max_length=500, null=True, default=None)
    SupportingPDF = models.FileField(
        upload_to="Degree/", max_length=500, null=True, default=None)
    Picture = models.FileField(
        upload_to="Picture/", max_length=500, null=True, default=None)

    ApplicationProgress = models.BooleanField(default=False, null=True)

    def __str__(self):
        return self.Name + self.Location
