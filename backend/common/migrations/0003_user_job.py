# Generated by Django 3.2.25 on 2024-08-08 12:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('common', '0002_user_nickname'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='job',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
    ]
