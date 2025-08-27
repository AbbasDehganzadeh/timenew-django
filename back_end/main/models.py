from django.db import models

""" BaseModel
    A model that provides common fields
"""


class BaseModel(models.Model):
    created_at = models.DateTimeField(verbose_name="تاریخ تشکیل", auto_now_add=True)
    updated_at = models.DateTimeField(verbose_name="تاریخ بروزرسانی", auto_now=True)
    is_deleted = models.BooleanField(default=False, verbose_name="حذف شده")

    class Meta:
        abstract = True


class BaseContentModel(BaseModel):
    slug = models.SlugField(max_length=60, verbose_name="نامک", unique=True)
    title = models.CharField(
        max_length=120, verbose_name="متا:عنوان", blank=True, unique=True
    )
    excerpt = models.CharField(max_length=500, verbose_name="متا:توضیحات", blank=True)
    priority = models.PositiveIntegerField()

    class Meta:
        abstract = True
