from django.contrib import admin
from . models import Post, PostGallery

# Register your models here.
admin.site.register(Post)
admin.site.register(PostGallery)