/**
 * @jest-environment jsdom
 */

import { pushToHistory } from '../scripts/router.js';

describe('main', () => {
    test('push to main', () => {
         let pushMain = pushToHistory('', 0)
         expect(pushMain.length).toBe(2);
         expect(pushMain.state.page).toBe(undefined);
      });
  });

describe('entry', () => {
    test('push to entry', () => {
         let pushEntry = pushToHistory('entry', 3)
         expect(pushEntry.length).toBe(3);
         expect(pushEntry.state.page).toBe("entry3");
      });
});

describe('setting', () => {
    test('push to setting', () => {
         let pushSetting = pushToHistory('settings', 0)
         expect(pushSetting.length).toBe(4);
         expect(pushSetting.state.page).toBe("settings");
      });
});

