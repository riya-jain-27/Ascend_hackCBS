# Generated by Django 4.1.3 on 2022-11-05 17:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("StudentApp", "0002_studentdetails_creditscore"),
    ]

    operations = [
        migrations.AddField(
            model_name="studentdetails",
            name="Amount",
            field=models.IntegerField(default=0),
        ),
    ]
