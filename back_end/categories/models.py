from django.db import models

from accounts.models import UserModel

class CategoryModel(models.Model):
    followings = models.ManyToManyField(UserModel, related_name='category_following', db_table='followings')
    # slug
    # title: META
    # excerpt: META
    # header: CONTENT
    # description: CONTENT
    # created_at
    # updated_at
    # priority

#! TagClass should be in a model or not
class TagModel(models.Model):
    pass
    # name
