#!/usr/bin/env python3
"""List all documents in a collection."""


def list_all(collection):
    """List all documents in a collection."""
    return collection.find()
