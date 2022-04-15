# Exercise-1

This exercise is focused on writing a simple smart contract in assemblyscript.

# Environment setup

Before proceeding with standing up this project, ensure you have the following installed in your computer:

1.  [`Node`](https://nodejs.org/en/download/)
2.  [`Yarn`](https://classic.yarnpkg.com/lang/en/docs/install/#debian-stable)

          npm install -g yarn

3.  [`assemblyscript`](https://www.assemblyscript.org/quick-start.html)

          npm install --global @assemblyscript/loader
          npm install --global assemblyscript

4.  [`as-pect`](https://dev.to/jtenner/testing-with-assemblyscript-and-the-usefulness-of-value-3egn)

          npm install --global @as-pect/cli

5.  [`near-cli`](https://docs.near.org/docs/tools/near-cli)

          npm install -g near-cli

# Standing Exercise 1

Clone this repository in your computer, `cd` into the project's root directory and install the required packages by running the command below:

     yarn install

Navigate to `./assembly/index.ts` file. It's content is as shown below:

     // import Context from near-sdk-as
     // code goes here

     /**
      * Edit helloWorld() function code such that it returns the word "hello world!"
      */
     export function helloWorld(): string {
       // code goes here
     }

     /**
      * Edit greeting() function such that it returns a string containing both name parameter and the wallet address calling this function
      * Hint: wallet address is found as follows: Context.sender
      * @param name
      * @returns
      */
     export function greeting(name: string): string {
       // code goes here
     }

# Activities

1.  Edit `helloWorld()` function such that it returns `"hello world!"`.
2.  Edit `greeting(name: string)` function such that it returns a string containing both the `name` parameter and the `wallet address` calling this function
3.  Ensure all tests pass. Run the following in your terminal from the project's root directory:

            yarn test

4.  Stag the changes you have made, commit and push to your `public` GitHub repository for evaluation.
5.  Copy the link of the repository and submit it [`here`](https://forms.gle/5gS3VvrtsoqCRaov9)

📌[`EXERCISE SUBMISSION LINK`](https://forms.gle/5gS3VvrtsoqCRaov9)📌

# Note

_Do not change the contents of the unit tests_

# Resources

1. Something to [`Read`](https://drive.google.com/drive/folders/178Ncntpd5jO_YYHUPrOqZt5eOoxYo6oQ?usp=sharing).

2. Something to [`Watch`](https://youtube.com/playlist?list=PLF4mfyMzLVGvL-DetJKwQhkbzSp-YIqCs).

3. [`Bonus`](https://hackmd.io/@nearly-learning/ncd) resources
