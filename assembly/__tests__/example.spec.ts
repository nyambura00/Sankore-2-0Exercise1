import { helloWorld, greeting } from '..';
import { VMContext } from 'near-sdk-as';

const wallet_address = 'test.testnet';

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
    expect(word_arr.includes(name)).toBe(
      true,
      `expects the returned string to contain ${name}`
    );
    expect(word_arr.includes(wallet_address)).toBe(
      true,
      `expects the returned string to contain ${wallet_address}`
    );
  });
});
