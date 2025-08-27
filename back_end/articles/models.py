from django.db import models

from main.models import BaseModel, BaseContentModel
from categories.models import ContentStatus
from accounts.models import UserModel


class ArticleModel(BaseContentModel):
    header = models.CharField(max_length=100, verbose_name="عنوان")
    body = models.TextField(max_length=10000, verbose_name="بدنه‌ی محتوا", blank=True)
    picture = models.ImageField(
        upload_to="images/heading_image/", verbose_name="تصویر اصلی"
    )
    author = models.ForeignKey(
        UserModel,
        verbose_name="نویسنده",
        null=True,
        on_delete=models.SET_NULL,
        related_name="article_authors",
        related_query_name="article_author",
    )
    status = models.CharField(
        max_length=2,
        verbose_name="وضعیت",
        choices=ContentStatus,
        default=ContentStatus.DRAFT,
    )


class BookmarkModel(BaseModel):
    user = models.ForeignKey(
        UserModel,
        verbose_name="کاربر",
        on_delete=models.CASCADE,
        related_name="bookmarks",
        related_query_name="bookmark",
    )
    article = models.ForeignKey(
        ArticleModel,
        verbose_name="مقاله",
        on_delete=models.CASCADE,
        related_name="bookmarks",
        related_query_name="bookmark",
    )
    is_bookmarked = models.BooleanField(default=True, verbose_name="نشان شده")


class CommentModel(BaseModel):
    user = models.ForeignKey(
        UserModel, verbose_name="کاربر", null=True, on_delete=models.SET_NULL
    )
    aritcle = models.ForeignKey(
        ArticleModel, verbose_name="مقاله", null=True, on_delete=models.SET_NULL
    )
    text = models.CharField(max_length=250, verbose_name="متن", blank=True)


class ContributorModel(BaseModel):
    user = models.ForeignKey(
        UserModel,
        verbose_name="کاربر",
        on_delete=models.CASCADE,
    )
    article = models.ForeignKey(
        ArticleModel,
        verbose_name="مقاله",
        on_delete=models.CASCADE,
    )
    date_contrib = models.DateTimeField(
        verbose_name="تاریخ مشارکت",
        blank=True,
        null=True,
    )
    is_approved = models.BooleanField(default=False, verbose_name="تایید شده")
