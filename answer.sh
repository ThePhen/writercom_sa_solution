#!/usr/bin/env zsh

curl -o example_blog_titles.json --request POST \
     --url https://enterprise-api.writer.com/cowrite/organization/645641/team/652755/generate \
     --header "Authorization: Bearer ${WRITER_API_TOKEN}" \
     --header 'accept: application/json' \
     --header 'content-type: application/json' \
     --data '
{
     "inputs": [
          {
               "value": [
                    "Writer.com welcomes Stephen Henderson as a Solutions architect!"
               ],
               "name": "Current headline"
          },
          {
               "value": [
                    "Title case"
               ],
               "name": "Casing"
          }
     ],
     "templateId": "cfbbd2fe-043c-4b1c-8b2d-8c0d139cabf9"
}
'

curl -o example_blog_outline.json  --request POST \
     --url https://enterprise-api.writer.com/cowrite/organization/645641/team/652755/generate \
     --header "Authorization: Bearer ${WRITER_API_TOKEN}" \
     --header 'accept: application/json' \
     --header 'content-type: application/json' \
     --data '
{
     "inputs": [
          {
               "value": [
                    "Writer.com welcomes Stephen Henderson as a Solutions architect!"
               ],
               "name": "Topic"
          },
          {
               "value": [
                    "Encourage Writer to hire Stephen Henderson as a Solutions architect"
               ],
               "name": "Purpose"
          }
     ],
     "templateId": "a7e5ba16-58c4-49ff-b1be-96af77a30ba1"
}
'