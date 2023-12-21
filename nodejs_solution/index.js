const { parse } = require('node-html-parser');
const { env } = require('process');

const WRITER_API_TOKEN = env['WRITER_API_TOKEN'];
const promptHeadline = 'Writer.com welcomes Stephen Henderson as a Solutions architect!'

const writerTemplateGenerateApiUrl = 'https://enterprise-api.writer.com/cowrite/organization/645641/team/652755/generate'
const blogTitlesBody = {
     "inputs": [
          {
               "value": [promptHeadline],
               "name": "Current headline"
          },
          {
               "value": ["Title case"],
               "name": "Casing"
          }
     ],
     "templateId": 'cfbbd2fe-043c-4b1c-8b2d-8c0d139cabf9'
};
const commonHeaders = {
     method: "POST",
     headers: {
          'Authorization': `Bearer ${WRITER_API_TOKEN}`,
          'Accept': 'application/json',
          'Content-Type': 'application/json',
     }
}

console.log(`Original input headline:\n\n${promptHeadline}\n`)

async function getOutline() {
     try {
          var blogTitleApiResponse = await fetch(writerTemplateGenerateApiUrl, {
               ...commonHeaders,
               body: JSON.stringify(blogTitlesBody)
          });
          var json = await blogTitleApiResponse.json();
          var html = parse(json.body);
          var ul = html.querySelector('ul');
          var firstTitle = ul.firstChild.text;

          console.log(`A generated headline:\n\n${firstTitle}\n`);

          var outlineApiInput = {
               "inputs": [
                    {
                         "value": [firstTitle],
                         "name": "Topic"
                    },
                    {
                         "value": ["Encourage Writer to hire Stephen Henderson as a Solutions architect"],
                         "name": "Purpose"
                    }
               ],
               "templateId": "a7e5ba16-58c4-49ff-b1be-96af77a30ba1"
          };
          var outlineResponse = await fetch(writerTemplateGenerateApiUrl, {
               ...commonHeaders,
               body: JSON.stringify(outlineApiInput)
          });
          var outlineResponseJson = await outlineResponse.json();

          console.log(`Generated blog outline:${outlineResponseJson.body}`);
     } catch (err) {
          console.log("Unable to fetch -", err);
     }
}

getOutline();