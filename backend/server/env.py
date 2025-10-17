import os
def get(var, *aliases, default = None):
    for name in (var, *aliases):
        variable = os.getenv(name)
        if variable:
            return variable
        return default
    
def wx_api_key():
    return get("WX_API_KEY")
def wx_url():
    return get("WX_REGION_URL")
def wx_project_id():
    return get("WX_PROJECT_ID")
def wx_model():
    return get("WX_MODEL")