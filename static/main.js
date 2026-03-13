// APIのベースURL
const API_BASE_URL = 'https://api.nine-tailed.site';

// ローディング表示を非表示にする
document.getElementById('loading_div').style.display = 'none';

// 占っています表示
document.getElementById('div_bottom').style.display = 'none';

// 占い結果表示
document.getElementById('div_center').style.display = 'none';

// 読み込み中画像を表示させる
function begin() {
    document.getElementById('button_div').style.display = 'none';
    document.getElementById('loading_div').style.display = 'block';
    document.getElementById('div_bottom').style.display = 'block';

    let url = API_BASE_URL + "/result";
    fetch(url, {"content" : "HOGE"})
        .then(function(response) {
            if (!response.ok) {
                showContentCore("占い師が寝ぼけているようです...");
            }
            return response.json();
        })
        .then(function(promise) {
            showContent(promise.content.replaceAll('　', '\n'));
        })
        .catch(function(err) {
            showContentCore("占い師が応答しません...");
        });
}

function tarot(tense) {
    document.getElementById('button_div').style.display = 'none';
    document.getElementById('loading_div').style.display = 'block';
    document.getElementById('div_bottom').style.display = 'block';

    card_no = Math.floor(Math.random() * 21);
    reverse = Math.floor(Math.random() * 2);

    debug = false;
    if (debug == false) {
        let url = API_BASE_URL + "/tarot_result?tense=" + tense + "&card_no=" + card_no + "&reverse=" + reverse;
        fetch(url, {"content" : "HOGE"})
            .then(function(response) {
                if (!response.ok) {
                    showContentCore("占い師が寝ぼけているようです...");
                }
                return response.json();
            })
            .then(function(promise) {
                showImage(promise.content, card_no, reverse);
            })
            .catch(function(err) {
                showContentCore("占い師が応答しません...");
            });
    }
    else {
        setTimeout(() => {
            showImage("テスト\n\
テストテストテストテストテストテストテストテスト\n\
テストテストテストテストテストテストテストテストテス\n\
テスト\n\
テストテストテストテストテストテストテストテスト\n\
テストテストテストテストテストテストテストテストテス\n\
テスト\n\
テストテストテストテストテストテストテストテスト\n\
テストテストテストテストテストテストテストテストテス\n\
トテストテストテストテストテスト", card_no, reverse);
        }, 1000);
    }
}

// 占い結果を表示させる
function showContentCore(content) {
    document.getElementById('loading_div').style.display = 'none';
    document.getElementById('div_bottom').style.display = 'none';

    div_center = document.getElementById('div_center');

    let new_element = document.createElement('div');
    new_element.style.padding = "1em";
    new_element.className = 'div_content';
    new_element.textContent = content;
    div_center.appendChild(new_element);

    // SNSシェアボタン
    const pageUrl = encodeURIComponent('https://www.nine-tailed.site/');
    const shareText = encodeURIComponent('ウェイト版タロット占いで占ってもらいました！あなたも試してみて\u2728');
    let shareDiv = document.createElement('div');
    shareDiv.className = 'share-buttons';
    shareDiv.innerHTML =
        '<div class="share-label">\u7d50\u679c\u3092\u30b7\u30a7\u30a2\u3059\u308b</div>' +
        '<a href="https://twitter.com/intent/tweet?text=' + shareText + '&url=' + pageUrl + '" target="_blank" rel="noopener noreferrer" class="btn btn--twitter btn--shadow">\ud835\udd4f\u3067\u30b7\u30a7\u30a2</a> ' +
        '<a href="https://social-plugins.line.me/lineit/share?url=' + pageUrl + '" target="_blank" rel="noopener noreferrer" class="btn btn--line btn--shadow">LINE\u3067\u30b7\u30a7\u30a2</a>';
    div_center.appendChild(shareDiv);

    // 結果ページ広告ユニット (AdSense管理画面で取得した data-ad-slot の値に変更してください)
    let adIns = document.createElement('ins');
    adIns.className = 'adsbygoogle';
    adIns.style.cssText = 'display:block';
    adIns.setAttribute('data-ad-client', 'ca-pub-2952466024508387');
    adIns.setAttribute('data-ad-slot', '7629112227');
    adIns.setAttribute('data-ad-format', 'auto');
    adIns.setAttribute('data-full-width-responsive', 'true');
    let adWrapper = document.createElement('div');
    adWrapper.className = 'ad-unit';
    adWrapper.appendChild(adIns);
    div_center.appendChild(adWrapper);

    div_center.style.display = 'block';
    div_center.classList.add("active");

    div_back = document.getElementById('div_back');
    div_back.style.display = 'block';

    (window.adsbygoogle = window.adsbygoogle || []).push({});
}

