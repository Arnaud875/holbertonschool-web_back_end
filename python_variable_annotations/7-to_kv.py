#!/usr/bin/env python3
"""Convert an integer to a string."""

from typing import Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """Convert an integer to a string."""
    return (k, v * v)
