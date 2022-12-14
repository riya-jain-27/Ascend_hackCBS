# Generated by Django 4.1.3 on 2022-11-05 11:39

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="CompanyDetails",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("Name", models.CharField(max_length=100)),
                ("Email", models.EmailField(max_length=254)),
                ("PhoneNumber", models.IntegerField()),
                ("Password", models.CharField(max_length=50)),
                ("Max_Loan", models.IntegerField()),
                ("Interest", models.IntegerField()),
            ],
        ),
    ]
