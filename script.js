const songs = [
  {
    "id": 1,
    "artist": "10CM",
    "title": "너에게 닿기를",
    "lyric": "이어져 가서는 닿기를",
    "youtubeUrl": "https://youtu.be/Ry1RrIVyl1M?si=XeoEr0H6zBncCFoV"
  },
  {
    "id": 2,
    "artist": "AKMU (악뮤)",
    "title": "후라이의 꿈",
    "lyric": "난 차라리 흘러갈래",
    "youtubeUrl": "https://youtu.be/3kGAlp_PNUg?si=V8LSfei0jcGgEdTY"
  },
  {
    "id": 3,
    "artist": "DAY6 (데이식스)",
    "title": "Happy",
    "lyric": "매일 웃고 싶어요",
    "youtubeUrl": "https://youtu.be/sWXGbkM0tBI?si=Bxk6sHP7VX3WuwmJ"
  },
  {
    "id": 4,
    "artist": "DAY6 (데이식스)",
    "title": "Maybe Tomorrow",
    "lyric": "내일이 오면 오늘보단 나아지겠지",
    "youtubeUrl": "https://youtu.be/0fyZqS0N19o?si=UzbKNLOpYgR37TKJ"
  },
  {
    "id": 5,
    "artist": "DAY6 (데이식스)",
    "title": "The Power of Love",
    "lyric": "Nothing is impossible",
    "youtubeUrl": "https://youtu.be/QuXMaY-g9mc?si=aQ1p5h9WjtzY9Dt3"
  },
  {
    "id": 6,
    "artist": "DAY6 (데이식스)",
    "title": "Welcome to the Show",
    "lyric": "이것만큼은 맹세할게 내 전부를 다 바칠게",
    "youtubeUrl": "https://youtu.be/RowlrvmyFEk?si=H6zxLyFG8a294NDV"
  },
  {
    "id": 7,
    "artist": "DAY6 (데이식스)",
    "title": "꿈의 버스",
    "lyric": "난 계속 꿈을 꿔요",
    "youtubeUrl": "https://youtu.be/hZ6pts6e8dI?si=bWlcExp3EuNqkjFi"
  },
  {
    "id": 8,
    "artist": "DAY6 (데이식스)",
    "title": "드디어 끝나갑니다",
    "lyric": "지금부터 울 일은 없습니다",
    "youtubeUrl": "https://youtu.be/t5vHBX07Qb4?si=YaheBjDuwo3KZmyR"
  },
  {
    "id": 9,
    "artist": "DAY6 (데이식스)",
    "title": "한 페이지가 될 수 있게",
    "lyric": "아름다운 청춘의 한 장 함께 써내려 가자",
    "youtubeUrl": "https://youtu.be/vnS_jn2uibs?si=cFPsJXbDhnzlz3dl"
  },
  {
    "id": 10,
    "artist": "DAY6 (데이식스)",
    "title": "행복했던 날들이었다",
    "lyric": "이제는 노을은 밤의 시작일 뿐이야",
    "youtubeUrl": "https://youtu.be/1nk5O__ALI8?si=Pk9LkL11MDzMJCoF"
  },
  {
    "id": 11,
    "artist": "DRW",
    "title": "꿈, 너, 그리다",
    "lyric": "쌓이고 쌓여 하늘에 밝게 빛날거야",
    "youtubeUrl": "https://youtu.be/Zls3Iv17BWc?si=4Nyiwj2vpeh6HY4t"
  },
  {
    "id": 12,
    "artist": "LUCY",
    "title": "개화(Flowering)",
    "lyric": "괜찮아 언젠가 파랗게 피어날거야",
    "youtubeUrl": "https://youtu.be/hlv5N6bT8W4?si=kD4KNkQbn0YLGrwt"
  },
  {
    "id": 13,
    "artist": "LUCY",
    "title": "낙화",
    "lyric": "‘피다’의 반대말은 ‘지다’가 아냐",
    "youtubeUrl": "https://youtu.be/rBfrlmZhJoQ?si=wxPXfyuYiRe6TNI1&t=315"
  },
  {
    "id": 14,
    "artist": "LUCY",
    "title": "발아",
    "lyric": "봐봐 앞으로 조금이야/내가 담은 끝없는 별이 터져 쏟아져 나와",
    "youtubeUrl": "https://youtu.be/wVaQIjHzyW8?si=QX3wQ0zsO28AGnrT"
  },
  {
    "id": 15,
    "artist": "NONB",
    "title": "Fly again! (feat. 주랑)",
    "lyric": "아직 늦지 않았으니까 걱정은 하지 마",
    "youtubeUrl": "https://youtu.be/BloCypwIxHc?si=j7o7iiYxunxNUnJ-"
  },
  {
    "id": 16,
    "artist": "wave to earth",
    "title": "light",
    "lyric": "You're always shining",
    "youtubeUrl": "https://youtu.be/xt_IlpwNAFo?si=G4Mh_WGK_UQROx20"
  },
  {
    "id": 17,
    "artist": "wave to earth",
    "title": "사랑으로",
    "lyric": "부서지고 굳어지고 녹아내리고 나면/그제서야 보이는 나의 영원",
    "youtubeUrl": "https://youtu.be/L7cAqBQVjYI?si=xFRv10W0LOTC-FW4"
  },
  {
    "id": 18,
    "artist": "Xdinary Heroes",
    "title": "꿈을 꾸는 소녀",
    "lyric": "소중히 간직하길 바라요/그 꿈이 진짜가 될 때까지",
    "youtubeUrl": "https://youtu.be/cT5H4doALFA?si=iOBAyCu0JX_Ss10l"
  },
  {
    "id": 19,
    "artist": "yung kai",
    "title": "blue",
    "lyric": "So let me fly with you",
    "youtubeUrl": "https://youtu.be/IpFX2vq8HKw?si=ip8ZY4d_ZOfZVTy5"
  },
  {
    "id": 20,
    "artist": "ZEROBASEONE",
    "title": "In Bloom",
    "lyric": "난 그저 모르는 체 반복해 day after day",
    "youtubeUrl": "https://youtu.be/trzeUClQIIg?si=Ph3-zK9XJrLiIIoB"
  },
  {
    "id": 21,
    "artist": "ZEROBASEONE",
    "title": "내일의 너에게 닿기를",
    "lyric": "내일의 너에게 닿기를",
    "youtubeUrl": "https://youtu.be/Av10eIyOF90?si=_dPWZFlt658ExVXM"
  },
  {
    "id": 22,
    "artist": "가호 (Gaho)",
    "title": "Running",
    "lyric": "또 다시 뒤쳐지는 그런 날들에/반대로 나를 일으켜 달려 나가",
    "youtubeUrl": "https://youtu.be/FrOLeoXrvLU?si=BW4v3Cks3-RFoBBH"
  },
  {
    "id": 23,
    "artist": "가호 (Gaho)",
    "title": "시작",
    "lyric": "내 꿈은 더 단단해질 테니",
    "youtubeUrl": "https://youtu.be/o99aQZ62nCQ?si=uujB_9k5_CQejecc"
  },
  {
    "id": 24,
    "artist": "검정치마",
    "title": "everything",
    "lyric": "넌 내 모든 거야/내 여름이고 내 꿈이야",
    "youtubeUrl": "https://youtu.be/Aq_gsctWHtQ?si=WFZ3dLLNrVo7IlYy"
  },
  {
    "id": 25,
    "artist": "구준회",
    "title": "Higher",
    "lyric": "가슴 속에 두근대는 심장 소리 커져가는 걸",
    "youtubeUrl": "https://youtu.be/9zq9EBwwee0?si=Fwq1ANdNrN5kWm-K"
  },
  {
    "id": 26,
    "artist": "기현 (Kihyun)",
    "title": "Youth",
    "lyric": "넌 지금도 충분히 잘 하고 있다고",
    "youtubeUrl": "https://youtu.be/0OliiOgXlJI?si=G4Lq5G1paiNTFCiv"
  },
  {
    "id": 27,
    "artist": "김연대",
    "title": "1982",
    "lyric": "이제는 좀 웃어도 돼요",
    "youtubeUrl": "https://youtu.be/mi496Dzozg8?si=YlhTN6FoLnjDv-vv"
  },
  {
    "id": 28,
    "artist": "김한겸",
    "title": "Shining",
    "lyric": "다시 오지 않을 기회일테니까, 한 번 시작해보는 거야",
    "youtubeUrl": "https://youtu.be/Jb2ZrZl-rVU?si=kAkiDpMcHrywO0wi"
  },
  {
    "id": 29,
    "artist": "도겸 (DK)",
    "title": "Go!",
    "lyric": "여전히 내 심장 뛰고있어",
    "youtubeUrl": "https://youtu.be/Is7yLDpPkGU?si=jODjYwY1O9kytfx6"
  },
  {
    "id": 30,
    "artist": "도영 (DOYOUNG)",
    "title": "나의 바다에게",
    "lyric": "너만은 나를 세게 안아줘",
    "youtubeUrl": "https://youtu.be/LvWN3hxxnb0?si=rq5dkKq8gYZFBFiZ"
  },
  {
    "id": 31,
    "artist": "도영 (DOYOUNG)",
    "title": "댈러스 러브 필드",
    "lyric": "Chasing love across the receivers",
    "youtubeUrl": "https://youtu.be/Qt7lUq_iBxg?si=tqinfTGGMGRDm7mZ"
  },
  {
    "id": 32,
    "artist": "도영 (DOYOUNG)",
    "title": "반딧불",
    "lyric": "찰나엔 흐려도 괜찮을 거야",
    "youtubeUrl": "https://youtu.be/UZjGcAjd8Ok?si=bqDX0obJgtK9ab0f"
  },
  {
    "id": 33,
    "artist": "도영 (DOYOUNG)",
    "title": "새봄의 노래",
    "lyric": "저 우주를 함께 날아갈 거야",
    "youtubeUrl": "https://youtu.be/a5TheCP_T1Q?si=9EtWB8bYwdc7NPNk"
  },
  {
    "id": 34,
    "artist": "도영 (DOYOUNG)",
    "title": "쉼표",
    "lyric": "괜찮아 잠시 넘어져도 곧 다시 시작될 테니까",
    "youtubeUrl": "https://youtu.be/oaj531BuP0E?si=H-MSd8aftN6GgR7w"
  },
  {
    "id": 35,
    "artist": "도영 (DOYOUNG)",
    "title": "시리도록 눈부신",
    "lyric": "바람, 네 작은 돛단배를 힘껏 밀어",
    "youtubeUrl": "https://youtu.be/PXauPHYOgzs?si=qStY0-ooTSMjghAc"
  },
  {
    "id": 36,
    "artist": "디노 (DINO)",
    "title": "이카루스",
    "lyric": "꿈을 그리는 그곳에",
    "youtubeUrl": "https://youtu.be/3Ruc6uLmiBE?si=dNWjuTsv5aBsUoce"
  },
  {
    "id": 37,
    "artist": "딕펑스(DPNS)",
    "title": "VIVA청춘",
    "lyric": "반짝여라 젊은 날 반짝여라 내 청춘",
    "youtubeUrl": "https://youtu.be/FODnA8jGC0Q?si=_2lFiZdxrP7TNmfS"
  },
  {
    "id": 38,
    "artist": "리노, 승민, 아이엔 (Stray Kids)",
    "title": "START",
    "lyric": "밤하늘에 빛나던 별 보다 눈부셨던 우리의 꿈",
    "youtubeUrl": "https://youtu.be/ooMYoX7vMlY?si=rMUUNkg1YFkL1XVJ"
  },
  {
    "id": 39,
    "artist": "무한궤도",
    "title": "그대에게",
    "lyric": "내 삶이 끝나는 날까지 나는 언제나 그대 곁에 있겠어요",
    "youtubeUrl": "https://youtu.be/SVxiqGiLMCM?si=61KuTu_B2YigdI10&t=85"
  },
  {
    "id": 40,
    "artist": "방탄소년단",
    "title": "Dynamite",
    "lyric": "Life is sweet as honey",
    "youtubeUrl": "https://youtu.be/gdZLi9oWNZg?si=V1RXf_ncW4wl_jhb"
  },
  {
    "id": 41,
    "artist": "새소년",
    "title": "난춘 (亂春)",
    "lyric": "오늘을 살아내고 우리 내일로 가자",
    "youtubeUrl": "https://youtu.be/KsznX5j2oQ0?si=J0nardQ9J1ktRaRm"
  },
  {
    "id": 42,
    "artist": "백예린 (Yerin Baek)",
    "title": "Antifreeze",
    "lyric": "춤을 추며 절망이랑 싸울 거야",
    "youtubeUrl": "https://youtu.be/74_yqNBhQbA?si=wCupnek9HdYMAt5b"
  },
  {
    "id": 43,
    "artist": "볼빨간사춘기",
    "title": "여행",
    "lyric": "쉬지 않고 빛났던 꿈같은 my youth",
    "youtubeUrl": "https://youtu.be/xRbPAVnqtcs?si=86HeHCrlg3VWMzlL"
  },
  {
    "id": 44,
    "artist": "서동현 (Feat. 이무진)",
    "title": "바이 바이",
    "lyric": "따분하다고 느껴도 모든 건 언젠가 다 라일락",
    "youtubeUrl": "https://youtu.be/QjyzTxBjgRA?si=3ib52-KAd2wpZsRL"
  },
  {
    "id": 45,
    "artist": "세븐틴 (SEVENTEEN)",
    "title": "청춘찬가",
    "lyric": "어쩌다 보니 처음으로 마주한 오늘이라서",
    "youtubeUrl": "https://youtu.be/8qFwSTb8xFM?si=g5yhA3CWrUmvPpPV"
  },
  {
    "id": 46,
    "artist": "시도 (Xydo)",
    "title": "가보자",
    "lyric": "어디든 갈 수 있는 지금",
    "youtubeUrl": "https://youtu.be/aY382UdxfnQ?si=i2YVfxfJlgmR4JNj"
  },
  {
    "id": 47,
    "artist": "실리카겔",
    "title": "NO PAIN",
    "lyric": "No pain, no fail",
    "youtubeUrl": "https://youtu.be/JaIMSzE5yLA?si=ot50U2hU9eCUD-lp"
  },
  {
    "id": 48,
    "artist": "아이유",
    "title": "Celebrity",
    "lyric": "잊지마 넌 흐린 어둠 사이 왼손으로 그린 별 하나",
    "youtubeUrl": "https://youtu.be/0-q1KafFCLU?si=Ku5N83G7JE7uSefr"
  },
  {
    "id": 49,
    "artist": "아이유",
    "title": "에잇",
    "lyric": "우울한 결말 따위는 없어",
    "youtubeUrl": "https://youtu.be/Cxzzg7L3Xgc?si=h9mMpoGhlrpYbq8l"
  },
  {
    "id": 50,
    "artist": "에픽하이 (EPIK HIGH)",
    "title": "Fly",
    "lyric": "어두운 밤일수록 밝은 별은 더 빛나",
    "youtubeUrl": "https://youtu.be/sHqLlyBlmQI?si=Eivd3Hh8TQFvbZrx"
  },
  {
    "id": 51,
    "artist": "엔플라잉 (N.Flying)",
    "title": "Flashback",
    "lyric": "언젠가 네가 말하던 그 사랑 얘기에",
    "youtubeUrl": "https://youtu.be/b3xubrV7nnk?si=myV201OTZCfFrdea"
  },
  {
    "id": 52,
    "artist": "엔플라잉 (N.Flying)",
    "title": "Star",
    "lyric": "잊지마. 너는 그렇게 찬란히 빛나",
    "youtubeUrl": "https://youtu.be/9dokaoupejA?si=SkvioENufPtFFxwd"
  },
  {
    "id": 53,
    "artist": "엔플라잉 (N.Flying)",
    "title": "만년설",
    "lyric": "너의 점과 나의 점을 이어 나가서 새로운 별자리가 되자",
    "youtubeUrl": "https://youtu.be/2L_W8hPpdhg?si=hb5jyXEM2etNL8aP"
  },
  {
    "id": 54,
    "artist": "영케이 (Young K)",
    "title": "Natural",
    "lyric": "불안해하지 말아줘. 날 믿어줘",
    "youtubeUrl": "https://youtu.be/xn-X1yjM0kQ?si=oG6pdJHZDTrIbYZe"
  },
  {
    "id": 55,
    "artist": "영케이 (Young K)",
    "title": "오늘만을 너만을 이날을",
    "lyric": "나도 열심히 웃으면서 기다렸어",
    "youtubeUrl": "https://youtu.be/IYdSHLtY3UI?si=arhGoCvG6ly5pJNg"
  },
  {
    "id": 56,
    "artist": "우효",
    "title": "청춘 (DAY)",
    "lyric": "손도 작은 내가 나를 달래고 나면 가끔은 눈물이 고여",
    "youtubeUrl": "https://youtu.be/wrmyqKRGW-0?si=Dkj95nfee5REsd0v"
  },
  {
    "id": 57,
    "artist": "원필 (DAY6)",
    "title": "행운을 빌어 줘",
    "lyric": "내 앞길에 행복을 빌어 줘",
    "youtubeUrl": "https://youtu.be/5gR8kqgv9oc?si=o0bpJMJKOv7suaKX"
  },
  {
    "id": 58,
    "artist": "유다빈밴드",
    "title": "항해",
    "lyric": "이제야 마주한 꿈의 대양 춤을 추듯이 흘러가보자",
    "youtubeUrl": "https://youtu.be/Gbb2A5m7d_4?si=A6ByMUoKhN78S2Ej"
  },
  {
    "id": 59,
    "artist": "윤하 (YOUNHA)",
    "title": "사건의 지평선",
    "lyric": "여긴 서로의 끝이 아닌 새로운 길 모퉁이",
    "youtubeUrl": "https://youtu.be/BBdC1rl5sKY?si=Qc5F3tzO0TVjNbwO"
  },
  {
    "id": 60,
    "artist": "이무진",
    "title": "청춘만화",
    "lyric": "오늘보다 오래된 날은 없으니 어서 날아오르자",
    "youtubeUrl": "https://youtu.be/qLJq2muxhWc?si=PsmCMKJ2yntebZ3v"
  },
  {
    "id": 61,
    "artist": "이무진",
    "title": "청춘이 버겁다 (Prod. 정동환, with 화곡동)",
    "lyric": "뭐든 이뤄야만 할 것 같은 많은 질문들",
    "youtubeUrl": "https://youtu.be/Xq-nnmhbxQ4?si=4tIVKmsDOQf6VOQs"
  },
  {
    "id": 62,
    "artist": "이문세",
    "title": "소녀",
    "lyric": "찾고 싶은 옛 생각들 하늘에 그려요",
    "youtubeUrl": "https://youtu.be/sclOqrS8WNQ?si=mEQpZD-lA1ernMql"
  },
  {
    "id": 63,
    "artist": "이세계",
    "title": "낭만젊음사랑",
    "lyric": "우린 젊음이란 배를 타고 떠나갈 거야",
    "youtubeUrl": "https://youtu.be/nGOX-sWghvE?si=mxkuezTnjQrf1Oh1"
  },
  {
    "id": 64,
    "artist": "이승열",
    "title": "날아",
    "lyric": "거기서 멈춰있지마 그곳은 네 자리가 아냐",
    "youtubeUrl": "https://youtu.be/ZfGzXCUqlJg?si=KureCym7r3p1hTW6"
  },
  {
    "id": 65,
    "artist": "이클립스 (ECLIPSE)",
    "title": "Run Run",
    "lyric": "넘어져도 Start again",
    "youtubeUrl": "https://youtu.be/Cu5tyyiO0x4?si=5J1Cms-EDGStLOTp"
  },
  {
    "id": 66,
    "artist": "임현식",
    "title": "Sunshine",
    "lyric": "계속 나갈 수 있게 너는 빛나줘",
    "youtubeUrl": "https://youtu.be/0zTv8YEeGxM?si=xkJaua_yr2203NAj"
  },
  {
    "id": 67,
    "artist": "잔나비",
    "title": "주저하는 연인들을 위해",
    "lyric": "나의 자라나는 마음을 못 본채 꺾어 버릴 수는 없네",
    "youtubeUrl": "https://youtu.be/40vynd0KsHg?si=D_ff0K4R3dihG1Sp"
  },
  {
    "id": 68,
    "artist": "잔나비",
    "title": "초록을 거머쥔 우리는",
    "lyric": "푸르던 날들로 내몰린 젊은 우리는",
    "youtubeUrl": "https://youtu.be/TqVw-Lv3wBo?si=A2ECLjNnNfjwKjwl"
  },
  {
    "id": 69,
    "artist": "제이세라",
    "title": "돌멩이",
    "lyric": "나는 돌멩이 이리 치이고 저리 치여도 굴러가다 보면 좋은 날 오겠지",
    "youtubeUrl": "https://youtu.be/RD84PrmLD8E?si=D6cbSiGgDTTmzTFp"
  },
  {
    "id": 70,
    "artist": "투모로우바이투게더",
    "title": "hey! hey!",
    "lyric": "아무도 모르는 내일로 어느새 속도를 내 뛰고 있어",
    "youtubeUrl": "https://youtu.be/I4Trrq2iX4I?si=LH-c59PefnozuXRH"
  },
  {
    "id": 71,
    "artist": "투모로우바이투게더",
    "title": "LO$ER=LO♡ER",
    "lyric": "I’m a LO$ER, I’m a LO$ER Lover with a $ dollar sign",
    "youtubeUrl": "https://youtu.be/JzODRUBBXpc?si=21zbiDm0ycvoEg7B"
  },
  {
    "id": 72,
    "artist": "투어스(TWS)",
    "title": "너의 이름(Highlight)",
    "lyric": "너는 말야 내 청춘의 Highligh",
    "youtubeUrl": "https://youtu.be/mmVHP8y1Gvc?si=eh153UE3C5FW429p"
  },
  {
    "id": 73,
    "artist": "투어스(TWS)",
    "title": "다시 만난 오늘",
    "lyric": "소리 없이 자라버린 마음이 다시 네게로 나를 데려다 놓은 거야",
    "youtubeUrl": "https://youtu.be/w7oZ9zoBemM?si=FF98zza4LwgNs2zs"
  },
  {
    "id": 74,
    "artist": "투어스(TWS)",
    "title": "마음 따라 뛰는 건 멋지지 않아?",
    "lyric": "하고 싶은 걸 따라가자 외치는 거야",
    "youtubeUrl": "https://youtu.be/Csaj3X6PKxY?si=Khfl7QjL_0Bxmnxt"
  },
  {
    "id": 75,
    "artist": "투어스(TWS)",
    "title": "첫 만남은 계획대로 되지 않아",
    "lyric": "일도, 내일모레도 기억해, 영원히 반짝일 순간",
    "youtubeUrl": "https://youtu.be/hVAc1Vf2ITU?si=VuF8Q3nmN-pV6Zv9"
  },
  {
    "id": 76,
    "artist": "페퍼톤스 (PEPPERTONES)",
    "title": "Ready, Get Set, Go!",
    "lyric": "지금 여기서 숨이 멎어도 후회 따위는 없어",
    "youtubeUrl": "https://youtu.be/wHNTpaTXxwM?si=MzhC02EqdblI1cCe"
  },
  {
    "id": 77,
    "artist": "페퍼톤스 (PEPPERTONES)",
    "title": "행운을 빌어요",
    "lyric": "끝은 또 하나의 시작",
    "youtubeUrl": "https://youtu.be/U6dTSMCqlp4?si=7rAdegR_ZJ9wIo17"
  },
  {
    "id": 78,
    "artist": "하나루미, 김예지나",
    "title": "웃는거야",
    "lyric": "조금 더 높이 조금 더 멀리 날아보는 거야",
    "youtubeUrl": "https://youtu.be/fM6GrhMRTf4?si=17_3XHxJ3coo4J8U"
  },
  {
    "id": 79,
    "artist": "하성운",
    "title": "그때의 우리",
    "lyric": "가장 푸른 여름날의 태양처럼 눈부시던",
    "youtubeUrl": "https://youtu.be/-3G2JHnRXM8?si=1SK9fOA-_0-7DtlD"
  },
  {
    "id": 80,
    "artist": "한로로",
    "title": "사랑하게 될 거야",
    "lyric": "나는 너를 용서하고 사랑하게 될 거야",
    "youtubeUrl": "https://youtu.be/h0KIWaUEIgQ?si=_ii39BYIQxs-yGxc"
  },
  {
    "id": 81,
    "artist": "한로로",
    "title": "입춘",
    "lyric": "우리의 봄은 겨울을 지나서야 오나 봐",
    "youtubeUrl": "https://youtu.be/pNi9PjmbUrI?si=L-RrNW2YaVZHYeJD"
  },
  {
    "id": 82,
    "artist": "홍민석 with MONAD",
    "title": "너에게로",
    "lyric": "지루했던 방황은 이제 그만 벗어 나고 싶어",
    "youtubeUrl": "https://youtu.be/RGv-u7gXi1s?si=YE3uglGte4QJ_EA4"
  }
];

