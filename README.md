```
！「https://raw.githubusercontent.com/yy0931/nadesiko3-p5/v0.0.6/index.nako3」を取り込む

p5セットアップ時には
    400、400のキャンバス作成
ここまで

p5描画時には
    0に背景色設定
    もし(マウス押下中)ならば
        125に塗りつぶし色設定
    違えば
        255に塗りつぶし色設定
    ここまで
    マウス横と、マウス縦と、50と、50で楕円描画
ここまで
```

---

非同期処理が許可されていない環境の場合
```
code=『
p5セットアップ時には
    400、400のキャンバス作成
ここまで

p5描画時には
    0に背景色設定
    もし(マウス押下中)ならば
        125に塗りつぶし色設定
    違えば
        255に塗りつぶし色設定
    ここまで
    マウス横と、マウス縦と、50と、50で楕円描画
ここまで
』

// ライブラリを取り込む（バージョン 3.1.18用）
『(function(code) { fetch('https://raw.githubusercontent.com/yy0931/nadesiko3-p5/v0.0.6/index.nako3').then((res) => res.text()).then((lib) => { navigator.nako3.runReset(lib + code, 'main.nako3', lib) }) })』をcodeでJS関数実行
```
