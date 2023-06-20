from django import forms
from django.contrib.auth.models import User


class RegistrationForm(forms.ModelForm):
    password = forms.CharField(widget=forms.PasswordInput)
    confirmPassword = forms.CharField(widget=forms.PasswordInput)

    class Meta:
        model = User
        fields = [
            'username',
            'email',
            'password',
            'confirmPassword'
        ]

    def clean(self):
        cleanedData = super().clean()
        password = cleanedData.get('password')
        confirmPassword = cleanedData.get('confirmPassword')

        if password != confirmPassword:
            raise forms.ValidationError("Пароли не совпадают!")