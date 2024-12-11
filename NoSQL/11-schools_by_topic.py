#!/usr/bin/env python3
"""Get list of schools having a specific topic"""


def schools_by_topic(mongo_collection, topic):
    """Get list of schools having a specific topic"""
    return mongo_collection.find({'topics': topic})
