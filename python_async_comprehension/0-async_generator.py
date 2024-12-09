#!/usr/bin/env python3
"""Asynchronous generator example."""

import asyncio
import random
from typing import AsyncGenerator


async def async_generator() -> AsyncGenerator[int]:
    """Generate 10 random numbers asynchronously."""
    for _ in range(10):
        await asyncio.sleep(1)
        yield random.randint(1, 10)
