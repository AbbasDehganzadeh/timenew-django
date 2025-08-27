from rest_framework import serializers

from .models import UserModel, AuthorModel, SupervisorModel, AdminModel


class UserSerializer(serializers.ModelSerializer):
    model = UserModel


class AuthorSerializer(serializers.ModelSerializer):
    model = AuthorModel


class SupervisorSerializer(serializers.ModelSerializer):
    model = SupervisorModel


class AdminSerializer(serializers.ModelSerializer):
    model = AdminModel
