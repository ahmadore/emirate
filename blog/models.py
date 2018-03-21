from __future__ import unicode_literals

from django.db import models

# Create your models here.
class Post(models.Model):
    title = models.CharField(max_length=100)
    sub_title = models.CharField(max_length=200, null=True, blank=True)
    article = models.TextField()
    image = models.ImageField(upload_to='post/images')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    def __unicode__(self):
        return '%s' %self.title


class PostGallery(models.Model):
    title = models.CharField(max_length=100, null=True, blank=True)
    description = models.CharField(max_length=200, null=True, blank=True)
    post = models.ForeignKey(Post, related_name='images')
    image = models.ImageField(upload_to='post/images')