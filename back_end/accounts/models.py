from django.db import models
from django.contrib.auth.models import AbstractUser

class UserModel(AbstractUser):
    # name
    # username
    @property
    def created_at(self):
        return self.date_joined
    # updated_at
    # role (USER, AUTHOR, SUPERVISOR, ADMIN)
    # email, telephone, password

class AuthorModel(models.Model):
    user = models.OneToOneField(UserModel, on_delete=models.PROTECT)
    # bio
    # is_approved: bool
    # content_submitted_num: smallint

class SupervisorModel(models.Model):
    pass
    # user: 1to1 usermodel
    # bio
    # content_published_num: smallint

class AdminModel(models.Model):
    pass
    # user: 1to1 usermodel
    # bio
    # content_submitted_num: smallint
    # content_published_num: smallint
