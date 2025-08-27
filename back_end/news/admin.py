from django.contrib import admin

from .models import NewsModel, LikeModel, TagModel


@admin.register(NewsModel)
class NewsAdmin(admin.ModelAdmin):
    pass


@admin.register(LikeModel)
class LikesAdmin(admin.ModelAdmin):
    pass


@admin.register(TagModel)
class TagAdmin(admin.ModelAdmin):
    pass
