from django.db import models

from main.models import BaseModel, BaseContentModel
from categories.models import ContentStatus
from accounts.models import UserModel


class TagModel(BaseContentModel):
    name = models.CharField(max_length=10, verbose_name="نشانک", unique=True)
    hyped = models.BooleanField(verbose_name="بخار شده", default=False)


class NewsModel(BaseContentModel):
    header = models.CharField(max_length=100, verbose_name="عنوان")
    text = models.TextField(max_length=2000, verbose_name="متن خبر", blank=True)
    picture = models.ImageField(
        upload_to="images/heading_image/", verbose_name="تصویر اصلی"
    )
    tags = models.ManyToManyField(
        TagModel,
        verbose_name="تگ‌ها",
        related_name="news_tags",
        related_query_name="news_tag",
        db_table="tag_news",
    )
    author = models.ForeignKey(
        UserModel,
        verbose_name="نویسنده",
        null=True,
        on_delete=models.SET_NULL,
        related_name="news_authors",
        related_query_name="news_author",
    )
    status = models.CharField(
        max_length=2,
        verbose_name="وضعیت",
        choices=ContentStatus,
        default=ContentStatus.DRAFT,
    )


class LikeModel(BaseModel):
    user = models.ForeignKey(UserModel, verbose_name="کاربر", on_delete=models.CASCADE)
    news = models.ForeignKey(NewsModel, verbose_name="خبر", on_delete=models.CASCADE)
    liked = models.BooleanField(verbose_name="پسند")
