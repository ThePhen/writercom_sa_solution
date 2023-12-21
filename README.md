# Writer.com Solutions Architect Challenge Solution

**The code for the solutions can be found at: https://github.com/ThePhen/writercom_sa_solution/tree/main**

There are two version of the solution. 
1. A simple cURL-based example in `answer.sh`, and...
2. A more compilcated solution in `nodejs_solution/index.js` which demonstrates using the output from one Writer API as input into a subsequent API call. Here's the gist of getting it running:
```sh
cd nodejs_solution
npm start
```
And here's an example of typical output from the Node.JS solution:
> 
> Original input headline:
> 
> Writer.com welcomes Stephen Henderson as a Solutions architect!
> 
> A generated headline:
> 
> Writer.com Bolsters Team with Stephen Henderson as Solutions Architect
> 
> Generated blog outline:
> 1. The benefits of hiring Stephen Henderson as a Solutions Architect
> • His experience in the industry
> • His ability to lead and manage a team
> • His dedication to his work
> 2. Why Writer.com needs a Solutions Architect
> • The company's current state
> • The company's goals
> • The skills that a Solutions Architect can bring to the table
> 3. How Stephen Henderson can help Writer.com
> • His experience with the company
> • His understanding of the company's needs
> • His ability to find creative solutions
> 