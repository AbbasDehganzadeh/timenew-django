from rest_framework import serializers

from .models import CategoryModel


class CategorySerializer(serializers.ModelSerializer):
    model = CategoryModel
