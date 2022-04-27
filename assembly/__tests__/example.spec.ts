import { helloWorld, greeting } from '..';
import { VMContext } from 'near-sdk-as';

const wallet_address = 'test.testnet';

const search = (wordArray: string[], element: string): bool => {
  let flag = false;

  for (let i = 0; i < wordArray.length; i++) {
    const item = wordArray[i];
    if (item.startsWith(element) || item.endsWith(element)) {
      flag = true;
      break;
    }
  }

  return flag;
};

describe('Simple Smart Contract', () => {
  it('Should return hello world!', () => {
    expect(helloWorld()).toStrictEqual(
      'hello world!',
      'expects "hello world!"'
    );
  });

  it('Should return greeting message', () => {
    VMContext.setSigner_account_id(wallet_address);
    const name = 'John';
    const word_arr: String[] = greeting(name).split(' ');
    expect<bool>(search(word_arr, name)).toBe(
      true,
      `expecfts the returned string to contain ${name}`
    );
    expect<bool>(search(word_arr, wallet_address)).toBe(
      true,
      `expects the returned string to contain ${wallet_address}`
    );
  });
});
