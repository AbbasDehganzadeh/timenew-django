from rest_framework import serializers

from .models import ArticleModel, BookmarkModel, CommentModel


class ArticleSerializer(serializers.ModelSerializer):
    model = ArticleModel


class BookmarkSerializer(serializers.ModelSerializer):
    model = BookmarkModel


class CommentSerializer(serializers.ModelSerializer):
    model = CommentModel
