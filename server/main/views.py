from django.shortcuts import render
from django.contrib.auth.models import User
from django.http import JsonResponse
from .forms import RegistrationForm


def register(request):
    if request.method == 'POST':
        form = RegistrationForm(request.POST)
        if form.is_valid():
            username = form.cleaned_data['username']
            email = form.cleaned_data['email']
            password = form.cleaned_data['password']

            user = User(username=username, email=email)
            user.set_password(password)
            user.save()

            return JsonResponse({'message': "Регистрация прошла успешно!"})

    else:
        form = RegistrationForm()