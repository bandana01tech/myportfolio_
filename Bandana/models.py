from django.db import models

# Create your models here.
class contact(models.Model):
    name=models.CharField(max_length=200)
    email=models.EmailField()
    pnumber=models.IntegerField(null=True)
    message=models.CharField(max_length=200)
