from django.db import models

from main.models import BaseContentModel
from accounts.models import UserModel


class ContentStatus(models.TextChoices):
    DRAFT = "F", "پیش نویس"
    SUBMITTED = "S", "ثبت شده"
    APPROVED = "A", "تایید شده"
    PUBLISHED = "P", "منتشر شده"
    ARCHIVED = "C", "آرشیو"


class CategoryModel(BaseContentModel):
    followings = models.ManyToManyField(
        UserModel,
        related_name="category_followings",
        related_query_name="following",
        db_table="followings",
    )
    header = models.CharField(max_length=100, verbose_name="عنوان")
    description = models.TextField(max_length=8000, verbose_name="توضیحات", blank=True)
