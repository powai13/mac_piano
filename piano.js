'use scrict'

//画像読み込み
const piano_px = new Image();
piano_px.src='piano.png'

document.getElementById('thn').style.display = 'hidden';

//手本の画像
function hakka() {
    const thn = document.getElementById('thn');

    if(thn.style.display == "visible") {
        thn.style.display = "hidden"; 
        } else {
            thn.style.display = "visible";
        }
    }

//音階
let do1 = 0;
let re = 1;
let mi = 2;
let fa = 3;
let so = 4;
let ra = 5;
let si = 6;
let do2 = 7;

let s_do1 = 1;
let s_re = 2;
let s_mi = 3;
let s_fa = 4;
let s_so = 5;
let s_ra = 6;
let s_si = 7;
let s_do2 = 8;

//音階＿表示
let do1_s = 0;
let re_s = 0;
let mi_s = 0;
let fa_s = 0;
let so_s = 0;
let ra_s = 0;
let si_s = 0;
let do2_s = 0;

let Db_s = 0;
let Eb_s = 0;
let Gb_s = 0;
let Ab_s = 0;
let Bb_s = 0;

//音階＿音＿長押し
let dd = 0;
let rr = 0;
let mm = 0;
let ff = 0;
let ss = 0;
let ll = 0;
let sss = 0;
let dd2 = 0;

let rrb = 0;
let mmb = 0;
let ssb = 0;
let llb = 0;
let sssb = 0;


//白健＿影＿座標（間違えたので、宣言の名前がおかしくなってる）
const hak_w = 23;
const hak_h = 150;
const hak_z_w = 0;
const hak_z_h = 0;

//白健
const hak_k_w = hak_w;

//黒鍵
const kok_w = 11;
const kok_h = 95;
const kok_z_w = hak_w * 2;

//黒鍵＿影
const kok_k_w = kok_z_w + kok_w;

//キャンバス処理（保留）
const can = document.getElementById('can'); // mainキャンパスの要素を取得
const con = can.getContext("2d"); // 2d描画コンテキストを取得

//キャンバスサイズ
const Width = hak_w * 8;
const Height = hak_h + 5;

can.width = Width;
can.height = Height;


function piano_pic() {

    hakken_shadow();
    hakken();
    kokkn_shadow();
    kokkn();

//白健
function hakken() {

    //ド
    if(do1_s == 0) {
    con.drawImage(piano_px, hak_k_w, hak_z_h, hak_w, hak_h, hak_w * do1, 0, hak_w, hak_h);
}
    //レ
    if(re_s == 0)
    con.drawImage(piano_px, hak_k_w, hak_z_h, hak_w, hak_h, hak_w * re, 0, hak_w, hak_h);

    //ミ
    if(mi_s == 0)
    con.drawImage(piano_px, hak_k_w, hak_z_h, hak_w, hak_h, hak_w * mi, 0, hak_w, hak_h);

    //ファ
    if(fa_s == 0)
    con.drawImage(piano_px, hak_k_w, hak_z_h, hak_w, hak_h, hak_w * fa, 0, hak_w, hak_h);

    //ソ
    if(so_s == 0)
    con.drawImage(piano_px, hak_k_w, hak_z_h, hak_w, hak_h, hak_w * so, 0, hak_w, hak_h);

    //ラ
    if(ra_s == 0)
    con.drawImage(piano_px, hak_k_w, hak_z_h, hak_w, hak_h, hak_w * ra, 0, hak_w, hak_h);

    //シ
    if(si_s == 0)
    con.drawImage(piano_px, hak_k_w, hak_z_h, hak_w, hak_h, hak_w * si, 0, hak_w, hak_h);

    //ド２
    if(do2_s == 0)
    con.drawImage(piano_px, hak_k_w, hak_z_h, hak_w, hak_h, hak_w * do2, 0, hak_w, hak_h);

}

//白健＿影
function hakken_shadow() {

    for(let x = 0; x < 8; x++) {

    con.drawImage(piano_px, hak_z_w, hak_z_h, hak_w, hak_h, hak_w * x, 5, hak_w, hak_h)

    }

}

//黒鍵
function kokkn() {
    
    // #ド
    if(Db_s == 0)
    con.drawImage(piano_px, kok_z_w, 0, kok_w, kok_h, hak_w * s_do1 - kok_w / 2, 0, kok_w, kok_h)

    // #レ
    if(Eb_s == 0)
    con.drawImage(piano_px, kok_z_w, 0, kok_w, kok_h, hak_w * s_re - kok_w / 2, 0, kok_w, kok_h)

    // #ファ
    if(Gb_s == 0)
    con.drawImage(piano_px, kok_z_w, 0, kok_w, kok_h, hak_w * s_fa - kok_w / 2, 0, kok_w, kok_h)

    // #ソ
    if(Ab_s == 0)
    con.drawImage(piano_px, kok_z_w, 0, kok_w, kok_h, hak_w * s_so - kok_w / 2, 0, kok_w, kok_h)

    // #ラ
    if(Bb_s == 0)
    con.drawImage(piano_px, kok_z_w, 0, kok_w, kok_h, hak_w * s_ra - kok_w / 2, 0, kok_w, kok_h)

}

//黒鍵＿影
function kokkn_shadow() {
    
    // #ド
    con.drawImage(piano_px, kok_k_w, 0, kok_w, kok_h, hak_w * s_do1 - kok_w / 2, 0, kok_w, kok_h)

    // #レ
    con.drawImage(piano_px, kok_k_w, 0, kok_w, kok_h, hak_w * s_re - kok_w / 2, 0, kok_w, kok_h)

    // #ファ
    con.drawImage(piano_px, kok_k_w, 0, kok_w, kok_h, hak_w * s_fa - kok_w / 2, 0, kok_w, kok_h)

    // #ソ
    con.drawImage(piano_px, kok_k_w, 0, kok_w, kok_h, hak_w * s_so - kok_w / 2, 0, kok_w, kok_h)

    // #ラ
    con.drawImage(piano_px, kok_k_w, 0, kok_w, kok_h, hak_w * s_ra - kok_w / 2, 0, kok_w, kok_h)

}
}


