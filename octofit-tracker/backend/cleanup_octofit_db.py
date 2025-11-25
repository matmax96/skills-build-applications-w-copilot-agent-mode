# Script to clean up all collections in the octofit_db database
# Usage: source venv and run with python

from pymongo import MongoClient

client = MongoClient('mongodb://localhost:27017')
db = client['octofit_db']

collections = db.list_collection_names()
for coll in collections:
    db[coll].delete_many({})
    print(f"Cleared collection: {coll}")

print("All collections in octofit_db have been cleared.")
