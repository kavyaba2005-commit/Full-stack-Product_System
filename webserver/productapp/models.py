from django.db import models

# Create your models here.
#table ProductMaster
class ProductMaster(models.Model):
    productid=models.AutoField(primary_key=True)
    productname=models.CharField(max_length=150)
    description=models.CharField(max_length=200)
    price=models.CharField(max_length=50)
    