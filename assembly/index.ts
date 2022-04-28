// import Context from near-sdk-as
// code goes here

import { Context } from 'near-sdk-as';

/**
 * Edit helloWorld() function code such that it returns the word "hello world!"
 */
export function helloWorld(): string {
  // code goes here
  return `hello world!`
}

/**
 * Edit greeting() function such that it returns a string containing both name parameter and the wallet address calling this function
 * Hint: wallet address is found as follows: Context.sender
 * @param name
 * @returns
 */
export function greeting(name: string): string {
  // code goes here
  const outputString = name + Context.sender ;
  return outputString;
}
