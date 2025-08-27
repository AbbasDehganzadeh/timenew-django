from django.contrib import admin

from .models import UserModel, AuthorModel, SupervisorModel, AdminModel


@admin.register(UserModel)
class UserAdmin(admin.ModelAdmin):
    pass


@admin.register(AuthorModel)
class AuthorAdmin(admin.ModelAdmin):
    pass


@admin.register(SupervisorModel)
class SupervisorAdmin(admin.ModelAdmin):
    pass


@admin.register(AdminModel)
class ManAdmin(admin.ModelAdmin):
    pass
