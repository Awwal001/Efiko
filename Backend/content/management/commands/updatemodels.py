from django.core.management.base import BaseCommand
import pandas as pd
from content.models import University
class Command(BaseCommand):
    help = 'import booms'

    def add_arguments(self, parser):
        pass

    def handle(self, *args, **options):
        
        df = pd.read_csv('universities.csv')
        for NAME, ADDRESS in zip(df.Name,df.address):
            models = University(name=NAME, address=ADDRESS)
            models.save()