function showContent(content) {

    div_center = document.getElementById('div_center');

    let new_element = document.createElement('div');
    new_element.className = 'div_message_2';
    new_element.style = 'transform: translate(0px, 30px);';
    div_center.appendChild(new_element);

    showContentCore(content);
}

function showImage(content, card_no, reverse) {

    image_ulr = [
        "00_Fool.png",
        "01_Magician.png",
        "02_High_Priestess.png",
        "03_Empress.png",
        "04_Emperor.png",
        "05_Hierophant.png",
        "06_The_Lovers.png",
        "07_Chariot.png",
        "08_Strength.png",
        "09_Hermit.png",
        "10_Wheel_of_Fortune.png",
        "11_Justice.png",
        "12_Hanged_Man.png",
        "13_Death.png",
        "14_Temperance.png",
        "15_Devil.png",
        "16_Tower.png",
        "17_Star.png",
        "18_Moon.png",
        "19_Sun.png",
        "20_Judgement.png",
        "21_World.png",
    ];

    card_name = [
        "0 愚者",
        "I 魔術師",
        "II 女教皇",
        "III 女帝",
        "IV 皇帝",
        "V 教皇",
        "VI 恋人",
        "VII 戦車",
        "VIII 力",
        "IX 隠者",
        "X 運命の輪",
        "XI 正義",
        "XII 吊された男",
        "XIII 死神",
        "XIV 節制",
        "XV 悪魔",
        "XVI 塔",
        "XVII 星",
        "XVIII 月",
        "XIX 太陽",
        "XX 審判",
        "XXI 世界",
    ];

    card_urls = [
        "cards/00-fool.html",
        "cards/01-magician.html",
        "cards/02-high-priestess.html",
        "cards/03-empress.html",
        "cards/04-emperor.html",
        "cards/05-hierophant.html",
        "cards/06-lovers.html",
        "cards/07-chariot.html",
        "cards/08-strength.html",
        "cards/09-hermit.html",
        "cards/10-wheel-of-fortune.html",
        "cards/11-justice.html",
        "cards/12-hanged-man.html",
        "cards/13-death.html",
        "cards/14-temperance.html",
        "cards/15-devil.html",
        "cards/16-tower.html",
        "cards/17-star.html",
        "cards/18-moon.html",
        "cards/19-sun.html",
        "cards/20-judgement.html",
        "cards/21-world.html",
    ];

    div_center = document.getElementById('div_center');

    let new_element3 = document.createElement('div');
    new_element3.style.textAlign = 'center';
    div_center.appendChild(new_element3);

    let new_element = document.createElement('img');
    new_element.width = 300;
    new_element.height = 510;
    new_element.src = "static/images/RWS_Tarot/" + image_ulr[card_no];
    if (reverse == 1) {
        new_element.style.rotate = '180deg'; 
    }
    let card_img_link = document.createElement('a');
    card_img_link.href = card_urls[card_no];
    card_img_link.appendChild(new_element);
    new_element3.appendChild(card_img_link);

    let new_element2 = document.createElement('div');
    new_element2.className = 'div_card_name';
    new_element2.style.textAlign = 'center';
    new_element2.textContent = card_name[card_no];
    div_center.appendChild(new_element2);

    showContentCore(content);

    let card_detail_link = document.createElement('a');
    card_detail_link.href = card_urls[card_no];
    card_detail_link.className = 'text-link';
    card_detail_link.style.cssText = 'margin: 0.5em auto 0; font-size: 0.85em;';
    card_detail_link.textContent = '詳しいカード解説を読む';
    let card_detail_div = document.createElement('div');
    card_detail_div.style.textAlign = 'center';
    card_detail_div.appendChild(card_detail_link);
    let shareDiv = div_center.querySelector('.share-buttons');
    div_center.insertBefore(card_detail_div, shareDiv);
}
