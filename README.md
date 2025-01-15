## Inspiration
I have faced this issue a lot that I got some wacky idea but got lazy and slept on it only to forget it forever💀. Only to ponder over and over again to no avail. One such thing when I working on my course project of "Computer Graphics" (iykyk) and had spent an entire week optimising my code but it still took 3min to run. Then, after my daily exercise, I got an idea for implementing the optimised version but then, my cousins came. I did scribble it on a paper but I forgot the jist of it. I did found the piece again after 2 days of hitting my head on the wall. My friends also agree to have faced this issue.<br>
One thing, I did remember that day though, that if there was an application that could convert <b>THOUGHT TO CODE </b> with a test case then, my problem wouldn't have occured.
## What it does
Like my problem explained above. You give it 3 prompts: Task, Input and Expected Output and the application processes it to build you a verified piece of code that fulfills your needs. Verified? Yup the code that is given is run and checked basis the original format to make it a perfect match for the users needs.
## How we built it
I have been intesreted in AI for a while and have been a fan of LLMs. I referred to 2 research papers before solidifying my idea and implementing it.<br>
These two papers were [Agent CODER](https://arxiv.org/html/2312.13010v2) and [Tree of Thought](https://arxiv.org/abs/2305.10601). I had gone through others like DynaMOSA for dynamic test case generation but left it owing to the time constraint. So, to understand my implementation its necessary to view these two.<br>
<B>AGENT CODER</B>
![image](https://github.com/user-attachments/assets/cc009d38-a2db-4453-aaac-1f4341045560) (credit: Agent CODER team)
Applies the idea of chain of thought prmopting. It has 3 agents (LLMs/automations) one to write code, one for testcases and one to verify the authenicity combination. While, the idea seems correct there is a flaw that is if either one of the units were to perform incorrectly then, results won't be useful.<br>
If both were to wrong in the same manner then, too incorrect code is generated.
![image](https://github.com/user-attachments/assets/f6e13e69-9cb9-4c0d-996a-d3ca87d9e3f3)
<B> Tree of Thought</B>
In chain of thought the focus is to break one problem into several simpler ones. Tree of Thought takes it up a notch by exploring different reasoning branches(since LLMs are inconsisent it helps to try different ideas). For each reasoning branch one core idea wrong/right is applied throughout like in a Depth First Search manner(explore one idea thoroughly before trying another).<br>
![image](https://github.com/user-attachments/assets/f2c0271e-52a8-425d-aac4-9728d1de2555) (credit: Tree of Thought team)
I thought of using tree of thought by having one reasoner model which generates one idea/procedure which is followed by the entire agent coder setup (limited to my understanding) and the test cases generated are also checked by having a test case verifier since, LLMs make mistake during bulk generation. The entire setup is combined by using pytest library which streamlines the code verification process. This model is powered by Qwen-2.5-32B-Instruct Agents hosted on Nebius. The final model is hosted on hugging face and is also usable via a react app.

## Challenges we ran into



## Accomplishments that we're proud of

## What we learned

## What's next for Thought CODER
