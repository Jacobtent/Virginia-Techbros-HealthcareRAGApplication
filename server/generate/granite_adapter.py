"""
watsonx.ai Granite generator (IBM-only).
TODO (with creds): call Granite with numbered snippets, low temp, return answer text with [n].
Env: IBM_API_KEY, IBM_REGION, GRANITE_MODEL_ID
"""
from typing import List, Dict, Any

def call_granite(question: str, snippets: List[Dict[str, Any]]) -> str | None:
    return None  # returns None until IBM creds are set; orchestration falls back deterministically
