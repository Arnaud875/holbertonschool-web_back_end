#!/usr/bin/env python3
"""Asynchronous generator example."""

import asyncio
import random
from typing import Generator


async def async_generator() -> Generator[float, None, None]:
    """Generate 10 random numbers asynchronously."""
    for _ in range(10):
        await asyncio.sleep(1)
        yield random.randint(1, 10)