//キーボードを押したら音が鳴る処理
window.onkeydown = function(e) {
    let c = e.keyCode;
    
    // z_ド1
    if(c == 90) {
        if(dd != 1) {
    do_audio.pause();
    do_audio.currentTime = 0;
    do_audio.play();

    do1_s = 1;
    dd++;

    console.log(do1_s);
}
}
    // x_レ
    if(c ==88) {
        if(rr != 1) {
    re_audio.pause();
    re_audio.currentTime = 0;
    re_audio.play();

    re_s = 1;
    rr++;
}
}
    // c_ミ
    if(c == 67) {
        if(mm != 1) {
    mi_audio.pause();
    mi_audio.currentTime = 0;
    mi_audio.play();

    mi_s = 1;
    mm++;
}
}

    // v_ファ
    if(c == 86) {
        if(ff != 1) {
    fa_audio.pause();
    fa_audio.currentTime = 0;
    fa_audio.play();

    fa_s = 1;
    ff++;
}
}

    // b _ソ
    if(c == 66) {
        if(ss != 1) {
    so_audio.pause();
    so_audio.currentTime = 0;
    so_audio.play();

    so_s = 1;
    ss++;
}
}

    // n_ラ
    if(c == 78) {
        if(ll != 1) {
    ra_audio.pause();
    ra_audio.currentTime = 0;
    ra_audio.play();

    ra_s = 1;
    ll++;
}
}

    // m_シ
    if(c == 77) {
        if(sss != 1) {
    si_audio.pause();
    si_audio.currentTime = 0;
    si_audio.play();

    si_s = 1;
    sss++;
}
}

    // ,_ド2
    if(c == 188) {
        if(dd2 != 1) {
    do2_audio.pause();
    do2_audio.currentTime = 0;
    do2_audio.play();

    do2_s = 1;
    dd2++;
}
}

    // s_レb
    if(c == 83) {
        if(rrb != 1) {
    Db_audio.pause();
    Db_audio.currentTime = 0;
    Db_audio.play();

    Db_s = 1;
    rrb++;
}
}

    // d_ミb
    if(c == 68) {
        if(mmb != 1) {
    Eb_audio.pause();
    Eb_audio.currentTime = 0;
    Eb_audio.play();

    Eb_s = 1;
    mmb++;
}
}

    // g_ソb
    if(c == 71) {
        if(ssb != 1) {
    Gb_audio.pause();
    Gb_audio.currentTime = 0;
    Gb_audio.play();

    Gb_s = 1;
    ssb++;
}
}

    // h_ラb
    if(c == 72) {
        if(llb != 1) {
    Ab_audio.pause();
    Ab_audio.currentTime = 0;
    Ab_audio.play();

    Ab_s = 1;
    llb++;
}
}

    // j_シb
    if(c == 74) {
        if(sssb != 1) {
    Bb_audio.pause();
    Bb_audio.currentTime = 0;
    Bb_audio.play();

    Bb_s = 1;
    sssb++;
}
}
}



//キーボードを離したら画像が現れる処置
window.onkeyup = function(e) {
    let c = e.keyCode;
    
    // z_ド1
    if(c == 90) {

    do1_s = 0;
    dd = 0;

    console.log(do1_s);
}
    // x_レ
    if(c ==88) {
    
    re_s = 0;
    rr = 0;
}
    // c_ミ
    if(c == 67) {

    mi_s = 0;
    mm = 0;
}

    // v_ファ
    if(c == 86) {

    fa_s = 0;
    ff = 0;
}

    // b _ソ
    if(c == 66) {

    so_s = 0;
    ss = 0;
}

    // n_ラ
    if(c == 78) {

    ra_s = 0;
    ll = 0;
}

    // m_シ
    if(c == 77) {

    si_s = 0
    sss = 0;
}   

    // ,_ド2
    if(c == 188) {

    do2_s = 0;
    dd2 = 0;
}


    // s_レb
    if(c == 83) {

    Db_s = 0;
    rrb = 0;
}

    // d_ミb
    if(c == 68) {

    Eb_s = 0;
    mmb = 0;
}

    // g_ソb
    if(c == 71) {

    Gb_s = 0;
    ssb = 0;
}

    // h_ラb
    if(c == 72) {

    Ab_s = 0;
    llb = 0;
}

    // j_シb
    if(c == 74) {

    Bb_s = 0;
    sssb = 0;
}
}


//音量調節
function audio_size() {
    const audios = document.getElementsByTagName('audio');
    for(let n = 0; audios.length > n; n ++) {
        audios[n].volume = 0.5;
    }
    const do1 = document.getElementById('do_audio');
    do1.volume = 0.7;
}


//　画像描画の起動
window.onload = function() {

    //functionつけるか、()を外さないと作動しない
    setInterval(function(){piano_pic()},33);

    audio_size();
}

