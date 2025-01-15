## Inspiration
I have faced this issue a lot that I got some wacky idea but got lazy and slept on it only to forget it forever💀. Only to ponder over and over again to no avail. One such thing when I working on my course project of "Computer Graphics" (iykyk) and had spent an entire week optimising my code but it still took 3min to run. Then, after my daily exercise, I got an idea for implementing the optimised version but then, my cousins came. I did scribble it on a paper but I forgot the jist of it. I did found the piece again after 2 days of hitting my head on the wall. My friends also agree to have faced this issue.<br>
One thing, I did remember that day though, that if there was an application that could convert <b>THOUGHT TO CODE </b> with a test case then, my problem wouldn't have occured.
## What it does
Like my problem explained above. You give it 3 prompts: Task, Input and Expected Output and the application processes it to build you a verified piece of code that fulfills your needs. Verified? Yup the code that is given is run and checked basis the original format to make it a perfect match for the users needs.
## How we built it
I have been intesreted in AI for a while and have been a fan of LLMs. I referred to 2 research papers before solidifying my idea and implementing it.<br>
These two papers were [Agent CODER](https://arxiv.org/html/2312.13010v2) and [Tree of Thought](https://arxiv.org/abs/2305.10601). I had gone through others like DynaMOSA for dynamic test case generation but left it owing to the time constraint. So, to understand my implementation its necessary to view these two.<br>
<B>AGENT CODER</B>
![image](https://github.com/user-attachments/assets/cc009d38-a2db-4453-aaac-1f4341045560) (credit: Agent CODER team)<br>
Applies the idea of chain of thought prmopting. It has 3 agents (LLMs/automations) one to write code, one for testcases and one to verify the authenicity combination. While, the idea seems correct there is a flaw that is if either one of the units were to perform incorrectly then, results won't be useful.<br>
If both were to wrong in the same manner then, too incorrect code is generated.
![image](https://github.com/user-attachments/assets/f6e13e69-9cb9-4c0d-996a-d3ca87d9e3f3)<br>
<B> Tree of Thought</B>
In chain of thought the focus is to break one problem into several simpler ones. Tree of Thought takes it up a notch by exploring different reasoning branches(since LLMs are inconsisent it helps to try different ideas). For each reasoning branch one core idea wrong/right is applied throughout like in a Depth First Search manner(explore one idea thoroughly before trying another).<br>
![image](https://github.com/user-attachments/assets/f2c0271e-52a8-425d-aac4-9728d1de2555) (credit: Tree of Thought team)<br>
I thought of using tree of thought by having one reasoner model which generates one idea/procedure which is followed by the entire agent coder setup (limited to my understanding) and the test cases generated are also checked by having a test case verifier since, LLMs make mistake during bulk generation. The entire setup is combined by using pytest library which streamlines the code verification process. This model is powered by Qwen-2.5-32B-Instruct Agents hosted on Nebius. The final model is hosted on hugging face and is also usable via a react app.
In conclusion 5 Agents were made for this task:
<ol>
<li>Reasoner: Simplifies the tasks</li>
<li>Code Generator: Codes the simplified tasks</li>
<li>Test Case Generator: Creates the Test case</li>
<li>Test Case Verifier: Validates a Test Case</li>
<li>Code Combiner: Combines Code + Test Case for verification</li>
</ol>

![image](https://github.com/user-attachments/assets/fbd7610e-0781-4741-aa0b-cd56f56713b0)
<h3>Model Architecture</h3>

## Challenges we ran into
<h3> Design Pattern</h3>
To constantly take data from one agent and keep parsing to the other agents, or using the code. Requires a need for a consistent design pattern in place.
<h3> Additional Inputs Handling </h3>
Some parameters are not understood by the lay man but might be important for seasoned experts, it took some time to figure out a way to add these to gradio and rwact.
<h3> New Line Handling <h3>
As we are writing test cases for validation, it fails if a new line character is being used so had to replaced the newline character with a special symbol which is not on the keyboard.<br>
<h3> Designning gradio and react pages</h3>
Finding the perfect gaps and spaces for the page design.


## Accomplishments that we're proud of
<h3> A multi agent coding application which doesn't make noob errors.</h3>
<h3> A live project which is hosted on hugging face and can be used by anyone with an internet connection + available on a react app for those who don't want to go on the web again (what a hassle right?) </h3>
<h3> A project which can help people learn </h3>
It could introduce coding through Natural Language to those who don't know coding and can help people who are stuck on a task by providing efficient solutions.<br>
<h3> A non-chatgpt based solutions with a score of 85% on first 30 problems of MBPP</h3>

## What we learned
How to make a multi agent cycle <br>
Handling Pytest file with just python code. Didn't think it wasn't possible <br>
Polished Coding with react and css <br>


## What's next for Thought CODER
Converting it into a sign-in based webapp which can store history<br>
More thorough testing and evaluation metric <br>
