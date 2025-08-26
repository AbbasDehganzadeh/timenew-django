from django.db import models
from django.contrib.auth.models import AbstractUser

from main.models import BaseModel
from .validators import re_phone_validator


class Role(models.IntegerChoices):
    USER = 0, "کاربر"
    AUTHOR = 1, "نویسنده"
    SUPERVISOR = 2, "سرپرست"
    ADMIN = 3, "مدیر"


class UserModel(BaseModel, AbstractUser):
    name = models.CharField(max_length=50, verbose_name="نام", blank=True)
    username = models.CharField(
        max_length=25, verbose_name="نام کاربری", null=False, unique=True
    )
    telephone = models.CharField(
        max_length=13,
        validators=[re_phone_validator],
        verbose_name="شماره همراه",
        blank=True,
        null=True,
    )

    @property
    def created_at(self):
        return self.date_joined

    role = models.PositiveSmallIntegerField(
        choices=Role.choices, verbose_name="رول", default=Role.USER
    )


class AuthorModel(models.Model):
    user = models.OneToOneField(
        UserModel,
        related_name="author",
        related_query_name="person",
        verbose_name="مشخصات کاربر",
        on_delete=models.PROTECT,
    )
    bio = models.CharField(max_length=700, verbose_name="شرح حال", blank=True)
    is_approved = models.BooleanField(default=False, verbose_name="تایید شده")
    content_submitted_num = models.PositiveIntegerField(
        verbose_name="تعداد محتوای ثبتی", blank=True
    )

    def save(self, *args, **kwargs):
        self.user.role = Role.AUTHOR
        return super(AuthorModel, self).save(*args, **kwargs)


class SupervisorModel(models.Model):
    user = models.OneToOneField(
        UserModel,
        related_name="supervisor",
        related_query_name="person",
        verbose_name="مشخصات کاربر",
        on_delete=models.PROTECT,
    )
    bio = models.CharField(max_length=700, verbose_name="شرح حال", blank=True)
    content_published_num = models.PositiveIntegerField(
        verbose_name="تعداد محتوای نشری", blank=True
    )
    sectors = models.CharField(max_length=100, verbose_name="حوزه", default="__none__")

    def save(self, *args, **kwargs):
        self.user.role = Role.SUPERVISOR
        return super(AuthorModel, self).save(*args, **kwargs)


class AdminModel(models.Model):
    user = models.OneToOneField(
        UserModel,
        related_name="admin",
        related_query_name="person",
        verbose_name="مشخصات کاربر",
        on_delete=models.PROTECT,
    )
    bio = models.CharField(max_length=1200, verbose_name="شرح حال", blank=True)
    content_submitted_num = models.PositiveIntegerField(
        verbose_name="تعداد محتوای ثبتی", blank=True
    )
    content_published_num = models.PositiveIntegerField(
        verbose_name="تعداد محتوای نشری", blank=True
    )
    sectors = models.CharField(max_length=100, verbose_name="حوزه", default="__none__")

    def save(self, *args, **kwargs):
        self.user.role = Role.ADMIN
        return super(AuthorModel, self).save(*args, **kwargs)
