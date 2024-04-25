from django.shortcuts import render
from quiz.models import Quiz

def qpage(request):
    all_records = Quiz.objects.all().order_by('id')
    new_id = 1
    for record in all_records:
        record.question_number = new_id
        record.save()
        new_id += 1
    questions = Quiz.objects.all()
    
    for question in questions:
        print(question.question_number, question.question, question.option1, question.option2, question.option3, question.option4, question.answer)
    return render(request, 'quiz.html', { 'questions': questions})
	
	
