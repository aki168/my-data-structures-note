const { PlayList, Song } = require("./LinkedList");

let playList;

describe("Music Play List", () => {
  beforeEach(() => {
    playList = new PlayList(); // 在每個測試前初始化 playList
  });

  test("測試音樂播放清單: 創建", () => {
    expect(playList.firstSong).toBe(null);
    expect(playList.lastSong).toBe(null);
  });

  test("測試音樂播放清單: 添加歌曲", () => {
    playList.addSong("新宝島", "sakanaction");
    playList.addSong("音浪", "黃立行");
    playList.addSong("夜の恋は", "Indigo la end");
    expect(playList.firstSong.artist).toBe("sakanaction");
    expect(playList.firstSong.next.title).toBe("音浪");
  });

  test("測試音樂播放清單: 播放", () => {
    playList.addSong("新宝島", "sakanaction");

    // 播放歌曲
    const consoleSpy = jest.spyOn(console, "log");
    playList.playing();
    expect(consoleSpy).toHaveBeenCalledWith(
      `現在正在為您撥放: sakanaction 的 新宝島`
    );
  });

  test("測試音樂播放清單: 切換下一首", () => {
    playList.addSong("新宝島", "sakanaction");
    playList.addSong("音浪", "黃立行");
    playList.addSong("夜の恋は", "Indigo la end");

    // 切換下一首
    playList.nextSong();
    playList.nextSong();
    playList.nextSong();
    playList.nextSong();
    const consoleSpy = jest.spyOn(console, "log");
    expect(consoleSpy).toHaveBeenCalledWith(`播放清單中沒有歌曲`);
    consoleSpy.mockRestore();
  });

  afterEach(() => {
    playList = null;
  });
});
