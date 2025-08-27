from rest_framework import serializers

from .models import NewsModel, LikeModel, TagModel


class NewsSerializer(serializers.ModelSerializer):
    model = NewsModel


class LikeSerializer(serializers.ModelSerializer):
    model = LikeModel


class TagSerializer(serializers.ModelSerializer):
    model = TagModel
