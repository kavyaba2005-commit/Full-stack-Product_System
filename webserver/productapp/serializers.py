from rest_framework import serializers
from .models import *
class ProductMasterSerializer(serializers.ModelSerializer):
    class Meta:
        model=ProductMaster
        fields=['productid','productname','description','price']