const state = { remaining: [...songs], picked: [], busy:false };

const $ = id => document.getElementById(id);
const pickBtn = $('pickBtn'), againBtn = $('againBtn');

function escapeHtml(s){
  return String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]));
}


function mixedFontText(text){
  const safe=escapeHtml(text);
  return safe.replace(/([A-Za-z][A-Za-z0-9$!?'=+\-.:,&/ ]*)/g,
    '<span class="latin">$1</span>');
}

function youtubeSearchUrl(song){
  return 'https://www.youtube.com/results?search_query=' +
    encodeURIComponent(song.artist + ' ' + song.title);
}
function youtubeId(url){
  if(!url) return null;
  const m = String(url).match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([A-Za-z0-9_-]{11})/);
  return m ? m[1] : null;
}
function setBusy(on){
  state.busy=on;
  pickBtn.disabled=on; againBtn.disabled=on;
  pickBtn.textContent=on ? '...' : 'PICK';
}
function shuffleArray(arr){
  const copy=[...arr];
  for(let i=copy.length-1;i>0;i--){
    const j=Math.floor(Math.random()*(i+1));
    [copy[i],copy[j]]=[copy[j],copy[i]];
  }
  return copy;
}

// 첫 화면에서도 영수증형 TOP 10 플레이리스트를 보여줍니다.
function buildTop10(selected){
  let listSongs;

  if(selected){
    // 선택된 곡은 10곡 안에 한 번만 포함하고, 첫 번째에는 배치하지 않습니다.
    const others = shuffleArray(songs.filter(s => s.id !== selected.id)).slice(0, 9);
    const insertIndex = 1 + Math.floor(Math.random() * 9); // 2~10번째 위치
    listSongs = [...others];
    listSongs.splice(insertIndex, 0, selected);
  }else{
    listSongs = shuffleArray(songs).slice(0, 10);
  }

  $('top10List').innerHTML = listSongs.map((s,idx)=>`
    <div class="top10-item${selected && s.id===selected.id ? ' featured':''}">
      <div class="top10-num">${String(idx+1).padStart(2,'0')}</div>
      <div class="top10-info">
        <div class="top10-song">${mixedFontText(s.title)}</div>
        <div class="top10-artist">${mixedFontText(s.artist)}</div>
        <div class="top10-lyric">“${mixedFontText(s.lyric)}”</div>
      </div>
      <div class="top10-amt">∞</div>
    </div>`).join('');
  $('itemCount').textContent = listSongs.length;
}

function showResult(song){
  $('startView').style.display='none';
  $('resultView').classList.add('show');
  $('resultTitle').innerHTML=mixedFontText(song.title);
  $('resultArtist').innerHTML=mixedFontText(song.artist);
  $('resultLyric').innerHTML='“'+escapeHtml(song.lyric)+'”';

  const id=youtubeId(song.youtubeUrl);
  if(id){
    $('embed').innerHTML=`<iframe src="https://www.youtube.com/embed/${id}" title="${escapeHtml(song.title)}" referrerpolicy="strict-origin-when-cross-origin" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe><a class="yt-fallback" href="https://www.youtube.com/watch?v=${id}" target="_blank" rel="noopener noreferrer">YouTube에서 영상 보기 ↗</a>`;
  }else{
    $('embed').innerHTML=`<div class="embed-placeholder"><strong>🎧 ${escapeHtml(song.title)}</strong><span>YouTube 영상 링크를 연결하면 이곳에서 바로 감상할 수 있어요.</span></div>`;
  }

  const used=songs.length-state.remaining.length;
  $('status').textContent=`${state.remaining.length}곡이 남아 있어요`;
  $('footerMark').textContent=`${used} / ${songs.length} SONGS PICKED`;
  buildTop10(song);
  $('top10Section').style.display='block';
  window.scrollTo({top:0,behavior:'smooth'});
}
function resetRound(){
  state.remaining=[...songs];
  state.picked=[];
  $('resultView').classList.remove('show');
  $('startView').style.display='block';
  $('status').textContent='총 82곡이 준비되어 있어요';
  $('footerMark').textContent='MY YOUTH · RANDOM MUSIC';
  $('top10Section').style.display='none';
  $('top10List').innerHTML='';
  window.scrollTo({top:0,behavior:'smooth'});
}

function chooseSong(){
  if(state.busy || state.remaining.length===0) return;

  setBusy(true);

  // 버튼을 누른 동안 여러 곡이 빠르게 지나가는 랜덤 연출
  const preview = shuffleArray(state.remaining).slice(0, Math.min(8, state.remaining.length));
  let i = 0;

  const interval = setInterval(()=>{
    const s = preview[i % preview.length];
    $('resultTitle').textContent = s.title;
    $('resultArtist').textContent = s.artist;
    i++;
  }, 90);

  setTimeout(()=>{
    clearInterval(interval);

    // 남아 있는 곡 중 하나를 실제 결과로 확정
    const index = Math.floor(Math.random() * state.remaining.length);
    const song = state.remaining.splice(index, 1)[0];
    state.picked.unshift(song);

    showResult(song);
    setBusy(false);
  }, 850);
}

pickBtn.addEventListener('click', chooseSong);
againBtn.addEventListener('click', ()=>{
  if(state.remaining.length===0){
    if(confirm('82곡을 모두 뽑았어요. 처음부터 다시 시작할까요?')) resetRound();
  }else chooseSong();
});
