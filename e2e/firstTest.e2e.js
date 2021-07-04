describe('Smoke', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  // beforeEach(async () => {
  //   await device.reloadReactNative();
  // });

  it('Should have Initial screen', async () => {
    await expect(element(by.id('initial_screen'))).toBeVisible();
  });

  it('Should show Home screen after tap', async () => {
    await element(by.id('initial_text')).tap();
    await expect(element(by.id('home_screen'))).toBeVisible();
  });

  it('Should show Dungeon screen after tap', async () => {
    await element(by.id('home_text')).tap();
    await expect(element(by.id('dungeon_screen'))).toBeVisible();
  });

  it('Should show Battle screen after tap', async () => {
    await element(by.id('dungeon_text')).tap();
    await expect(element(by.id('battle_screen'))).toBeVisible();
  });
});
