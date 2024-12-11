#!/usr/bin/env python3
"""Update all documents with a specific name"""


def update_topics(mongo_collection, name, topics):
    """Update all documents with a specific name"""
    mongo_collection.update_many({"name": name}, {"$set": {"topics": topics}})
