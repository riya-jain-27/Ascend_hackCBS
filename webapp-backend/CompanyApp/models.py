from django.db import models
from django.contrib.postgres.fields import ArrayField
from StudentApp.models import *


class CompanyDetails(models.Model):
    Name = models.CharField(max_length=100)
    Email = models.EmailField()
    PhoneNumber = models.IntegerField()
    Password = models.CharField(max_length=50)
    def __str__(self):
        return self.Name

