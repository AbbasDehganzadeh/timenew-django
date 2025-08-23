from django.db import models

from accounts.models import UserModel

class NewsModel(models.Model):
    pass
    # slug
    # title: META
    # excerpt: META
    # header: CONTENT
    # text: CONTENT
    # created_at
    # updated_at
    # priority
    # Picture:
    # status: (DRAFT, SUBMITTED, APPROVED, PUBLISHED, ARCHIVED)

class LikesModel(models.Model):
    user = models.ForeignKey(UserModel, on_delete=models.CASCADE)
    news = models.ForeignKey(NewsModel, on_delete=models.CASCADE)
    liked = models.BooleanField()
