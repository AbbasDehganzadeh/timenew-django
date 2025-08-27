from django.contrib import admin

from .models import ArticleModel, BookmarkModel, CommentModel


@admin.register(ArticleModel)
class ArticleAdmin(admin.ModelAdmin):
    pass


@admin.register(BookmarkModel)
class BookmarkAdmin(admin.ModelAdmin):
    pass


@admin.register(CommentModel)
class CommentAdmin(admin.ModelAdmin):
    pass
