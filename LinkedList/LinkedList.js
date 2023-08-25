// 連結串列的應用範例: 表示音樂播放列表、實現撤銷/重做功能，以及在某些程式語言中管理記憶體

class Song {
  constructor(title, artist) {
    this.title = title;
    this.artist = artist;
    this.next = null;
  }
}

class PlayList {
  constructor() {
    this.firstSong = null;
    this.lastSong = null;
  }

  addSong(title, artist) {
    const newSong = new Song(title, artist);
    if (!this.firstSong) {
      this.firstSong = newSong;
      this.lastSong = newSong;
    } else {
      this.lastSong.next = newSong;
      this.lastSong = newSong;
    }
  }

  playing() {
    if (this.firstSong) {
      console.log(
        `現在正在為您撥放: ${this.firstSong.artist} 的 ${this.firstSong.title}`
      );
    } else {
      console.log("播放清單中沒有歌曲");
    }
  }

  nextSong() {
    if (this.firstSong) {
      this.firstSong = this.firstSong.next;
      if (this.firstSong) {
        console.log(
          `現在正在為您撥放: ${this.firstSong.artist} 的 ${this.firstSong.title}`
        );
      } else {
        console.log("撥放清單已到底部囉");
      }
    } else {
      console.log("播放清單中沒有歌曲");
    }
  }
}

module.exports = { Song, PlayList };
