# Generated by Django 5.0.4 on 2024-04-25 12:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("quiz", "0003_remove_quiz_question_num"),
    ]

    operations = [
        migrations.AddField(
            model_name="quiz",
            name="question_number",
            field=models.IntegerField(default=0),
        ),
    ]
