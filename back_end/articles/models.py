from django.db import models

from accounts.models import UserModel

class ArticleModel(models.Model):
    pass
    # slug
    # title: META
    # excerpt: META
    # header: CONTENT
    # body: CONTENT
    # created_at
    # updated_at
    # priority
    # Pictures: MANY-TO-1
    # status: (DRAFT, SUBMITTED, APPROVED, PUBLISHED, ARCHIVED)

class BookmarkModel(models.Model):
    user = models.ForeignKey(UserModel, on_delete=models.CASCADE)
    aritcle = models.ForeignKey(ArticleModel, on_delete=models.CASCADE)
    is_bookmarked = models.BooleanField(default=True)

class CommentModel(models.Model):
    user = models.ForeignKey(UserModel, null=True, on_delete=models.SET_NULL)
    aritcle = models.ForeignKey(ArticleModel, null=True, on_delete=models.SET_NULL)
    text = models.CharField(max_length=200)
