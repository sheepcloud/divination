# ウェイト版タロット占い

AIを活用した無料のタロット占いサイトです。

🌐 **サイトURL**: https://www.nine-tailed.site/

---

## 概要

ChatGPT（OpenAI）のモデルをバックエンドで利用し、ウェイト版タロットの大アルカナ22枚を使った占いと、AIによるお告げを提供します。

---

## ページ構成

| ファイル | 説明 |
|---|---|
| `index.html` | メインページ。占い種別の選択・占い実行・結果表示をすべて1ページで行う |
| `about.html` | サイト紹介・使い方・ウェイト版タロットの説明ページ |
| `tarot-guide.html` | 大アルカナ22枚の正位置・逆位置の意味一覧ページ |
| `privacy_policy.html` | プライバシーポリシー・免責事項 |
| `static/main.css` | メインページ用スタイルシート |
| `static/button.css` | ボタン・SNSシェアボタン用スタイルシート |
| `static/article.css` | 記事ページ（about / tarot-guide）用スタイルシート |
| `static/images/RWS_Tarot/` | ウェイト版タロット大アルカナ22枚の画像 |
| `static/images/reading/` | ローディングアニメーション用画像 |
| `static/images/decoration/` | 装飾用画像（フレーム・背景など） |

---

## 外部API・サービスとの連携

### バックエンド API（占い結果生成）

占い結果の生成は外部のバックエンドサービスに委託しています。

| エンドポイント | 用途 | メソッド |
|---|---|---|
| `https://fortunereading.azurewebsites.net/result` | お告げ文の生成 | GET |
| `https://fortunereading.azurewebsites.net/tarot_result` | タロット占い結果の生成 | GET |

**タロット占いのクエリパラメータ:**

| パラメータ | 型 | 説明 |
|---|---|---|
| `tense` | int | 時間軸（0: 現在, 1: 過去, 2: 未来） |
| `card_no` | int | カード番号（0〜21、フロントエンドでランダム選択） |
| `reverse` | int | 正逆位置（0: 正位置, 1: 逆位置、フロントエンドでランダム選択） |

バックエンドは **Microsoft Azure App Service** 上で動作し、内部でChatGPTのモデルを呼び出して占い文を生成します。

### Google AdSense

広告収益化のために Google AdSense を導入しています。

- パブリッシャーID: `ca-pub-2952466024508387`
- 配置箇所: メインページ（選択画面下）、占い結果表示時（動的挿入）、about.html、tarot-guide.html

### Google Analytics

アクセス解析に Google Analytics 4 を使用しています。

- 測定ID: `G-8RF6H7RH0Z`

### Google Fonts

フォントの読み込みに Google Fonts を使用しています。

- `New Tegomin`（メインページの和風フォント）
- `Kaisei Decol`

---

## 機能

- **お告げ**: AIが今日のあなたへのメッセージを生成
- **タロット占い（過去・現在・未来）**: 大アルカナ22枚からランダムに1枚引き、AIが選んだ時間軸で解釈
- **SNSシェア**: 占い結果をX（Twitter）・LINEでシェア
- **カード正逆**: 正位置・逆位置をランダムに判定

---

## ライセンス

詳細は [LICENSE](LICENSE) を参照してください。

一部画像は [ペンガ](https://pensoza.com/) 様公開の画像を利用しています。

