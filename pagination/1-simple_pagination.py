#!/usr/bin/env python3
"""Simple pagination"""

import csv
import math
from typing import List


class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        """Return a tuple of size two
        containing a start index and an end index"""
        assert type(page) is int \
            and type(page_size) is int
        assert page > 0 and page_size > 0

        start = (page - 1) * page_size
        end = page * page_size

        return self.dataset()[start:end]
