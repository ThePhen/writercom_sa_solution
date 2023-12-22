import os
import json
import requests

from bs4 import BeautifulSoup

WRITER_API_TOKEN = os.getenv("WRITER_API_TOKEN")
PROMPT_HEADLINE = "Writer.com welcomes Stephen Henderson as a Solutions architect!"
WRITER_TEMPLATE_GENERATE_API_URL = (
    "https://enterprise-api.writer.com/cowrite/organization/645641/team/652755/generate"
)
blog_titles_body = {
    "inputs": [
        {"value": [PROMPT_HEADLINE], "name": "Current headline"},
        {"value": ["Title case"], "name": "Casing"},
    ],
    "templateId": "cfbbd2fe-043c-4b1c-8b2d-8c0d139cabf9",
}
common_headers = {
    "Authorization": f"Bearer {WRITER_API_TOKEN}",
    "Accept": "application/json",
    "Content-Type": "application/json",
}

print(f"Original input headline:\n\n{PROMPT_HEADLINE}\n")

blog_title_api_response = requests.post(
    url=WRITER_TEMPLATE_GENERATE_API_URL,
    headers=common_headers,
    json=blog_titles_body,
    timeout=100,
)
json = blog_title_api_response.json()
soup = BeautifulSoup(json["body"], "html.parser")
lis = soup.find_all("li")
print("Generated headlines:\n")
_ = [print(i.text) for i in lis]
first_title = lis[0].text

print(f"\nSelecting the first headline:\n\n{first_title}\n")

blog_outline_body = {
    "inputs": [
        {"value": [first_title], "name": "Topic"},
        {
            "value": [
                "Encourage Writer to hire Stephen Henderson as a Solutions architect"
            ],
            "name": "Purpose",
        },
    ],
    "templateId": "a7e5ba16-58c4-49ff-b1be-96af77a30ba1",
}
blog_outline_api_response = requests.post(
    url=WRITER_TEMPLATE_GENERATE_API_URL,
    headers=common_headers,
    json=blog_outline_body,
    timeout=100,
)
json = blog_outline_api_response.json()

print(f'Generated blog outline:{json["body"]}')
