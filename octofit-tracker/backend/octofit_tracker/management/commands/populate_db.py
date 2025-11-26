from django.core.management.base import BaseCommand


from octofit_tracker.models import User, Team, Activity, Leaderboard, Workout
from datetime import date
from pymongo import MongoClient

class Command(BaseCommand):
    help = 'Populate the octofit_db database with test data'

    def handle(self, *args, **options):
        # Use PyMongo to clear collections to avoid issues with missing PKs
        client = MongoClient('mongodb://localhost:27017')
        db = client['octofit_db']
        for coll in ['octofit_tracker_user', 'octofit_tracker_team', 'octofit_tracker_activity', 'octofit_tracker_leaderboard', 'octofit_tracker_workout']:
            db[coll].delete_many({})

        # Create Teams
        marvel = Team.objects.create(name='Marvel', description='Marvel superheroes')
        dc = Team.objects.create(name='DC', description='DC superheroes')

        # Create Users (team is a CharField, not FK)
        users = [
            User.objects.create(name='Spider-Man', email='spiderman@marvel.com', team='Marvel'),
            User.objects.create(name='Iron Man', email='ironman@marvel.com', team='Marvel'),
            User.objects.create(name='Wonder Woman', email='wonderwoman@dc.com', team='DC'),
            User.objects.create(name='Batman', email='batman@dc.com', team='DC'),
        ]

        # Create Workouts
        workouts = [
            Workout.objects.create(name='Pushups', description='Upper body workout', difficulty='Easy'),
            Workout.objects.create(name='Running', description='Cardio workout', difficulty='Medium'),
        ]

        # Create Activities (type, duration, date)
        Activity.objects.create(user=users[0], type='Pushups', duration=30, date=date.today())
        Activity.objects.create(user=users[1], type='Running', duration=45, date=date.today())
        Activity.objects.create(user=users[2], type='Pushups', duration=25, date=date.today())
        Activity.objects.create(user=users[3], type='Running', duration=50, date=date.today())

        # Create Leaderboard (score, rank)
        Leaderboard.objects.create(user=users[0], score=100, rank=1)
        Leaderboard.objects.create(user=users[2], score=95, rank=2)
        Leaderboard.objects.create(user=users[1], score=90, rank=3)
        Leaderboard.objects.create(user=users[3], score=85, rank=4)

        self.stdout.write(self.style.SUCCESS('octofit_db database populated with test data.'))
