from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from .models import Post
import json

# Create your views here.
def index(request):
    data = Post.objects.all()
    return render(request, 'blog/post.html', {'posts': data })