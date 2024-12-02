#!/usr/bin/env python3
"""Sum a list of mixed integers and floats."""

from typing import List, Union


def sum_mixed_list(mxd_list: List[Union[int, float]]) -> float:
    """Sum a list of mixed integers and floats."""
    return sum(mxd_list)
