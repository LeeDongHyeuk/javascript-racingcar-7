import { Console } from '@woowacourse/mission-utils';
import App from '../src/App.js';

jest.mock('@woowacourse/mission-utils', () => ({
  Console: {
    readLineAsync: jest.fn(),
  },
}));

describe('App 클래스 테스트', () => {
  test('자동차 이름 문자열 입력 받기', async () => {
    Console.readLineAsync.mockResolvedValueOnce('pobi,woni,jun');

    const app = new App();
    await app.run();

    expect(Console.readLineAsync).toHaveBeenCalledWith(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
    );
  });

  test('시도할 횟수 입력 받기', async () => {
    Console.readLineAsync.mockResolvedValueOnce('5');

    const app = new App();
    await app.run();

    expect(Console.readLineAsync).toHaveBeenCalledWith(
      '시도할 횟수는 몇 회인가요?\n'
    );
  });
});
