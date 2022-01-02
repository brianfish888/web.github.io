var points = 0;
// console.log(points)
// $(document).ready();

//test1

$('.one').on('click', function () {
    points += 2;
});
$('.two').on('click', function () {
    points += 4;
});
$('.three').on('click', function () {
    points += 6;
});
$('.block1').on('click', function () {
    $('.count').text(points);
    $('.test1').hide();
    $('.test2').show();
});

//test2

$('.two-one').on('click', function () {
    points += 6;
});
$('.two-two').on('click', function () {
    points += 4;
});
$('.two-three').on('click', function () {
    points += 7;
});
$('.two-four').on('click', function () {
    points += 2;
});
$('.two-five').on('click', function () {
    points += 1;
});
$('.block2').on('click', function () {
    $('.count').text(points);
    $('.test2').hide();
    $('.test3').show();
});

//test3

$('.three-one').on('click', function () {
    points += 4;
});
$('.three-two').on('click', function () {
    points += 2;
});
$('.three-three').on('click', function () {
    points += 5;
});
$('.three-four').on('click', function () {
    points += 7;
});
$('.three-five').on('click', function () {
    points += 6;
});
$('.block3').on('click', function () {
    $('.count').text(points);
    $('.test3').hide();
    $('.test4').show();
});

//test4

$('.four-one').on('click', function () {
    points += 7;
});
$('.four-two').on('click', function () {
    points += 6;
});
$('.four-three').on('click', function () {
    points += 4;
});
$('.four-four').on('click', function () {
    points += 2;
});
$('.four-five').on('click', function () {
    points += 1;
});
$('.block4').on('click', function () {
    $('.count').text(points);
    $('.test4').hide();
    $('.test5').show();
});

//test5

$('.five-one').on('click', function () {
    points += 4;
});
$('.five-two').on('click', function () {
    points += 2;
});
$('.five-three').on('click', function () {
    points += 3;
});
$('.five-four').on('click', function () {
    points += 5;
});
$('.five-five').on('click', function () {
    points += 6;
});
$('.five-five').on('click', function () {
    points += 1;
});
$('.block5').on('click', function () {
    $('.count').text(points);
    $('.test5').hide();
    $('.test6').show();
});

//test6

$('.six-one').on('click', function () {
    points += 4;
});
$('.six-two').on('click', function () {
    points += 6;
});
$('.six-three').on('click', function () {
    points += 2;
});
$('.six-four').on('click', function () {
    points += 1;
});
$('.block6').on('click', function () {
    $('.count').text(points);
    $('.test6').hide();
    $('.test7').show();
});
//test7
$('.seven-one').on('click', function () {
    points += 6;
});
$('.seven-two').on('click', function () {
    points += 7;
});
$('.seven-three').on('click', function () {
    points += 5;
});
$('.seven-four').on('click', function () {
    points += 4;
});
$('.seven-five').on('click', function () {
    points += 3;
});
$('.seven-six').on('click', function () {
    points += 2;
});
$('.seven-seven').on('click', function () {
    points += 1;
});
$('.block7').on('click', function () {
    $('.count').text(points);
    $('.test7').hide();
    $('.test8').show();
});
//test8
$('.eight-one').on('click', function () {
    points += 6;
});
$('.eight-two').on('click', function () {
    points += 2;
});
$('.eight-three').on('click', function () {
    points += 4;
});

$('.block8').on('click', function () {
    $('.count').text(points);
    $('.test8').hide();
    $('.test9').show();
});
//test9
$('.nine-one').on('click', function () {
    points += 6;
});
$('.nine-two').on('click', function () {
    points += 4;
});
$('.nine-three').on('click', function () {
    points += 2;
});
$('.block9').on('click', function () {
    $('.count').text(points);
    $('.test9').hide();
    $('.test10').show();
});

//test10
$('.ten-one').on('click', function () {
    points += 6;
});
$('.ten-two').on('click', function () {
    points += 4;
});
$('.ten-three').on('click', function () {
    points += 3;
});
$('.ten-three').on('click', function () {
    points += 5;
});

$('.block10').on('click', function () {
    $('.count').text(points);
    $('.test10').hide();
    $('.outcome').show();
    if (points > 0 && points < 21) {
        $('._1').show();
        $('._1').text('內傾性格');
        $('._1').text('你屬於那內傾性格，為人比較內向，處事風格有些優柔寡斷，常常害怕犯錯誤，習慣自我反省，社交場所上會很害羞，最害怕麻煩，所以不喜歡參加不必要的活動，也不想認識沒有關係的人。情緒常常處在比較低落的狀態，常常以弟弟、妹妹自稱，希望得到別人的保護與支持。');

    } else if (points > 20 && points < 31) {
        $('._2').show();
        $('._2').text('缺乏信心的挑惕者');
        $('._2').text('你是缺乏信心的挑惕者，你擁有近乎強迫症般的追求完美，有些類似於處女座。行事風格屬於謹慎小心型的，在一件事情沒有完全策劃好之前，你是不敢輕易去做的，這也反映了你缺乏自信心的表現，而且對於做事情的過程也很挑剔，不容許自己犯一點點的錯誤。');

    } else if (points > 30 && points < 41) {
        $('._3').show();
        $('._3').text('以牙還牙的自我保護者');
        $('._3').text('你是以牙還牙的自我保護者，你的內心有著很強的控制欲望，有著對於周圍的生活環境一貫性理解的強烈需求，當環境有一點風吹草動，你就會非常的敏感。對待朋友非常的忠誠，而且你更渴望對方也能夠同樣的態度來重視你。你最接受不了的是好朋友在背後議論你，這樣會讓你傷心欲絕，並因此產生報復的心理。');
    } else if (points > 40 && points < 51) {
        $('._4').show();
        $('._4').text('平衡而中庸');
        $('._4').text('你屬於平衡而中庸' + '\n' + '你的性格屬於中和性人格，為人有一定的謙遜姿態，但是同時有自己的主見，能夠理解他人，懂得照顧他人的感受，但同時不容許別人侵犯你。你有著很強的自我控制力，你下決心做的事情，一定會成功。很喜歡交朋友，人際關係處理的不錯，常常是朋友圈裡最值得信賴的人物。')
    } else if (points > 50 && points < 61) {
        $('._5').show();
        $('._5').text('你是吸引人的冒險家' + '\n' + '吸引人的冒險家你的性格屬於愛冒險的人，通常大腦的思維非常活躍，喜歡嘗試新鮮的事情，行事風格偏重感性，只要自己覺得可行就會馬上去做，而且通常不計後果。但是往往結果會有很好的驚喜等著你，決策方面果敢而堅決，不會受他人的影響，愛情方面你總能給對方一些驚喜。')
    } else {
        $('._6').show();
        $('._6').text('傲慢的孤獨者');
        $('._6').text('你是傲慢的孤獨者，你的性格是桀驁的野心家，從骨子裡透出來的傲氣，揚在眉角自信，很像是天蠍座或獅子座。但是你的性格過於孤傲，行事風格以自我為中心，很難考慮到他人的感受，在朋友間常常會讓人不敢靠近。你的內心有很強的支配慾望與控制慾望，你希望能夠得到很大的權利。');
    };
})

