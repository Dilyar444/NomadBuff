from django.db import models

class Student(models.Model):
    COURSE_CHOICES = [(1, "1 курс"), (2, "2 курс"), (3, "3 курс")]
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    group = models.CharField(max_length=100)
    score = models.FloatField()
    course = models.IntegerField(choices=COURSE_CHOICES)

    def __str__(self):
        return f"{self.last_name} {self.first_name}"
