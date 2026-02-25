from django.shortcuts import render
from .models import *

# Create your views here.
def home(request):
    return render(request,'index.html')
def index(request):
    if request.method == 'POST':
        nm=request.POST.get('name')
        em=request.POST.get('email')
        pnum=request.POST.get('pnum')
        msg=request.POST.get('message')
        print('>>>>>>>>>', nm,em,pnum,msg)
        user=contact(name=nm, email=em,pnumber=pnum, message=msg)
        user.save()
    return render(request, 'index.html')    