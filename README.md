# ウェイト版タロット占い

ウェイト版タロットの占いと、タロットに関する情報・コラムを提供する無料サイトです。

🌐 **サイトURL**: https://www.nine-tailed.site/

---

## 概要

ウェイト版タロットの大アルカナ22枚を使った占いと、お告げを提供します。また、タロットの歴史・カードに描かれたシンボルの意味・正位置と逆位置の読み方など、タロットに関する情報をコラム形式で発信しています。

---

## ページ構成

| ファイル | 説明 |
|---|---|
| `index.html` | メインページ。占い種別の選択・占い実行・結果表示をすべて1ページで行う |
| `about.html` | サイト紹介・使い方・ウェイト版タロットの説明ページ |
| `privacy_policy.html` | プライバシーポリシー・免責事項 |
| `cards/index.html` | 大アルカナ22枚のカード一覧ページ |
| `cards/00-fool.html` ～ `cards/21-world.html` | 各カードの正位置・逆位置の意味解説ページ |
| `column/index.html` | コラム一覧ページ |
| `column/tarot-history.html` | コラム：タロットカードの歴史 |
| `column/tarot-symbols.html` | コラム：タロットのシンボル |
| `column/tarot-card-orientation.html` | コラム：カードの向き（正位置・逆位置） |
| `static/main.css` | メインページ用スタイルシート |
| `static/button.css` | ボタン・SNSシェアボタン用スタイルシート |
| `static/article.css` | 記事・コラムページ共通スタイルシート |
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

バックエンドは **Microsoft Azure App Service** 上で動作します。

### Google AdSense

広告収益化のために Google AdSense を導入しています。

- パブリッシャーID: `ca-pub-2952466024508387`
- 配置箇所: メインページ（選択画面下）、占い結果表示時（動的挿入）、about.html、各カード解説ページ

### Google Analytics

アクセス解析に Google Analytics 4 を使用しています。

- 測定ID: `G-8RF6H7RH0Z`

### Google Fonts

フォントの読み込みに Google Fonts を使用しています。

- `New Tegomin`（メインページの和風フォント）
- `Kaisei Decol`

---

## 機能

- **お告げ**: 今日のあなたへのメッセージを生成
- **タロット占い（過去・現在・未来）**: 大アルカナ22枚からランダムに1枚引き、選んだ時間軸で解釈
- **SNSシェア**: 占い結果をX（Twitter）・LINEでシェア
- **カード正逆**: 正位置・逆位置をランダムに判定
- **カード解説**: 大アルカナ22枚それぞれのキーワード・象徴・正位置・逆位置の意味を解説
- **コラム**: タロットの歴史・カードのシンボル・正逆位置の読み方などをブログ形式で掲載。`column/` フォルダにHTMLを追加し、`column/index.html` に記事リストを追記することで更新する

---

## ライセンス

詳細は [LICENSE](LICENSE) を参照してください。

一部画像は [ペンガ](https://pensoza.com/) 様公開の画像を利用しています。

